/* eslint-disable react/self-closing-comp */
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {
  general, colors, images,
} from '../../styles';
import styles from './styles';

// eslint-disable-next-line react/prefer-stateless-function
export default class KeyboardNumber extends Component {
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
      passNumber: '',
    };
  }

  componentDidMount() {
    // const { getKeyboardPass, getKeyboardPassTwo } = this.props;
    // console.tron.log('props', this.props);
  }

  codeKey = (value) => {
    const { passNumber } = this.state;
    const { getKeyboardPass, getKeyboardPassTwo, getKeyboardPassZero } = this.props;

    const tmpCode = `${passNumber}${value}`;

    if (passNumber.length < 6) {
      this.setState({
        passNumber: tmpCode,
      });

      if (getKeyboardPass) { getKeyboardPass(tmpCode); }
      if (getKeyboardPassTwo) { getKeyboardPassTwo(tmpCode); }
      if (getKeyboardPassZero) { getKeyboardPassZero(tmpCode); }
    }

    // console.tron.log('passNumber', passNumber);
  }

  render() {
    // console.tron.log(`KEY: ${this.state.codeDown.length} -- ${this.state.codeDown}`);
    // eslint-disable-next-line react/prop-types
    const { passNumber } = this.state;
    const codeCount = passNumber.length;
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

          <View style={styles.contentKey}>
            <View style={styles.boxPassword}>
              <Text style={styles.phraseOne}>Digite sua senha</Text>

              <View style={styles.boxBullet}>
                <View style={[styles.passBullet, codeCount >= 1 ? styles.passBulletColor : null]}></View>
                <View style={[styles.passBullet, codeCount >= 2 ? styles.passBulletColor : null]}></View>
                <View style={[styles.passBullet, codeCount >= 3 ? styles.passBulletColor : null]}></View>
                <View style={[styles.passBullet, codeCount >= 4 ? styles.passBulletColor : null]}></View>
                <View style={[styles.passBullet, codeCount >= 5 ? styles.passBulletColor : null]}></View>
                <View style={[styles.passBullet, codeCount >= 6 ? styles.passBulletColor : null]}></View>
              </View>
            </View>

            <View style={styles.keyboardNumber}>
              <TouchableOpacity onPress={() => this.codeKey(1)}>
                <View style={styles.numberBullet}>
                  <Text style={styles.numberKey}>1</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.codeKey(2)}>
                <View style={styles.numberBullet}>
                  <Text style={styles.numberKey}>2</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.codeKey(3)}>
                <View style={styles.numberBullet}>
                  <Text style={styles.numberKey}>3</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.codeKey(4)}>
                <View style={styles.numberBullet}>
                  <Text style={styles.numberKey}>4</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.codeKey(5)}>
                <View style={styles.numberBullet}>
                  <Text style={styles.numberKey}>5</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.codeKey(6)}>
                <View style={styles.numberBullet}>
                  <Text style={styles.numberKey}>6</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.codeKey(7)}>
                <View style={styles.numberBullet}>
                  <Text style={styles.numberKey}>7</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.codeKey(8)}>
                <View style={styles.numberBullet}>
                  <Text style={styles.numberKey}>8</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.codeKey(9)}>
                <View style={styles.numberBullet}>
                  <Text style={styles.numberKey}>9</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.codeKey(0)}>
                <View style={styles.numberBullet}>
                  <Text style={styles.numberKey}>0</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  }
}
