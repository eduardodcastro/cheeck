/* eslint-disable react/self-closing-comp */
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
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
export default class Signup extends Component {
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
    this.state = { userEmail: '' };
  }

  componentDidMount() {
  }

  actionSignup = async () => {
    const { navigate } = this.props.navigation;
    const { userEmail } = this.state;

    if (userEmail.length === 0) return;

    const objUser = {
      id: null,
      email: userEmail,
      password: null,
      name: null,
    };

    // console.tron.log('objUser', objUser);

    AsyncStorage.removeItem('@AppCheeck:dataSignup');
    AsyncStorage.setItem('@AppCheeck:dataSignup', JSON.stringify(objUser));

    navigate('SignupTwoScreen');
  }

  render() {
    const { navigation } = this.props;
    const { navigate } = navigation;
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
              <Text style={styles.txtBackLink}>Cadastro</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.contentLogo}>
            <Image source={images.logo} style={styles.logo} />
          </View>
        </LinearGradient>
        <View style={styles.containerContent}>
          <View style={styles.boxContent}>
            <View style={styles.contentForm}>
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
            </View>
          </View>
          <TouchableOpacity onPress={() => this.actionSignup()} activeOpacity={0.9}>
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
              <Text style={general.txtBtnDefault}>AVANÇAR</Text>
              <Icon
                name={Platform.OS === 'ios' ? 'ios-arrow-forward' : 'md-arrow-forward'}
                color={colors.white}
                size={25}
                style={styles.iconInput}
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
