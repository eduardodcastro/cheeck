import { StyleSheet, Platform } from 'react-native';

import { colors, general, text } from '../../styles';

const styles = StyleSheet.create({
  backLink: {
    flexDirection: 'row',
    padding: 10,
  },
  boxContent: {
    ...general.content,
    marginBottom: 40,
  },
  container: {
    flex: 1,
  },
  containerContent: {
    ...general.containerContent,
  },
  contentForm: {
    paddingVertical: 20,
  },
  contentLogo: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  headerBackLink: {
    // padding: 10,
    paddingLeft: 10,
    paddingTop: Platform.OS === 'ios' ? 20 : 10,
  },
  iconBackLink: {
    marginRight: 20,
    marginTop: Platform.OS === 'ios' ? 0 : 3,
  },
  iconInput: {
    ...general.iconInput,
  },
  inputText: {
    ...text.text01,
    color: colors.primary,
    fontSize: 15,
    textAlign: 'left',
    letterSpacing: 0,
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    // backgroundColor: colors.danger,
    paddingVertical: Platform.OS === 'ios' ? 5 : 0,
    paddingHorizontal: 0,
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
  txtBackLink: {
    ...text.text01,
    fontSize: 20,
    letterSpacing: 0,
  },
  txtForm: {
    ...text.text01,
    color: colors.secundary,
    fontSize: 14,
    textAlign: 'left',
    lineHeight: 16,
    letterSpacing: 0,
  },
});

export default styles;
