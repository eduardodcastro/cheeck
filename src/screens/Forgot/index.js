/* eslint-disable react/self-closing-comp */
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Platform,
  Alert,
  Modal,
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
export default class Forgot extends Component {
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
    // eslint-disable-next-line react/no-unused-state
    this.state = { showModal: false, userEmail: '' };
  }

  componentDidMount() {

  }

  onShowModal = () => {
    // eslint-disable-next-line react/no-unused-state
    this.setState({ showModal: true });
  }

  onCloseModal(message) {
    setTimeout(() => {
      this.onCloseModal2(message);
    }, 500);
  }

  onCloseModal2(amessage) {
    // eslint-disable-next-line react/no-unused-state
    this.setState({ showModal: false }, () => {
      setTimeout(() => {
        Alert.alert('Ops!', amessage);
      }, 500);
    });
  }

  onCloseModalNoMsg() {
    setTimeout(() => {
      this.onCloseModalNoMsg2();
    }, 0);
  }

  onCloseModalNoMsg2() {
    // eslint-disable-next-line react/no-unused-state
    this.setState({ showModal: false }, () => {
    });
  }

  actionForgotComplete = async () => {
    const { navigation } = this.props;
    const { navigate } = navigation;
    const { userEmail } = this.state;

    if (userEmail.length === 0) return;

    if (userEmail.length > 0) {
      this.onShowModal();

      await api.get('/cheeck_forgotpassword.php', {
        params: {
          data_hashkey: 'K_@cjg2w*n9C$$2${J~s',
          data_email: userEmail,
        },
      })
        .then((response) => {
          if (response.status >= 200 && response.status < 300) {
            // console.tron.clear();
            setTimeout(() => {
              const { data } = response;
              let message;
              switch (data) {
                case 'error_email_invalid':
                  message = 'O E-mail informado não é válido.';
                  this.onCloseModal(message);
                  break;
                case 'error_email_exist':
                  message = 'O E-mail informado não existe em nossos dados.';
                  this.onCloseModal(message);
                  break;
                default:
                  message = 'success_forgot_insert';
                  this.onCloseModalNoMsg();
                  navigate('ForgotInMessageScreen', { messageScreen: message });
              }
            }, 2000);
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
  }


  render() {
    // eslint-disable-next-line react/prop-types
    const { navigation } = this.props;
    const { navigate } = navigation;
    const { showModal } = this.state;
    return (
      <KeyboardAwareScrollView style={styles.container}>
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
          <View style={styles.headerBackLink}>
            <TouchableOpacity style={styles.backLink} onPress={() => navigate('LoginScreen')}>
              <Icon
                name={Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back'}
                color={colors.white}
                size={25}
                style={styles.iconBackLink}
              />
              <Text style={styles.txtBackLink}>Esqueci minha senha</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.contentLogo}>
            <Image source={images.logo} style={styles.logo} />
          </View>
        </LinearGradient>
        <View style={styles.containerContent}>
          <View style={styles.boxContent}>
            <View style={styles.contentForm}>
              {/* <View style={styles.contentInput}> */}
              <Text style={styles.txtForm}>E-mail</Text>
              <TextInput
                // placeholder="usuario@cheeck.com"
                placeholder="Digite seu email"
                placeholderTextColor={colors.primary}
                underlineColorAndroid="transparent"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                style={[styles.inputText]}
                // eslint-disable-next-line react/no-unused-state
                onChangeText={userEmail => this.setState({ userEmail })}
              />
              {/* </View> */}

            </View>
          </View>
          <TouchableOpacity onPress={() => this.actionForgotComplete()} activeOpacity={0.9}>
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
              <Text style={[general.txtBtnDefault, styles.txtSinup]}>ENVIAR SENHA PARA MEU EMAIL</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <Modal
          animationType="slide"
          transparent
          visible={showModal}
          onRequestClose={() => { this.onCloseModal(); }}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalTxt}>Aguarde, estamos verificando seus dados.</Text>
            <Image source={images.loading} style={styles.loading} />
          </View>
        </Modal>
      </KeyboardAwareScrollView>
    );
  }
}
