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
  Vibration,
} from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import api from '../../services/api';
import {
  general, colors, images,
} from '../../styles';
import styles from './styles';

const DURATION = 300; // Vibration
// Vibration.vibrate(DURATION);

// eslint-disable-next-line react/prefer-stateless-function
export default class KeyboardPass extends Component {
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
      userId: null,
      companyId: null,
      codeDown: '',
      showModal: false,
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
  }

  async componentDidUpdate() {
    const { codeDown } = this.state;
    // console.tron.clear();
    // console.tron.log(`INFO: ${codeDown}`);
    if (codeDown.length === 6 && this.break === false) {
      this.break = true;
      this.requestCodeDown();
    }
  }

  onShowModal = () => {
    this.setState({ showModal: true });
  }

  onCloseModal(message) {
    setTimeout(() => {
      this.onCloseModal2(message);
    }, 250);
  }

  onCloseModal2(amessage) {
    this.setState({ showModal: false }, () => {
      setTimeout(() => {
        Alert.alert('Ops!', amessage);
      }, 250);
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

  codeKey = (value) => {
    const { codeDown } = this.state;

    const tmpCode = `${codeDown}${value}`;

    if (codeDown.length < 6) {
      this.setState({
        codeDown: tmpCode,
      });
    }
  }

  requestCodeDown = async () => {
    // eslint-disable-next-line react/prop-types
    const { navigate } = this.props.navigation;
    const { userId, companyId, codeDown } = this.state;

    // console.tron.log('codeDown', codeDown);

    if (userId.length === 0 || companyId.length === 0 || codeDown.length === 0) return;

    this.onShowModal();

    await api.get('/cheeck_down_checkin.php', {
      params: {
        user_id: userId,
        company_id: companyId,
        code_down: codeDown,
      },
    })
      .then((response) => {
        if (response.status >= 200 && response.status < 300) {
          // console.tron.log('RESPONSE', response);
          setTimeout(() => {
            const { data } = response;
            const [dataValue] = data;
            // console.tron.log('DATA', dataValue);

            if (dataValue.message === 'success_awards_insert') {
              const awardsDate = dataValue.date;
              const awardsHour = dataValue.hour;
              const awardsCode = dataValue.code;

              this.onCloseModalNoMsg();
              navigate('ToShareScreen', {
                awardsDate,
                awardsHour,
                awardsCode,
              });
            } else {
              const message = 'Senha inválida, tente novamente.';
              this.onCloseModal(message);
              this.setState(
                {
                  codeDown: '',
                },
              );
              this.break = false;
              Vibration.vibrate(DURATION);
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
    // console.tron.log(`KEY: ${this.state.codeDown.length} -- ${this.state.codeDown}`);
    // eslint-disable-next-line react/prop-types
    const { navigation } = this.props;
    const { navigate } = navigation;
    const { codeDown, showModal } = this.state;
    const codeCount = codeDown.length;
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
              <Text style={styles.phraseOne}>Peça a senha do estabelecimento</Text>

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
      </View>
    );
  }
}
