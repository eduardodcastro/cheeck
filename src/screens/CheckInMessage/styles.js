import { StyleSheet, Platform } from 'react-native';

import { colors, general, text } from '../../styles';

const styles = StyleSheet.create({
  boxMessage: {
    // backgroundColor: colors.danger,
  },
  container: {
    flex: 1,
  },
  contentCircle: {
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: colors.white,
    borderRadius: 60,
    borderStyle: 'solid',
    borderWidth: 1,
    height: 60,
    justifyContent: 'center',
    paddingLeft: Platform.OS === 'ios' ? 5 : 0,
    paddingTop: Platform.OS === 'ios' ? 5 : 0,
    width: 60,
  },
  contentCircleBack: {
    paddingLeft: 0,
  },
  safearea: {
    ...general.safearea,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtMessage: {
    ...text.text01,
    fontSize: 24,
    letterSpacing: 0,
    alignSelf: 'center',
    marginBottom: 10,
  },
  txtMessageTwo: {
    ...text.text01,
    fontSize: 12,
    letterSpacing: 0,
    marginBottom: 20,
  },
  txtSymbol: {
    ...text.text01,
    fontSize: 100,
    letterSpacing: 0,
    alignSelf: 'center',
    marginBottom: 45,
  },
});

export default styles;
