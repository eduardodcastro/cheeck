/* eslint-disable react/self-closing-comp */
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Platform,
  Share,
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  general, colors, images,
} from '../../styles';
import styles from './styles';

// eslint-disable-next-line react/prefer-stateless-function
export default class ToShared extends Component {
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
      awardsDate: null,
      awardsHour: null,
      awardsCode: null,
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    const {
      awardsDate,
      awardsHour,
      awardsCode,
    } = navigation.state.params;

    this.setState({
      awardsDate,
      awardsHour,
      awardsCode,
    });
  }

  onShare = () => {
    Share.share({
      title: 'Cheeck',
      url: 'http://www.cheeck.com.br',
      message: 'Aplicativo Cheeck \nVeja em tempo real e tenha controle da quantidade de carimbos e prêmios oferecidos. \nAcesse: http://www.cheeck.com.br',
      // subject: 'Aplicativo Cheeck',
    }, {
      dialogTitle: 'Aplicativo Cheeck',
    });
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { navigation } = this.props;
    const { navigate } = navigation;
    const { awardsDate, awardsHour, awardsCode } = this.state;
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
          <View style={styles.prizeCard}>
            <Text style={styles.phraseOnePrize}>Cartão Prêmio</Text>
            <Text style={styles.phraseTwoPrize}>(apresente no caixa)</Text>
          </View>

          <View style={styles.boxPremium}>
            <Image source={images.trophy} style={styles.trophy} />

            <View style={styles.contentPremium}>
              <Text style={styles.phraseOne}>Você ganhou seu prêmio.</Text>
              <Text style={styles.phraseTwo}>Parabéns!</Text>
            </View>

            <TouchableOpacity onPress={() => this.onShare()} activeOpacity={0.9}>
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
                style={[general.btnDefault, styles.btnToShared]}
              >

                <Icon
                  name={Platform.OS === 'ios' ? 'ios-share' : 'md-share'}
                  color={colors.white}
                  size={25}
                  style={styles.iconToShared}
                />
              </LinearGradient>
            </TouchableOpacity>

            <Text style={[styles.phraseOne, styles.phraseToShared]}>COMPARTILHE ISSO!</Text>
          </View>

          <View style={styles.notice}>
            <Text style={styles.noticeMessage}>
              DATA:
              {' '}
              {awardsDate}
              {' '}
              - HORÁRIO:
              {' '}
              {awardsHour}
            </Text>
            <Text style={styles.noticeMessage}>
              NÚMERO DE CONTROLE:
              {' '}
              {awardsCode}
            </Text>
          </View>

          <TouchableOpacity style={styles.linkBack} onPress={() => navigate('CardsListScreen', { listUpdate: true })} activeOpacity={0.9}>
            <Icon
              name={Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back'}
              color={colors.white}
              size={25}
              style={styles.iconToShared}
            />
            <Text style={styles.txtLinkBack}>VOLTAR</Text>
          </TouchableOpacity>

        </LinearGradient>
      </View>
    );
  }
}
