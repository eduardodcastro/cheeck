/* eslint-disable react/self-closing-comp */
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  Platform,
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  general, colors, images,
} from '../../styles';
import styles from './styles';

// eslint-disable-next-line react/prefer-stateless-function
export default class CardsCheckInComplete extends Component {
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
  }

  componentDidMount() {

  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { navigation } = this.props;
    const { navigate } = navigation;
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
                <TouchableOpacity style={styles.backLink} onPress={() => navigate('HomeScreen')}>
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
              <Text style={styles.placeName}>Dona Lourdes</Text>
              <Text style={styles.placeAddress}>Vila da Serra - Nova Lima</Text>
            </View>

            <View style={styles.cardCheck}>
              <View style={styles.cardDescription}>
                <Text style={styles.cardTitle}>
                  Faltam
                  <Text style={styles.number}> 0 </Text>
                  carimbos para você receber seu prêmio.
                </Text>
              </View>

              <View style={styles.cardListCheck}>
                <View style={styles.checkItem}>
                  <View style={styles.checkCircle}>
                    <Icon
                      name={Platform.OS === 'ios' ? 'ios-checkmark' : 'md-checkmark'}
                      color={colors.white}
                      size={Platform.OS === 'ios' ? 45 : 25}
                      style={styles.iconCheck}
                    />
                  </View>
                  <Text style={styles.checkDate}>21/12</Text>
                </View>

                <View style={styles.checkItem}>
                  <View style={styles.checkCircle}>
                    <Icon
                      name={Platform.OS === 'ios' ? 'ios-checkmark' : 'md-checkmark'}
                      color={colors.white}
                      size={Platform.OS === 'ios' ? 45 : 25}
                      style={styles.iconCheck}
                    />
                  </View>
                  <Text style={styles.checkDate}>22/12</Text>
                </View>

                <View style={styles.checkItem}>
                  <View style={styles.checkCircle}>
                    <Icon
                      name={Platform.OS === 'ios' ? 'ios-checkmark' : 'md-checkmark'}
                      color={colors.white}
                      size={Platform.OS === 'ios' ? 45 : 25}
                      style={styles.iconCheck}
                    />
                  </View>
                  <Text style={styles.checkDate}>23/12</Text>
                </View>

                <View style={styles.checkItem}>
                  <View style={styles.checkCircle}>
                    <Icon
                      name={Platform.OS === 'ios' ? 'ios-checkmark' : 'md-checkmark'}
                      color={colors.white}
                      size={Platform.OS === 'ios' ? 45 : 25}
                      style={styles.iconCheck}
                    />
                  </View>
                  <Text style={styles.checkDate}>26/12</Text>
                </View>

                <View style={styles.checkItem}>
                  <View style={styles.checkCircle}>
                    <Icon
                      name={Platform.OS === 'ios' ? 'ios-checkmark' : 'md-checkmark'}
                      color={colors.white}
                      size={Platform.OS === 'ios' ? 45 : 25}
                      style={styles.iconCheck}
                    />
                  </View>
                  <Text style={styles.checkDate}>27/12</Text>
                </View>

                <View style={styles.checkItem}>
                  <View style={styles.checkCircle}>
                    <Icon
                      name={Platform.OS === 'ios' ? 'ios-checkmark' : 'md-checkmark'}
                      color={colors.white}
                      size={Platform.OS === 'ios' ? 45 : 25}
                      style={styles.iconCheck}
                    />
                  </View>
                  <Text style={styles.checkDate}>28/12</Text>
                </View>

                <View style={styles.checkItem}>
                  <View style={styles.checkCircle}>
                    <Icon
                      name={Platform.OS === 'ios' ? 'ios-checkmark' : 'md-checkmark'}
                      color={colors.white}
                      size={Platform.OS === 'ios' ? 45 : 25}
                      style={styles.iconCheck}
                    />
                  </View>
                  <Text style={styles.checkDate}>29/12</Text>
                </View>

                <View style={styles.checkItem}>
                  <View style={styles.checkCircle}>
                    <Icon
                      name={Platform.OS === 'ios' ? 'ios-checkmark' : 'md-checkmark'}
                      color={colors.white}
                      size={Platform.OS === 'ios' ? 45 : 25}
                      style={styles.iconCheck}
                    />
                  </View>
                  <Text style={styles.checkDate}>30/12</Text>
                </View>

                <View style={styles.checkItem}>
                  <View style={[styles.checkCircle]}>
                    <Icon
                      name={Platform.OS === 'ios' ? 'ios-checkmark' : 'md-checkmark'}
                      color={colors.white}
                      size={Platform.OS === 'ios' ? 45 : 25}
                      style={styles.iconCheck}
                    />
                  </View>
                  <Text style={styles.checkDate}>02/01</Text>
                </View>

                <View style={styles.checkItem}>
                  <View style={[styles.checkCircle]}>
                    <Icon
                      name={Platform.OS === 'ios' ? 'ios-checkmark' : 'md-checkmark'}
                      color={colors.white}
                      size={Platform.OS === 'ios' ? 45 : 25}
                      style={styles.iconCheck}
                    />
                  </View>
                  <Text style={styles.checkDate}>03/01</Text>
                </View>

              </View>

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
                  colors={[colors.light, colors.light]}
                  style={general.btnDefault}
                >
                  <Text style={general.txtBtnDefault}>RECEBER MEU PRÊMIO</Text>
                </LinearGradient>
              </TouchableOpacity> */}

              <TouchableOpacity onPress={() => navigate('PremiumScreen')} activeOpacity={0.9}>
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
              </TouchableOpacity>
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
