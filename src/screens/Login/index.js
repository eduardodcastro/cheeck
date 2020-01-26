/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/self-closing-comp */
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Platform,
  StatusBar,
  Alert,
  AsyncStorage,
  Modal,
  Keyboard,
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import KeyboardNumber from '../KeyboardNumber';
import api from '../../services/api';
import {
  general, colors, images,
} from '../../styles';
import styles from './styles';

// eslint-disable-next-line react/prefer-stateless-function
export default class Login extends Component {
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
    this.state = {
      userEmail: '', // null || user@cheeck.com
      userPassword: '', // null || cheeck@1234
      showModal: false,
      actionSignup: false,
      typeKeyboard: 1,
    };
  }

  async componentDidMount() {
    // AsyncStorage.removeItem('@AppSan:dataFilter');
    await this.checkAsyncStorage();
  }

  // eslint-disable-next-line react/sort-comp
  checkAsyncStorage = async () => {
    const value = await AsyncStorage.getItem('@AppCheeck:dataUser');
    const parsed = JSON.parse(value);
    if (parsed !== null) {
      // console.tron.log('STORAGE', parsed.email);
      this.setState(
        {
          userEmail: parsed.email,
        },
      );
    }
  }

  onShowModal = () => {
    this.setState({ showModal: true });
  }

  onCloseModal(message) {
    setTimeout(() => {
      this.onCloseModal2(message);
    }, 500);
  }

  onCloseModal2(amessage) {
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
    this.setState({ showModal: false }, () => {
    });
  }

  keyboardNumber = (value) => {
    // eslint-disable-next-line react/no-unused-state
    this.setState({ typeKeyboard: value });
    this.onShowModal();
  }

  getKeyboardPass = (getPass) => {
    const { userPassword } = this.state;
    // console.tron.log('getPass 1', getPass);

    if (getPass.length === 6) {
      this.setState({
        userPassword: getPass,
        showModal: false,
      });
    }
  }

  ActionLogin = async () => {
    // eslint-disable-next-line react/prop-types
    const { navigate } = this.props.navigation;
    const { userEmail, userPassword } = this.state;

    if (userEmail.length === 0 || userPassword.length === 0) return;
    this.setState({ actionSignup: true });
    this.onShowModal();

    await api.get('/cheeck_login_access.php', {
      params: {
        data_hashkey: 'K_@cjg2w*n9C$$2${J~s',
        data_email: userEmail,
        data_password: userPassword,
      },
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          // console.tron.clear();
          // console.tron.log('RESPONSE', response);
          setTimeout(() => {
            const [data] = response.data;

            if (data.message === 'success_login') {
              // const message = 'Login realizado com sucesso!';
              // AsyncStorage to store the data
              const objUser = {
                id: data.id,
                email: data.email,
                password: data.password,
                name: data.name,
              };

              AsyncStorage.removeItem('@AppCheeck:dataUser');
              // AsyncStorage.removeItem('dataCompany');

              AsyncStorage.setItem('@AppCheeck:dataUser', JSON.stringify(objUser));

              this.onCloseModalNoMsg();
              navigate('ProfileScreen');
            } else {
              const message = 'Acesso inválido.';
              this.onCloseModal(message);
              this.setState(
                {
                  userEmail: '',
                  userPassword: '',
                },
              );
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

  render() {
    // eslint-disable-next-line react/prop-types
    const { navigation } = this.props;
    const { navigate } = navigation;
    const {
      showModal, userEmail, userPassword, typeKeyboard, actionSignup,
    } = this.state;
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
            <TouchableOpacity style={styles.backLink} onPress={() => navigate('HomeScreen')}>
              <Icon
                name={Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back'}
                color={colors.white}
                size={25}
                style={styles.iconBackLink}
              />
              <Text style={styles.txtBackLink}>Entrar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.contentLogo}>
            <Image source={images.logo} style={styles.logo} />
          </View>
        </LinearGradient>
        <View style={styles.containerContent}>
          <View style={styles.boxContent}>
            <View style={styles.contentForm}>
              <View style={styles.contentInput}>
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
                  value={userEmail}
                />
              </View>

              <View>
                <Text style={styles.txtForm}>Senha</Text>
                <TouchableOpacity onPress={() => this.keyboardNumber(1)}>
                  <TextInput
                    pointerEvents="none"
                    // placeholder="usuario@cheeck.com"
                    editable={false}
                    placeholder="Digite sua senha"
                    placeholderTextColor={colors.primary}
                    underlineColorAndroid="transparent"
                    secureTextEntry
                    keyboardType="default"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={[styles.inputText]}
                    // eslint-disable-next-line react/no-unused-state
                    onChangeText={userPassword => this.setState({ userPassword })}
                    value={userPassword}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={() => { this.ActionLogin(); }} activeOpacity={0.9}>
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
              <Text style={[general.txtBtnDefault, styles.txtSinup]}>ENTRAR</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity style={styles.linkTxt} onPress={() => navigate('ForgotScreen')}>
            <Text style={styles.txtLink}>ESQUECI A MINHA SENHA</Text>
          </TouchableOpacity>
        </View>
        <Modal
          animationType="slide"
          transparent
          visible={showModal}
          onRequestClose={() => { this.onCloseModal(); }}
        >
          {!actionSignup
            ? (
              <KeyboardNumber
                getKeyboardPass={typeKeyboard === 1 ? this.getKeyboardPass : null}
                getKeyboardPassTwo={typeKeyboard === 2 ? this.getKeyboardPassTwo : null}
              />
            ) : (
              <View style={styles.modalContent}>
                <Text style={styles.modalTxt}>Aguarde, estamos verificando seus dados.</Text>
                <Image source={images.loading} style={styles.loading} />
              </View>
            )}
        </Modal>
      </KeyboardAwareScrollView>
    );
  }
}
