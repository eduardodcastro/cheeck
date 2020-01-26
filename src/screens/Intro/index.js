/* eslint-disable react/self-closing-comp */
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AppIntroSlider from 'react-native-app-intro-slider';
import {
  general, colors, images,
} from '../../styles';
import styles from './styles';

const slides = [
  {
    key: 'intro1',
    title: 'CONHEÇA O CHEECK!',
    text: 'Seu aplicativo de fidelidade onde você acumula \ncarimbos e ganha prêmios.',
    // image: require('./assets/1.jpg'),
    icon: 'auto-fix',
    colors: ['rgb(255, 119, 76)', 'rgb(255, 141, 41)'],
  },
  {
    key: 'intro2',
    title: '',
    text: 'Localize o estabelecimento credenciado mais próximo \nde você.',
    // image: require('./assets/2.jpg'),
    icon: 'map-search-outline',
    colors: ['rgb(255, 119, 76)', 'rgb(255, 141, 41)'],
  },
  {
    key: 'intro3',
    title: '',
    text: 'Use o aplicativo para ler o \nQR Code localizado no \nbalcão e ganhar um \ncarimbo.',
    // image: require('./assets/3.jpg'),
    icon: 'qrcode-scan',
    colors: ['rgb(255, 119, 76)', 'rgb(255, 141, 41)'],
  },
  {
    key: 'intro4',
    title: '',
    text: 'Acumule carimbos e ganhe \nprêmios nos \nestabelecimentos.',
    // image: require('./assets/3.jpg'),
    icon: 'checkbox-marked-circle-outline',
    colors: ['rgb(255, 119, 76)', 'rgb(255, 141, 41)'],
  },
];

// eslint-disable-next-line react/prefer-stateless-function
export default class Intro extends Component {
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
      showRealApp: false,
    };
  }

  componentDidMount() {

  }

  onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    // this.setState({ showRealApp: true, });
    // eslint-disable-next-line react/prop-types

    const objIntro = {
      intro: true,
    };
    AsyncStorage.setItem('@AppCheeck:dataIntro', JSON.stringify(objIntro));

    const { navigation } = this.props;
    const { navigate } = navigation;
    navigate('HomeScreen');
  }

  renderNextButton = () => (
    <View style={styles.buttonCircle}>
      <Icon
        name="arrow-right"
        color={colors.white}
        size={24}
        style={colors.transparent}
      />
    </View>
  )

  renderDoneButton = () => (
    <View style={styles.buttonCircle}>
      <Icon
        name="check"
        color={colors.white}
        size={24}
        style={colors.transparent}
      />
    </View>
  )

  renderItem = props => (
    <LinearGradient
      style={[styles.mainContent, {
        paddingTop: props.topSpacer,
        paddingBottom: props.bottomSpacer,
        width: props.width,
        height: props.height,
      }]}
      locations={[0, 1]}
      colors={props.colors}
      start={{ x: 0.31, y: 1.1 }}
      end={{ x: 0.69, y: -0.1 }}
    >
      <Icon style={colors.transparent} name={props.icon} size={160} color={colors.white} />
      <View>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.text}>{props.text}</Text>
      </View>
    </LinearGradient>
  );

  render() {
    // eslint-disable-next-line react/prop-types
    const { navigation } = this.props;
    const { navigate } = navigation;
    return (
      <AppIntroSlider
        slides={slides}
        renderItem={this.renderItem}
        // renderDoneButton={this.renderDoneButton}
        renderNextButton={this.renderNextButton}
        showSkipButton
        onDone={this.onDone}
        // nextLabel="próxima"
        doneLabel="entrar"
        skipLabel="pular"
      />
    );
  }
}
