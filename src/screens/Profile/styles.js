import { StyleSheet } from 'react-native';

import { colors, general, metrics, text } from '../../styles';

const styles = StyleSheet.create({
  boxContent: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginTop: -70,
  },
  boxNumber: {
    ...text.text01,
    color: colors.darker,
    fontSize: 18,
    lineHeight: 20,
    letterSpacing: -0.5,
    alignSelf: 'stretch',
    paddingBottom: 5,
  },
  boxType: {
    ...text.text01,
    alignSelf: 'stretch',
    color: colors.regular,
    fontSize: 12,
    letterSpacing: 0,
    lineHeight: 16,
  },
  btnLinear: {
    width: metrics.screenWidth - 60,
  },
  container: {
    // backgroundColor: colors.danger,
    flex: 1,
  },
  contentHead: {
    ...general.contentHead,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  dataContent: {
    alignItems: 'center',
  },
  dataNumber: {
    backgroundColor: colors.colorBackground,
    borderBottomWidth: 1,
    borderColor: colors.light,
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 50,
    paddingHorizontal: 40,
    paddingVertical: 20,
    width: metrics.screenWidth,
  },
  head: {
    ...general.head,
    paddingHorizontal: 20,
  },
  lastCheck: {
    ...text.text01,
    alignSelf: 'stretch',
    color: colors.regular,
    fontSize: 12,
    letterSpacing: 0,
    lineHeight: 16,
  },
  logo: {
    bottom: 20,
    height: 43,
    left: 20,
    position: 'absolute',
    width: 100,
  },
  userData: {
    alignItems: 'center',
    // backgroundColor: colors.danger,
  },
  userName: {
    ...text.text01,
    color: colors.darker,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.5,
    alignSelf: 'stretch',
    paddingBottom: 5,
  },
});

export default styles;
