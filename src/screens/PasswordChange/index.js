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
  AsyncStorage,
  Modal,
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
export default class PasswordChange extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      header: null,
      headerLeft: null,
      headerRight: null,
    };
  }

  break = false;

  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);

    this.state = {
      userPassword: '',
      userPasswordTwo: '',
      userPasswordZero: '',
      showModal: false,
      typeKeyboard: 1,
      actionSignup: false,
    };
  }

  componentDidMount() {

  }

  // eslint-disable-next-line react/sort-comp
  keyboardNumber = (value) => {
    // eslint-disable-next-line react/no-unused-state
    this.setState({ typeKeyboard: value, actionSignup: false });
    this.onShowModal();
  }

  getKeyboardPass = (getPass) => {
    const { userPassword } = this.state;
    // console.tron.log('getPass 1', getPass);

    if (getPass.length === 6) {
      this.setState({ userPassword: getPass });
      this.setState({ showModal: false });
    }
  }

  getKeyboardPassTwo = (getPass) => {
    const { userPasswordTwo } = this.state;
    // console.tron.log('getPass 2', getPass);

    if (getPass.length === 6) {
      this.setState({ userPasswordTwo: getPass });
      this.setState({ showModal: false });
    }
  }

  getKeyboardPassZero = (getPass) => {
    const { userPasswordZero } = this.state;
    // console.tron.log('getPass 2', getPass);

    if (getPass.length === 6) {
      this.setState({ userPasswordZero: getPass });
      this.setState({ showModal: false });
    }
  }

  actionSignupComplete = async () => {
    const { navigation } = this.props;
    const { navigate } = navigation;
    const { userPassword, userPasswordTwo, userPasswordZero } = this.state;

    if (userPassword.length === 0 || userPasswordTwo.length === 0) return;

    if (userPassword.length > 0 && userPasswordTwo.length > 0 && userPassword === userPasswordTwo) {
      const value = await AsyncStorage.getItem('@AppCheeck:dataUser');
      const parsed = JSON.parse(value);

      // eslint-disable-next-line react/no-unused-state
      this.setState({ actionSignup: true });
      this.onShowModal();

      await api.get('/cheeck_update_pass.php', {
        params: {
          data_hashkey: 'K_@cjg2w*n9C$$2${J~s',
          data_id: parsed.id,
          data_email: parsed.email,
          data_password: userPasswordZero,
          data_password_update: userPassword,
        },
      })
        .then((response) => {
          if (response.status >= 200 && response.status < 300) {
            // console.tron.clear();
            // console.tron.log('response', response);
            const { data } = response;
            setTimeout(() => {
              let message;
              switch (data) {
                case 'error_password':
                  this.setState({
                    userPassword: '',
                    userPasswordTwo: '',
                    userPasswordZero: '',
                  });
                  message = 'A senha informada não é válida.';
                  this.onCloseModal(message);
                  break;
                default:
                  this.onSuccessSignup(userPassword);
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
    } else {
      this.setState({
        userPassword: '',
        userPasswordTwo: '',
        userPasswordZero: '',
      });
      const message = 'Senhas não conferem.';
      Alert.alert('Ops!', message);
    }
  }

  onSuccessSignup = async (data) => {
    const { navigation } = this.props;
    const { navigate } = navigation;

    const value = await AsyncStorage.getItem('@AppCheeck:dataUser');
    const parsed = JSON.parse(value);

    const objUser = {
      ...parsed,
      password: data,
    };

    AsyncStorage.removeItem('@AppCheeck:dataUser');
    AsyncStorage.setItem('@AppCheeck:dataUser', JSON.stringify(objUser));

    this.setState({
      userPassword: '',
      userPasswordTwo: '',
      userPasswordZero: '',
    });

    const message = 'A nova senha foi atualizada com sucesso.';
    this.onCloseModal(message);
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

  render() {
    // eslint-disable-next-line react/prop-types
    const { navigation } = this.props;
    const { navigate } = navigation;
    const {
      userPassword, userPasswordTwo, userPasswordZero, showModal, typeKeyboard, actionSignup,
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
            <TouchableOpacity style={styles.backLink} onPress={() => navigate('ConfigureScreen')}>
              <Icon
                name={Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back'}
                color={colors.white}
                size={25}
                style={styles.iconBackLink}
              />
              <Text style={styles.txtBackLink}>Atualizar senha</Text>
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
                <Text style={styles.txtForm}>Senha</Text>
                <TouchableOpacity onPress={() => this.keyboardNumber(0)}>
                  <TextInput
                    pointerEvents="none"
                    // placeholder="usuario@cheeck.com"
                    editable={false}
                    placeholder="Digite sua senha atual"
                    placeholderTextColor={colors.secundary}
                    underlineColorAndroid="transparent"
                    secureTextEntry
                    keyboardType="default"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={[styles.inputText]}
                    // eslint-disable-next-line react/no-unused-state
                    // onChangeText={userPassword => this.setState({ userPassword })}
                    value={userPasswordZero}
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.contentInput}>
                <Text style={styles.txtForm}>Nova Senha</Text>
                <TouchableOpacity onPress={() => this.keyboardNumber(1)}>
                  <TextInput
                    pointerEvents="none"
                    // placeholder="usuario@cheeck.com"
                    editable={false}
                    placeholder="Digite sua nova senha"
                    placeholderTextColor={colors.secundary}
                    underlineColorAndroid="transparent"
                    secureTextEntry
                    keyboardType="default"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={[styles.inputText]}
                    // eslint-disable-next-line react/no-unused-state
                    // onChangeText={userPassword => this.setState({ userPassword })}
                    value={userPassword}
                  />
                </TouchableOpacity>
              </View>

              <View>
                <Text style={styles.txtForm}>Confirmar Nova Senha</Text>
                {/* <TouchableOpacity onPress={() => (userPassword.length > 0 ? this.keyboardNumber() : null)}> */}
                <TouchableOpacity onPress={() => (this.keyboardNumber(2))}>
                  <TextInput
                    pointerEvents="none"
                    // placeholder="usuario@cheeck.com"
                    editable={false}
                    placeholder="Digite sua nova senha"
                    placeholderTextColor={colors.secundary}
                    underlineColorAndroid="transparent"
                    secureTextEntry
                    keyboardType="default"
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={[styles.inputText]}
                    // eslint-disable-next-line react/no-unused-state
                    // onChangeText={userPasswordTwo => this.setState({ userPasswordTwo })}
                    value={userPasswordTwo}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={() => this.actionSignupComplete()} activeOpacity={0.9}>
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
              <Text style={[general.txtBtnDefault, styles.txtSinup]}>ATUALIZAR</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <Modal
          animationType="slide"
          transparent
          visible={showModal}
          onRequestClose={() => { this.onCloseModalNoMsg(); }}
        >
          {!actionSignup
            ? (
              <KeyboardNumber
                getKeyboardPass={typeKeyboard === 1 ? this.getKeyboardPass : null}
                getKeyboardPassTwo={typeKeyboard === 2 ? this.getKeyboardPassTwo : null}
                getKeyboardPassZero={typeKeyboard === 0 ? this.getKeyboardPassZero : null}
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
