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
export default class SignupSuccess extends Component {
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
          <View style={styles.boxMessage}>
            <Text style={styles.txtSymbol}>;)</Text>
            <Text style={styles.txtMessage}>Cadastro feito com sucesso!</Text>
            <Text style={styles.txtMessageTwo}>Entre no seu perfil e visualize os carimbos!</Text>

            <TouchableOpacity onPress={() => navigate('ProfileScreen')}>
              <View style={styles.contentCircle}>
                <Icon
                  name={Platform.OS === 'ios' ? 'ios-arrow-forward' : 'md-arrow-forward'}
                  color={colors.white}
                  size={Platform.OS === 'ios' ? 30 : 25}
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
