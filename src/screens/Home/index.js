/* eslint-disable react/self-closing-comp */
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {
  general, colors, images,
} from '../../styles';
import styles from './styles';

// eslint-disable-next-line react/prefer-stateless-function
export default class Home extends Component {
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
          <View style={styles.contentLogo}>
            <Image source={images.logo} style={styles.logo} />
            <Text style={styles.txtLogo}>CARTÃO DE FIDELIDADE DIGITAL</Text>
          </View>
        </LinearGradient>

        <View style={styles.content}>
          <TouchableOpacity onPress={() => navigate('SignupScreen')} activeOpacity={0.9}>
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
              <Text style={general.txtBtnDefault}>QUERO ME CADASTRAR</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkTxt} onPress={() => navigate('LoginScreen')}>
            <Text style={styles.txtLink}>JÁ SOU CADASTRADO</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
