/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/self-closing-comp */
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  AsyncStorage,
  Alert,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import api from '../../services/api';
import {
  general, colors, images,
} from '../../styles';
import styles from './styles';

// eslint-disable-next-line react/prefer-stateless-function
export default class Profile extends Component {
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
      nameUser: null,
      checkin: 0,
      company: 0,
      awards: 0,
      companylast: null,
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
    // console.tron.log('STORAGE', parsed.id);
    if (parsed !== null) {
      this.setState({ userId: parsed.id.toString() });
      await this.requestProfile();
    }
  }

  requestProfile = async () => {
    // eslint-disable-next-line react/prop-types
    const { userId } = this.state;

    if (userId.length === 0 || userId === null) return;

    await api.get('/cheeck_dasboard.php', {
      params: {
        data_hashkey: 'K_@cjg2w*n9C$$2${J~s',
        data_id: userId,
      },
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          // console.tron.clear();
          // console.tron.log('RESPONSE', response);
          setTimeout(() => {
            const [data] = response.data;

            if (data.message === 'success_dasboard') {
              // const message = 'Login realizado com sucesso!';
              this.setState({
                nameUser: data.name,
                checkin: data.checkin,
                company: data.company,
                awards: data.awards,
                companylast: data.companylast,
              });
            } else {
              // const message = 'Problema de conexão com a internet. Tente mais tarde.';
              // this.onCloseModal(message);
              this.setState({
                nameUser: null,
                checkin: 0,
                company: 0,
                awards: 0,
                companylast: null,
              });
            }
          }, 0);
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

  render() {
    // eslint-disable-next-line react/prop-types
    const { navigation } = this.props;
    const { navigate } = navigation;
    const {
      nameUser,
      checkin,
      company,
      awards,
      companylast,
    } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.contentHead}>
          <ImageBackground source={images.head} style={styles.head}>
            <Image source={images.logo} style={styles.logo} />
          </ImageBackground>
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
            <Image source={images.menuAwards} style={general.mImages} />
            <Text style={[general.mtxtLink, general.mtxtPosTwo]}>Prêmios</Text>
          </TouchableOpacity>

          <TouchableOpacity style={general.mlink} onPress={() => navigate('ConfigureScreen')}>
            <Image source={images.menuConfiguration} style={general.mImages} />
            <Text style={[general.mtxtLink, general.mtxtPosTwo]}>Ajustes</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.boxContent}>
          <View style={styles.userData}>
            <Text style={styles.userName}>{nameUser}</Text>
            <Text style={styles.lastCheck}>
              último check in: {companylast}
            </Text>
          </View>

          <View style={styles.dataNumber}>
            <View style={styles.dataContent}>
              <Text style={styles.boxNumber}>{checkin || 0}</Text>
              <Text style={styles.boxType}>Carimbos</Text>
            </View>

            <View style={styles.dataContent}>
              <Text style={styles.boxNumber}>{company || 0}</Text>
              <Text style={styles.boxType}>Estabelecimentos</Text>
            </View>

            <View style={styles.dataContent}>
              <Text style={styles.boxNumber}>{awards || 0}</Text>
              <Text style={styles.boxType}>Prêmios</Text>
            </View>
          </View>

          <TouchableOpacity onPress={() => navigate('CardsListScreen')} activeOpacity={0.9}>
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
              style={[general.btnDefault, styles.btnLinear]}
            >
              <Text style={[general.txtBtnDefault, general.txtBtnPosition]}>VEJA SEUS CARTÕES</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
