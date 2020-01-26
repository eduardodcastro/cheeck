/* eslint-disable react/self-closing-comp */
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
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
export default class ConfigureContent extends Component {
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
      title: null,
      content: null,
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    const {
      content,
    } = navigation.state.params;

    switch (content) {
      case 'privacidade':
        // eslint-disable-next-line react/no-unused-state
        this.setState({ title: 'Privacidade' });
        break;
      case 'suporte':
        // eslint-disable-next-line react/no-unused-state
        this.setState({ title: 'Suporte' });
        break;

      default:
        // eslint-disable-next-line react/no-unused-state
        this.setState({ title: 'Sobre o Cheeck' });
    }

    // eslint-disable-next-line react/no-unused-state
    this.setState({ content });
  }

  getContent = () => {
    const { content } = this.state;

    switch (content) {
      case 'privacidade':
        return (
          <View style={styles.contentText}>
            <Text style={styles.text}>A garantia da confidencialidade dos dados pessoais dos utilizadores do nosso site é importante para o Cheeck.</Text>
            <Text style={styles.text}>Todas as informações pessoais relativas a membros, assinantes, clientes ou visitantes que usem o Cheeck serão tratadas em concordância com a Lei da Proteção de Dados Pessoais de 26 de outubro de 1998 (Lei n.º 67/98).</Text>
            <Text style={styles.text}>A informação pessoal recolhida pode incluir o seu nome, e-mail, número de telefone e/ou telemóvel, morada, data de nascimento e/ou outros.</Text>
            <Text style={styles.text}>O uso do Cheeck pressupõe a aceitação deste Acordo de privacidade. A equipe do Cheeck reserva-se ao direito de alterar este acordo sem aviso prévio. Deste modo, recomendamos que consulte a nossa política de privacidade com regularidade de forma a estar sempre atualizado.</Text>
          </View>
        );

      case 'suporte':
        return (
          <View style={styles.contentText}>
            <Text style={styles.text}>Precisa de alguma ajuda com Cheeck? Conte com a gente. Se preferir, envie um e-mail para contato@cheeck.com.br.</Text>
            <Text style={styles.text}>Lembre-se de informar seu nome completo para facilitar o seu suporte.</Text>
            <Text style={styles.text}>Possui um estabelecimento e precisa de ajuda? Pode contar com o suporte sempre que precisar: empresas@cheeck.com.br.</Text>
            <Text style={styles.text}>Obrigado!</Text>
          </View>
        );

      default:
        return (
          <View style={styles.contentText}>
            <Text style={styles.text}>Agora você poderá acumular todos os carimbos de todos os restaurantes que você frequenta em um único aplicativo!</Text>
            <Text style={styles.text}>Com o aplicativo Cheeck você tem todos os cartões de fidelidade de todos os restaurantes que você frequentaem um único aplicativo, basta usar o app para ler o QrCode no caixa do estabelecimento.</Text>
            <Text style={styles.text}>Quer comer em algum lugar diferente sem deixar de acumular carimbos? Use nosso localizador de restaurantes credenciados, vamos sempre mostrar os restaurantes mais próximos da sua localização atual.</Text>
            <Text style={styles.text}>Sem esquecimentos e com muito mais organização para você :)</Text>
          </View>
        );
    }
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { navigation } = this.props;
    const { navigate } = navigation;
    const { title } = this.state;
    return (
      <View style={[styles.container, styles.scrollHeight]}>
        <View style={styles.contentHead}>
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
            style={general.heading}
          >
            <View style={general.contentHeading}>
              <TouchableOpacity onPress={() => navigate('ConfigureScreen')}>
                <Icon
                  name={Platform.OS === 'ios' ? 'ios-arrow-back' : 'md-arrow-back'}
                  color={colors.white}
                  size={25}
                  style={general.iconBackLink}
                />
              </TouchableOpacity>
              <Text style={general.titleBackLink}>Ajustes</Text>
            </View>
          </LinearGradient>
        </View>

        <View style={general.menuBottom}>
          <TouchableOpacity style={general.mlink} onPress={() => navigate('CardsListScreen')}>
            <Image source={images.menuCards} style={general.mImages} />
            <Text style={[general.mtxtLink, general.mtxtPosTwo, general.mtxtPosThree]}>Cartões</Text>
          </TouchableOpacity>

          <TouchableOpacity style={general.mlink} onPress={() => navigate('PlacesScreen')}>
            <Image source={images.menuPlaces} style={general.mImages} />
            <Text style={[general.mtxtLink, general.mtxtPosTwo]}>Locais</Text>
          </TouchableOpacity>

          <TouchableOpacity style={general.mlink} onPress={() => navigate('ScannerScreen')}>
            <Image source={images.menuRead} style={general.mImages} />
            <Text style={[general.mtxtLink, general.mtxtPos]}>Ler QR Code</Text>
          </TouchableOpacity>

          <TouchableOpacity style={general.mlink} onPress={() => navigate('PrizeScreen')}>
            <Image source={images.menuAwards} style={general.mImages} />
            <Text style={[general.mtxtLink, general.mtxtPosTwo]}>Prêmios</Text>
          </TouchableOpacity>

          <TouchableOpacity style={general.mlink} onPress={() => navigate('ConfigureScreen')}>
            <Image source={images.menuConfigurationOn} style={general.mImages} />
            <Text style={[general.mtxtLink, general.linkHighlights, general.mtxtPosTwo]}>Ajustes</Text>
          </TouchableOpacity>
        </View>

        <KeyboardAwareScrollView style={[styles.container]}>
          <View style={styles.configList}>
            <View style={styles.boxContent}>
              <Text style={styles.configTitle}>{title}</Text>
            </View>

            { this.getContent() }

          </View>

        </KeyboardAwareScrollView>
      </View>
    );
  }
}
