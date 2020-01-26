/* eslint-disable react/self-closing-comp */
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  FlatList,
  Platform,
  Alert,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import api from '../../services/api';
import {
  general, colors, images,
} from '../../styles';
import styles from './styles';

// eslint-disable-next-line react/prefer-stateless-function
export default class CardsCheckIn extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      header: null,
      headerLeft: null,
      headerRight: null,
    };
  }

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

    this.state = {
      userId: null,
      companyId: null,
      companyName: null,
      companyAddress: null,
      // numberCheckin: null,
      dataResponse: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const { navigation } = this.props;
    const {
      companyId,
      companyName,
      companyAddress,
    } = navigation.state.params;

    this.setState({
      companyId,
      companyName,
      companyAddress,
    });

    await this.checkAsyncStorage();
  }

  // eslint-disable-next-line class-methods-use-this
  onCloseModal(message) {
    setTimeout(() => {
      Alert.alert('Ops!', message);
    }, 500);
  }

  checkAsyncStorage = async () => {
    const value = await AsyncStorage.getItem('@AppCheeck:dataUser');
    const parsed = JSON.parse(value);
    if (parsed !== null) {
      // console.tron.log('STORAGE', parsed);
      this.setState({ userId: parsed.id });

      await this.requestCheckIn();
    }
  }

  requestCheckIn = async () => {
    // eslint-disable-next-line react/prop-types
    const { userId, companyId } = this.state;

    if (userId.length === 0 && userId === null) return;

    await api.get('/cheeck_list_checkin.php', {
      params: {
        data_hashkey: 'K_@cjg2w*n9C$$2${J~s',
        user_id: userId,
        company_id: companyId,
      },
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          // console.tron.clear();
          // console.tron.log('RESPONSE', response);
          setTimeout(() => {
            const { data } = response;
            if (data.length > 0) {
              // const message = 'Login realizado com sucesso!';
              // eslint-disable-next-line react/no-unused-state
              this.setState({
                dataResponse: data,
                loading: false,
              });
            }
          }, 200);
        } else {
          const message = 'Problema de conexão com a internet. Tente mais tarde.';
          this.onCloseModal(message);
        }
      })
      .catch((error) => {
        // console.tron.log(error);
        const message = 'Ocorreu um problema de conexão. Tente mais tarde.';
        this.onCloseModal(message);
      });
  }

  renderEmptyList = msg => (
    <View style={styles.cardDescription}>
      <Text style={styles.cardTitle}>{msg}</Text>
    </View>
  );

  renderList = () => {
    const { dataResponse, loading } = this.state;
    const tmpResponse = dataResponse.slice(0, -1);
    return (
      <FlatList
        numColumns={5}
        contentContainerStyle={styles.flatListContent}
        data={tmpResponse}
        // keyExtractor={item => String(item.imovel_Id)}
        keyExtractor={(_item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.checkItem}>
            <View style={[styles.checkCircle, item.data === 0 ? styles.checkCircleOff : null]}>
              <Icon
                name={Platform.OS === 'ios' ? 'ios-checkmark' : 'md-checkmark'}
                color={colors.white}
                size={Platform.OS === 'ios' ? 45 : 25}
                style={styles.iconCheck}
              />
            </View>
            { item.data !== 0
              ? (<Text style={styles.checkDate}>{item.data}</Text>)
              : null }
          </View>
        )}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        onRefresh={() => this.requestCheckIn()}
        // ListEmptyComponent={dataResponse.length === 0 ? this.renderEmptyList('Nenhum carimbo encontrado.') : null}
        refreshing={loading} // component loading example ActivityIndicator
      />
    );
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const {
      userId,
      companyId,
      companyName,
      companyAddress,
      dataResponse,
      loading,
    } = this.state;
    const { navigation } = this.props;
    const { navigate } = navigation;

    const numberCheckin = dataResponse.slice(-1)[0];

    return (
      <View style={[styles.container, styles.scrollHeight]}>
        <KeyboardAwareScrollView style={styles.container}>
          <View style={styles.contentHead}>
            <ImageBackground source={images.imageHead} style={styles.head}>
              <View style={styles.headerBackLink}>
                <TouchableOpacity style={styles.backLink} onPress={() => navigate('CardsListScreen')}>
                  <Icon
                    name={Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back'}
                    color={colors.white}
                    size={25}
                    style={styles.iconBackLink}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.headerRefresh}>
                <TouchableOpacity style={styles.backLink} onPress={() => this.requestCheckIn()}>
                  <Icon
                    name={Platform.OS === 'ios' ? 'ios-refresh' : 'md-refresh'}
                    color={colors.white}
                    size={25}
                    style={styles.iconRefresh}
                  />
                </TouchableOpacity>
              </View>

              <Image source={images.logo} style={styles.logo} />
            </ImageBackground>
          </View>

          <View style={styles.infoCard}>
            <View style={styles.infoPlace}>
              <Text style={styles.placeName}>{companyName}</Text>
              <Text style={styles.placeAddress}>{companyAddress}</Text>
            </View>

            <View style={styles.cardCheck}>
              <View style={styles.cardDescription}>
                <Text style={styles.cardTitle}>
                  Faltam
                  <Text style={styles.number}>
                    {' '}
                    {numberCheckin}
                    {' '}
                  </Text>
                  carimbos para você receber seu prêmio.
                </Text>
              </View>

              <View style={styles.cardListCheck}>
                {loading ? (<ActivityIndicator color={colors.primary} />) : this.renderList()}
              </View>
              {!loading
                ? (
                  <TouchableOpacity
                    onPress={numberCheckin > 0
                      ? () => null
                      : () => navigate('PremiumScreen', {
                        userId,
                        companyId,
                      })}
                    activeOpacity={0.9}
                  >
                    <LinearGradient
                      start={{
                        x: -0.01,
                        y: 0.51,
                      }}
                      end={{
                        x: 1.01,
                        y: 0.49,
                      }}
                      locations={[0, 1]}
                      colors={numberCheckin > 0 ? [colors.light, colors.light] : [colors.gradientPrimary, colors.gradientSecundary]}
                      style={general.btnDefault}
                    >
                      <Text style={[general.txtBtnDefault, general.txtBtnPosition]}>RECEBER MEU PRÊMIO</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                )
                : null }
              {/* <TouchableOpacity onPress={() => navigate('SignupTwoScreen')}>
                <LinearGradient
                  start={{
                    x: -0.01,
                    y: 0.51,
                  }}
                  end={{
                    x: 1.01,
                    y: 0.49,
                  }}
                  locations={[0, 1]}
                  colors={[colors.gradientPrimary, colors.gradientSecundary]}
                  style={general.btnDefault}
                >
                  <Text style={[general.txtBtnDefault, general.txtBtnPosition]}>RECEBER MEU PRÊMIO</Text>
                </LinearGradient>
              </TouchableOpacity> */}
            </View>
          </View>
        </KeyboardAwareScrollView>

        <View style={general.menuBottom}>
          <TouchableOpacity style={general.mlink} onPress={() => navigate('CardsListScreen')}>
            <Image source={images.menuCardsOn} style={general.mImages} />
            <Text style={[general.mtxtLink, general.linkHighlights, general.mtxtPosTwo, general.mtxtPosThree]}>Cartões</Text>
          </TouchableOpacity>

          <TouchableOpacity style={general.mlink} onPress={() => navigate('PlacesScreen')}>
            <Image source={images.menuPlaces} style={general.mImages} />
            <Text style={[general.mtxtLink, general.mtxtPosTwo]}>Locais</Text>
          </TouchableOpacity>

          <TouchableOpacity style={general.mlink} onPress={() => navigate('ScannerScreen')}>
            <Image source={images.menuRead} style={general.mImages} />
            <Text style={[general.mtxtLink, general.mtxtPos]}>Ler QR Code</Text>
          </TouchableOpacity>

          <TouchableOpacity style={general.mlink} onPress={() => navigate('PrizeScreen')}>
            <Image source={images.menuAwards} style={general.mImages} />
            <Text style={[general.mtxtLink, general.mtxtPosTwo]}>Prêmios</Text>
          </TouchableOpacity>

          <TouchableOpacity style={general.mlink} onPress={() => navigate('ConfigureScreen')}>
            <Image source={images.menuConfiguration} style={general.mImages} />
            <Text style={[general.mtxtLink, general.mtxtPosTwo]}>Ajustes</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
