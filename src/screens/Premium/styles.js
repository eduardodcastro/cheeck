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
  container: {
    flex: 1,
  },
  contentPremium: {
    paddingVertical: 20,
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
    marginVertical: 20,
  },
});

export default styles;
