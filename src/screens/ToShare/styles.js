import { StyleSheet } from 'react-native';

import {
  colors, general, metrics, text,
} from '../../styles';

const styles = StyleSheet.create({
  boxPremium: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: colors.white,
    borderRadius: 5,
    elevation: 5,
    justifyContent: 'center',
    marginHorizontal: 25,
    paddingHorizontal: 10,
    paddingVertical: 30,
    shadowColor: colors.secundary,
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  btnPremium: {
    width: metrics.screenWidth - 80,
  },
  btnToShared: {
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: colors.white,
    borderRadius: 46,
    borderStyle: 'solid',
    borderWidth: 1,
    height: 46,
    justifyContent: 'center',
    width: 46,
  },
  container: {
    flex: 1,
  },
  contentPremium: {
    paddingVertical: 15,
  },
  notice: {
    paddingHorizontal: 40,
    paddingTop: 30,
  },
  noticeMessage: {
    ...text.text01,
    color: colors.white,
    fontSize: 14,
    letterSpacing: -0.5,
    alignSelf: 'stretch',
    paddingBottom: 5,
    textAlign: 'center',
    lineHeight: 24,
  },
  phraseOne: {
    ...text.text01,
    color: colors.primary,
    fontSize: 18,
    letterSpacing: -0.5,
    alignSelf: 'stretch',
    paddingBottom: 5,
    textAlign: 'left',
  },
  phraseToShared: {
    fontSize: 16,
    paddingTop: 10,
    textAlign: 'center',
  },
  phraseTwo: {
    ...text.text01,
    color: colors.darker,
    fontSize: 24,
    letterSpacing: -0.5,
    alignSelf: 'stretch',
    paddingBottom: 5,
    textAlign: 'center',
  },
  safearea: {
    ...general.safearea,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  trophy: {
    marginVertical: 10,
  },

  // eslint-disable-next-line react-native/sort-styles
  prizeCard: {
    paddingBottom: 20,
  },
  phraseOnePrize: {
    ...text.text01,
    color: colors.white,
    fontSize: 26,
    letterSpacing: -0.5,
    alignSelf: 'stretch',
    // paddingBottom: 5,
    textAlign: 'center',
    // lineHeight: 24,
  },
  phraseTwoPrize: {
    ...text.text01,
    color: colors.white,
    fontSize: 14,
    letterSpacing: -0.5,
    alignSelf: 'stretch',
    paddingBottom: 5,
    textAlign: 'center',
    // lineHeight: 24,
  },
  linkBack: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  txtLinkBack: {
    ...text.text01,
    color: colors.white,
    fontSize: 14,
    letterSpacing: -0.5,
    alignSelf: 'stretch',
    paddingHorizontal: 10,
    textAlign: 'center',
    lineHeight: 24,
  },
});

export default styles;
