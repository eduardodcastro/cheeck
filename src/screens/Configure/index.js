/* eslint-disable react/self-closing-comp */
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  AsyncStorage,
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  general, colors, images,
} from '../../styles';
import styles from './styles';

// eslint-disable-next-line react/prefer-stateless-function
export default class Configure extends Component {
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

    this.state = { checked: false };
  }

  componentDidMount() {

  }

  goOut = () => {
    const { navigation } = this.props;
    const { navigate } = navigation;

    AsyncStorage.removeItem('@AppCheeck:dataUser');
    navigate('HomeScreen');
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { navigation } = this.props;
    const { navigate } = navigation;
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
              <Text style={general.titleBackLink}>Ajustes</Text>
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
            <Image source={images.menuAwards} style={general.mImages} />
            <Text style={[general.mtxtLink, general.mtxtPosTwo]}>Prêmios</Text>
          </TouchableOpacity>

          <TouchableOpacity style={general.mlink} onPress={() => navigate('ConfigureScreen')}>
            <Image source={images.menuConfigurationOn} style={general.mImages} />
            <Text style={[general.mtxtLink, general.linkHighlights, general.mtxtPosTwo]}>Ajustes</Text>
          </TouchableOpacity>
        </View>

        <KeyboardAwareScrollView style={[styles.container]}>
          <View style={styles.configList}>
            <View style={styles.boxContent}>
              <Text style={styles.configTitle}>Configurações</Text>
            </View>

            <TouchableOpacity style={styles.boxContent} onPress={() => navigate('PasswordChangeScreen')}>
              <Text style={[styles.configLink]}>Alterar Senha</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.boxContent}
              onPress={() => navigate('ConfigureContentScreen', {
                content: 'privacidade',
              })}
            >
              <Text style={[styles.configLink]}>Privacidade</Text>
            </TouchableOpacity>

            {/* <View style={[styles.boxContent, styles.listNotify]}>
              <Text style={[styles.configLink, styles.notifyTitle]}>Notificações</Text>
              <CheckBox
                style={[styles.checkBox]}
                value={this.state.checked}
                onValueChange={() => this.setState({ checked: !this.state.checked })}
              />
            </View>

            <View style={styles.boxContent}>
              <Text style={styles.configTitle}>Configurações</Text>
            </View> */}

            <TouchableOpacity
              style={styles.boxContent}
              onPress={() => navigate('ConfigureContentScreen', {
                content: 'suporte',
              })}
            >
              <Text style={[styles.configLink]}>Suporte</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.boxContent}
              onPress={() => navigate('ConfigureContentScreen', {
                content: 'sobreo',
              })}
            >
              <Text style={[styles.configLink]}>Sobre o Cheeck</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity style={styles.boxContent} onPress={() => null}>
              <Text style={[styles.configLink]}>Desativar minha conta</Text>
            </TouchableOpacity> */}

            <TouchableOpacity style={styles.boxContent} onPress={() => this.goOut()}>
              <Text style={[styles.configLink, styles.logout]}>Sair</Text>
            </TouchableOpacity>

          </View>

        </KeyboardAwareScrollView>
      </View>
    );
  }
}
