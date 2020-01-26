/* eslint-disable react/self-closing-comp */
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
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
export default class Prize extends Component {
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
      dataResponse: [],
      loading: true,
    };
  }

  async componentDidMount() {
    // AsyncStorage.removeItem('@AppSan:dataFilter');
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

      await this.requestPrize();
    }
  }

  requestPrize = async () => {
    // eslint-disable-next-line react/prop-types
    const { userId } = this.state;

    if (userId.length === 0 && userId === null) return;

    await api.get('/cheeck_awards_list.php', {
      params: {
        data_hashkey: 'K_@cjg2w*n9C$$2${J~s',
        user_id: userId,
      },
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          // console.tron.clear();
          // console.tron.log('RESPONSE', response);
          setTimeout(() => {
            const { data } = response;
            if (data.length > 0 && data !== 'result_empty') {
              // const message = 'Login realizado com sucesso!';
              // eslint-disable-next-line react/no-unused-state
              this.setState({ dataResponse: data, loading: false });
            } else {
              this.setState({ loading: false });
            }
          }, 500);
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
    <View style={styles.listCard}>
      <View style={styles.cardPlace}>
        <Text style={styles.txtAddress}>{msg}</Text>
      </View>
    </View>
  );

  renderList = () => {
    const { dataResponse, loading } = this.state;
    return (
      <FlatList
        data={dataResponse}
        // keyExtractor={item => String(item.imovel_Id)}
        keyExtractor={(_item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.listCard}>
            <Icon
              name={Platform.OS === 'ios' ? 'ios-trophy' : 'md-trophy'}
              color={colors.primary}
              size={40}
            // style={general.iconBackLink}
            />
            <View style={styles.cardPlace}>
              <Text style={styles.txtPlace}>{item.company_name}</Text>
              <Text style={styles.txtAddress}>{item.register_date}</Text>
            </View>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        onRefresh={() => this.requestPrize()}
        ListEmptyComponent={dataResponse.length === 0 ? this.renderEmptyList('Nenhum prêmio encontrado.') : null}
        refreshing={loading} // component loading example ActivityIndicator
      />
    );
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { navigation } = this.props;
    const { navigate } = navigation;
    const { dataResponse, loading } = this.state;
    // console.tron.log('DATA', dataResponse);
    return (
      <View style={[styles.container, styles.scrollHeight]}>
        <View style={styles.contentHead}>
          <LinearGradient
            start={{
              x: 0.31,
              y: 1.1,
            }}
            end={{
              x: 0.69,
              y: -0.1,
            }}
            locations={[0, 1]}
            colors={[colors.gradientPrimary, colors.gradientSecundary]}
            style={general.heading}
          >
            <View style={general.contentHeading}>
              <TouchableOpacity onPress={() => navigate('ProfileScreen')}>
                <Icon
                  name={Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back'}
                  color={colors.white}
                  size={25}
                  style={general.iconBackLink}
                />
              </TouchableOpacity>
              <Text style={general.titleBackLink}>Prêmios</Text>
            </View>
          </LinearGradient>
        </View>

        <View style={general.menuBottom}>
          <TouchableOpacity style={general.mlink} onPress={() => navigate('CardsListScreen')}>
            <Image source={images.menuCards} style={general.mImages} />
            <Text style={[general.mtxtLink, general.mtxtPosTwo, general.mtxtPosThree]}>Cartões</Text>
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
            <Image source={images.menuAwardsOn} style={general.mImages} />
            <Text style={[general.mtxtLink, general.linkHighlights, general.mtxtPosTwo]}>Prêmios</Text>
          </TouchableOpacity>

          <TouchableOpacity style={general.mlink} onPress={() => navigate('ConfigureScreen')}>
            <Image source={images.menuConfiguration} style={general.mImages} />
            <Text style={[general.mtxtLink, general.mtxtPosTwo]}>Ajustes</Text>
          </TouchableOpacity>
        </View>

        <KeyboardAwareScrollView style={[styles.container]}>
          <View style={styles.instructions}>
            <Text style={styles.instructionsTitle}>Veja os prêmios que já ganhou:</Text>
          </View>

          <View style={styles.list}>
            {loading ? (<ActivityIndicator color={colors.primary} />) : this.renderList()}
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}
