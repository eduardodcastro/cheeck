/* eslint-disable consistent-return */
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
export default class Splash extends Component {
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
      authIntro: false,
      authUser: false,
    };
  }

  async componentDidMount() {
    // this.authControlIntro();
    // this.authControlUser();
    this.authControl();
  }

  authControl = async () => {
    const value = await AsyncStorage.getItem('@AppCheeck:dataIntro');

    if (value !== null) {
      const parsed = JSON.parse(value);
      if (parsed.intro !== null) {
        this.setState({ authIntro: true });
      }
    }
    
    const valueU = await AsyncStorage.getItem('@AppCheeck:dataUser');

    if (valueU !== null) {
      const parsedU = JSON.parse(valueU);
      if (parsedU.id !== null) {
        this.setState({ authUser: true });
      }
    }

    this.authControlNavigation();
  }

  authControlNavigation = () => {
    const { authIntro, authUser } = this.state;

    if (authIntro === true && authUser === true) {
      const { navigation } = this.props;
      setTimeout(() => {
        navigation.navigate('ProfileScreen');
      }, 2500);
    }

    if (authIntro === true && authUser === false) {
      const { navigation } = this.props;
      setTimeout(() => {
        navigation.navigate('HomeScreen');
      }, 2500);
    }

    if (authIntro === false && authUser === false) {
      const { navigation } = this.props;
      setTimeout(() => {
        navigation.navigate('IntroScreen');
      }, 2500);
    }
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { navigation } = this.props;
    const { navigate } = navigation;
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
          <View style={styles.boxLogo}>
            <Image source={images.splashLogo} style={styles.logo} />
            <Text style={styles.txtLogo}>CARTÃO DE FIDELIDADE DIGITAL</Text>
          </View>

          
          <View style={styles.boxAbrasel}>
            <Text style={styles.txtBy}>powered by</Text>
            <Image source={images.abraselLogo} style={styles.logoAbrasel} />
          </View>
        </LinearGradient>
      </View>
    );
  }
}
