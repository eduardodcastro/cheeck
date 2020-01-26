import { StyleSheet } from 'react-native';

import { colors, general, text } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 25,
  },
  contentLogo: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  linkTxt: {
    marginTop: 25,
  },
  logo: {
    ...general.logo,
    marginBottom: 15,
  },
  safearea: {
    ...general.safearea,
    height: 240,
    marginBottom: 25,
  },
  txtLink: {
    ...text.text01,
    ...text.text02,
    color: colors.gradientPrimary,
    lineHeight: 24,
    letterSpacing: 0,
    alignSelf: 'center',
  },
  txtLogo: {
    ...text.text01,
  },
});

export default styles;
