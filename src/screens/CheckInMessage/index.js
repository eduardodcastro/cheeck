/* eslint-disable react/self-closing-comp */
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
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
export default class CheckInMessage extends Component {
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
      message: null,
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    const {
      message,
    } = navigation.state.params;

    this.setState({ message });
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { navigation } = this.props;
    const { navigate } = navigation;
    const { message } = this.state;

    let symbol;
    let phrase;
    let phraseSub;
    let navigationIcon;
    let navigationScreen;

    switch (message) {
      case 'error_qrcode':
        symbol = ':(';
        phrase = 'O Qrcode informado não está cadastrado.';
        phraseSub = 'Você pode tentar novamente uma nova leitura após 60 minutos.';
        navigationIcon = 'arrow-back';
        navigationScreen = 'CardsListScreen';
        break;
      case 'error_full_card':
        symbol = ':)';
        phrase = 'Você já completou os check-in desse restaurante.';
        phraseSub = 'Você pode tentar novamente uma nova leitura após 60 minutos.';
        navigationIcon = 'arrow-back';
        navigationScreen = 'CardsListScreen';
        break;

      case 'error_distance':
        symbol = ':(';
        phrase = 'Me parece que você não se encontra nesse restaurante.';
        phraseSub = 'Você pode tentar novamente uma nova leitura após 60 minutos.';
        navigationIcon = 'arrow-back';
        navigationScreen = 'CardsListScreen';
        break;
      default:
        symbol = ';)';
        phrase = 'Checkin feito com sucesso!';
        phraseSub = 'Você pode tentar novamente uma nova leitura após 60 minutos.';
        navigationIcon = 'arrow-forward';
        navigationScreen = 'ProfileScreen';
    }

    return (
      <View style={styles.container}>
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
          style={styles.safearea}
        >
          <View style={styles.boxMessage}>
            <Text style={styles.txtSymbol}>{symbol}</Text>
            <Text style={styles.txtMessage}>{phrase}</Text>
            <Text style={styles.txtMessageTwo}>{phraseSub}</Text>

            <TouchableOpacity onPress={() => navigate(navigationScreen)}>
              <View style={[styles.contentCircle, navigationIcon === 'arrow-back' ? styles.contentCircleBack : null]}>
                <Icon
                  // name={Platform.OS === 'ios' ? 'ios-arrow-forward' : 'md-arrow-forward'}
                  name={Platform.OS === 'ios' ? `ios-${navigationIcon}` : `ios-${navigationIcon}`}
                  color={colors.white}
                  size={Platform.OS === 'ios' ? 30 : 30}
                  style={styles.iconLink}
                />
              </View>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    );
  }
}
