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

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import QRCodeScanner from 'react-native-qrcode-scanner';
import api from '../../services/api';
import {
  general, colors, images, metrics,
} from '../../styles';
import styles from './styles';

// eslint-disable-next-line react/prefer-stateless-function
export default class Scanner extends Component {
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
      // eslint-disable-next-line react/no-unused-state
      userId: null,
      qrcodeId: null,
      latitude: null,
      longitude: null,
      // dataResponse: [],
      // loading: true,
    };
  }

  async componentDidMount() {
    await this.checkAsyncStorage();
    await this.getPosition();
  }

  // eslint-disable-next-line class-methods-use-this
  onCloseModal(message) {
    setTimeout(() => {
      Alert.alert('Ops!', message);
    }, 500);
  }

  getPosition = async () => {
    await navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        this.setState({
          // eslint-disable-next-line react/no-unused-state
          latitude,
          longitude,
        });
        // console.tron.log(`${this.state.latitude} || ${this.state.longitude}`);
      }, // success
      () => { }, // error
      {
        timeout: 3000, // tempo para buscar os dados => latitude, longitude
        enableHighAccuracy: true, // localização via GPS, mais precisão
        maximumAge: 1000, // cache da localização
      },
    );
  }

  checkAsyncStorage = async () => {
    const value = await AsyncStorage.getItem('@AppCheeck:dataUser');
    const parsed = JSON.parse(value);
    if (parsed !== null) {
      // console.tron.log('STORAGE', parsed);
      this.setState({ userId: parsed.id });
    }
  }

  requestScanner = async (qrcodeId) => {
    const { navigate } = this.props.navigation;
    // eslint-disable-next-line react/prop-types

    await this.getPosition();
    
    const { userId, latitude, longitude } = this.state;

    if (userId.length === 0 || userId === null) return;

    await api.get('/cheeck_insert_checkin.php', {
      params: {
        user_id: userId,
        qrcode_id: qrcodeId,
        data_userlatitude: latitude,
        data_userlongitude: longitude,
      },
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          // console.tron.clear();
          // console.tron.log('RESPONSE', response);
          setTimeout(() => {
            const { data } = response;
            if (data.length > 0) {
              navigate('CheckInMessageScreen', {
                message: data,
              });
            }
          }, 500);
        } else {
          const message = 'Problema de conexão com a internet. Tente mais tarde.';
          this.onCloseModal(message);
        }
      })
      .catch((error) => {
        const message = 'Ocorreu um problema de conexão. Tente mais tarde.';
        this.onCloseModal(message);
      });
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { navigation } = this.props;
    const { navigate } = navigation;
    return (
      <View style={styles.container}>
        <QRCodeScanner
          // onRead={this.onSuccess.bind(this)}
          onRead={e => this.requestScanner(e.data)}
          reactivate
          reactivateTimeout={3600000} // referente a uma hora
          // reactivateTimeout={1000}
          showMarker
          cameraStyle={{ height: metrics.heightScreen }}
          customMarker={
            // eslint-disable-next-line react/jsx-wrap-multilines
            <View style={styles.container}>
              <View style={styles.topOverlay}>
                <View style={styles.contentBackLink}>
                  <TouchableOpacity onPress={() => navigate('ProfileScreen')}>
                    <Icon
                      name={Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back'}
                      color={colors.white}
                      size={30}
                      style={general.iconBackLink}
                    />
                  </TouchableOpacity>
                </View>
                <Image source={images.logo} style={styles.logo} />
              </View>

              <View style={styles.flexDirection}>
                <View style={styles.leftAndRightOverlay} />

                <View style={styles.rectangle}>
                  <Icon
                    name={Platform.OS === 'ios' ? 'ios-qr-scanner' : 'md-qr-scanner'}
                    color={colors.primary}
                    size={metrics.widthScreen * 0.73}
                    style={styles.iconQrCode}
                  />
                </View>

                <View style={styles.leftAndRightOverlay} />
              </View>
              <View style={styles.bottomOverlay}>
                <Text style={styles.txtQrCode}>[ Leia o Qr Code do restaurante ]</Text>
              </View>
            </View>
          }
        />
      </View>
    );
  }
}
