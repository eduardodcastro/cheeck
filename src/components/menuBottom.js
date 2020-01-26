/* eslint-disable react/self-closing-comp */
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import {
  general, colors, images,
} from '~/styles';
// import styles from './styles';

// eslint-disable-next-line react/prefer-stateless-function
export default class MenuBottom extends Component {
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
        <View style={general.menuBottom}>
          <TouchableOpacity style={general.mlink} onPress={() => navigate(null)}>
            <Image source={images.menuCards} style={general.mImages} />
            <Text style={general.mtxtLink}>Cartões</Text>
          </TouchableOpacity>

          <TouchableOpacity style={general.mlink} onPress={() => navigate(null)}>
            <Image source={images.menuPlaces} style={general.mImages} />
            <Text style={general.mtxtLink}>Locais</Text>
          </TouchableOpacity>

          <TouchableOpacity style={general.mlink} onPress={() => navigate(null)}>
            <Image source={images.menuRead} style={general.mImages} />
            <Text style={[general.mtxtLink, general.mtxtPos]}>Ler QR Code</Text>
          </TouchableOpacity>

          <TouchableOpacity style={general.mlink} onPress={() => navigate(null)}>
            <Image source={images.menuAwards} style={general.mImages} />
            <Text style={general.mtxtLink}>Prêmios</Text>
          </TouchableOpacity>

          <TouchableOpacity style={general.mlink} onPress={() => navigate(null)}>
            <Image source={images.menuConfiguration} style={general.mImages} />
            <Text style={general.mtxtLink}>Ajustes</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
