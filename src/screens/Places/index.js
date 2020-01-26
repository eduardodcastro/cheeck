/* eslint-disable react/sort-comp */
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

import MapView from 'react-native-maps';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import getDirections from 'react-native-google-maps-directions';
import api from '../../services/api';
import {
  general, colors, images, metrics,
} from '../../styles';
import styles from './styles';

// eslint-disable-next-line react/prefer-stateless-function
export default class Places extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      header: null,
      headerLeft: null,
      headerRight: null,
    };
  }

  map = null;

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

    this.state = {
      // eslint-disable-next-line react/no-unused-state
      region: {
        // latitude: -19.938167,
        // longitude: -43.9364147,
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      ready: true,
      userId: null,
      dataResponse: [],
      loading: true,
    };
  }

  async componentDidMount() {
    // await this.checkAsyncStorage();
    await this.getPosition();
    // await this.requestPlaces();
  }

  getPosition = async () => {
    const ASPECT_RATIO = metrics.screenWidth / 160;
    const LATITUDE_DELTA = 0.00222;
    const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

    await navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        this.setState({
          // eslint-disable-next-line react/no-unused-state
          region: {
            latitude,
            longitude,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          },
        });
        // console.tron.log('Region', this.state.region);
        const { region } = this.state;
        this.setRegion(region);
      }, // success
      () => { }, // error
      {
        timeout: 3000, // tempo para buscar os dados => latitude, longitude
        enableHighAccuracy: true, // localização via GPS, mais precisão
        maximumAge: 1000, // cache da localização
      },
    );
  }

  onMapReady = (e) => {
    const { ready } = this.state;
    if (!ready) {
      this.setState({ ready: true });
    }
  };

  setRegion = async (region) => {
    const { ready } = this.state;
    if (ready) {
      setTimeout(() => this.map.animateToRegion(region), 10);
      await this.requestPlaces();
    }
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

      await this.requestPlaces();
    }
  }

  requestPlaces = async () => {
    // eslint-disable-next-line react/prop-types
    const { userId, region } = this.state;

    // if (userId.length === 0 && userId === null) return;

    await api.get('/cheeck_locals_list.php', {
      params: {
        data_hashkey: 'K_@cjg2w*n9C$$2${J~s',
        data_userlatitude: region.latitude,
        data_userlongitude: region.longitude,
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
              this.setState({ dataResponse: data, loading: false });
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

  handleGetDirections = async (latituteCo, longitudeCo) => {
    const { region } = this.state;
    // console.tron.log(`source: ${region.latitude} -- ${region.longitude} || destination: ${latituteCo} -- ${longitudeCo}`);
    const data = {
      source: {
        latitude: region.latitude, // region.latitude  -19.9339882
        longitude: region.longitude, // region.longitude  -43.9476645
      },
      destination: {
        latitude: parseFloat(latituteCo), // latituteCo  -19.9359915
        longitude: parseFloat(longitudeCo), // longitudeCo  -43.9312386
      },
      params: [
        {
          key: 'travelmode',
          value: 'walking', // may be "driving", may be "walking", "bicycling" or "transit" as well
        },
        {
          key: 'dir_action',
          value: 'navigate', // this instantly initializes navigation using the given travel mode
        },
      ],
    };
    // console.tron.log('Array', data);
    await getDirections(data);
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
            <View style={styles.cardPlace}>
              <Text style={styles.txtPlace}>{item.company_name}</Text>
              <Text style={styles.txtAddress}>{item.company_address}</Text>
            </View>
            <View style={styles.boxCardLink}>
              <TouchableOpacity onPress={() => this.handleGetDirections(item.latitude, item.longitude)} activeOpacity={0.9}>
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
                  style={styles.cardLink}
                >
                  <Text style={styles.txtLinkCard}>COMO CHEGAR</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        onRefresh={() => this.requestPlaces()}
        ListEmptyComponent={dataResponse.length === 0 ? this.renderEmptyList('Nenhum restaurante encontrado.') : null}
        refreshing={loading} // component loading example ActivityIndicator
      />
    );
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { navigation } = this.props;
    const { navigate } = navigation;
    const { region, dataResponse, loading } = this.state;
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
              <Text style={general.titleBackLink}>Locais</Text>
            </View>
          </LinearGradient>
        </View>

        <View style={general.menuBottom}>
          <TouchableOpacity style={general.mlink} onPress={() => navigate('CardsListScreen')}>
            <Image source={images.menuCards} style={general.mImages} />
            <Text style={[general.mtxtLink, general.mtxtPosTwo, general.mtxtPosThree]}>Cartões</Text>
          </TouchableOpacity>

          <TouchableOpacity style={general.mlink} onPress={() => navigate('PlacesScreen')}>
            <Image source={images.menuPlacesOn} style={general.mImages} />
            <Text style={[general.mtxtLink, general.linkHighlights, general.mtxtPosTwo]}>Locais</Text>
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

        <KeyboardAwareScrollView style={[styles.container]}>
          <View style={styles.instructions}>
            <Text style={styles.instructionsTitle}>Você esta aqui:</Text>
            <View style={general.youAreHereBorder}>
              <MapView
                // eslint-disable-next-line react-native/no-inline-styles
                style={[styles.youAreHere, { flex: 1, height: 160 }]}
                showsUserLocation
                loadingEnabled
                // eslint-disable-next-line arrow-parens
                ref={map => { this.map = map; }}
                initialRegion={region}
                onMapReady={this.onMapReady}
              >
                {dataResponse.map(data => (
                  <MapView.Marker
                    key={data.id}
                    coordinate={{
                      latitude: parseFloat(data.latitude),
                      longitude: parseFloat(data.longitude),
                    }}
                    // onMarkerPress={this.callNumber(data.phone)}
                    title={data.company_name}
                    description={data.company_address}
                    // image={placeMarker}
                  >
                    <Icon
                      name={Platform.OS === 'ios' ? 'ios-pin' : 'md-pin'}
                      color={colors.regular}
                      size={32}
                      // style={general.iconBackLink}
                    />
                  </MapView.Marker>
                ))}
              </MapView>
            </View>
            <Text style={styles.instructionsTitle}>Estabelecimentos próximos:</Text>
          </View>

          <View style={styles.list}>
            {loading ? (<ActivityIndicator color={colors.primary} />) : this.renderList()}
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}
