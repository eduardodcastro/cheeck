/* eslint-disable quotes */
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

console.disableYellowBox = true;
// eslint-disable-next-line react/prefer-stateless-function
export default class Premium extends Component {
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
      userId: null,
      companyId: null,
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    const {
      userId,
      companyId,
    } = navigation.state.params;

    this.setState({
      userId,
      companyId,
    });

    // console.tron.log(`INFO: ${userId} -- ${companyId}`);
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { navigation } = this.props;
    const { navigate } = navigation;
    const {
      userId,
      companyId,
    } = this.state;
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

          <View style={styles.boxPremium}>
            <Image source={images.trophy} style={styles.trophy} />

            <View style={styles.contentPremium}>
              <Text style={styles.phraseOne}>Você preencheu o cartão!</Text>
              <Text style={styles.phraseTwo}>Parabéns!</Text>
            </View>

            <TouchableOpacity
              onPress={() => navigate('KeyboardPassScreen', {
                userId,
                companyId,
              })}
              activeOpacity={0.9}
            >
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
                style={[general.btnDefault, styles.btnPremium]}
              >
                <Text style={[general.txtBtnDefault, general.txtBtnPosition]}>RETIRAR PRÊMIO</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={styles.notice}>
            <Text style={styles.noticeMessage}>
              {`PEÇA PARA O RESPONSÁVEL DO \nESTABELECIMENTO DIGITAR A SENHA \nE VOCÊ RETIRAR SEU PRÊMIO.`}
            </Text>
          </View>

        </LinearGradient>
      </View>
    );
  }
}
