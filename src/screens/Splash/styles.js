import { StyleSheet, Platform } from 'react-native';

import { colors, general, text } from '../../styles';

const styles = StyleSheet.create({
  boxAbrasel: {
    alignItems: 'center',
    flex: 1,
    // backgroundColor: '#f99'
  },
  boxLogo: {
    alignItems: 'center',
    flex: 4,
    justifyContent: 'center',
    // backgroundColor: '#ff0'
  },
  container: {
    flex: 1,
  },
  logo: {
    height: 99,
    width: 230,
  },
  logoAbrasel: {
    height: 39,
    width: 157,
  },
  safearea: {
    ...general.safearea,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtBy: {
    ...text.text01,
    fontSize: 14,
    letterSpacing: 0,
    alignSelf: 'center',
    marginBottom: 15,
  },
  txtLogo: {
    ...text.text01,
    fontSize: 16,
    letterSpacing: 0,
    alignSelf: 'center',
    marginTop: 15,
  },
});

export default styles;
