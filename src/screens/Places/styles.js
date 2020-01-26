import { StyleSheet } from 'react-native';

import {
  colors, general, metrics, text,
} from '../../styles';

const styles = StyleSheet.create({
  boxCardLink: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardLink: {
    borderRadius: 5,
    paddingHorizontal: 14,
    paddingVertical: 7,
  },
  cardPlace: {
    width: metrics.screenWidth * 0.52,
    // backgroundColor: colors.primary,
  },
  container: {
    backgroundColor: colors.colorBackground,
    flex: 1,
  },
  contentHead: {
    ...general.contentHead,
    alignItems: 'center',
    justifyContent: 'flex-start',
    // backgroundColor: colors.danger,
  },
  instructions: {
    backgroundColor: colors.white,
    marginBottom: -5,
  },
  instructionsTitle: {
    ...text.text01,
    color: colors.darker,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.5,
    alignSelf: 'stretch',
    paddingBottom: 5,
    textAlign: 'left',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  listCard: {
    backgroundColor: colors.white,
    borderBottomColor: colors.light,
    borderBottomWidth: 1,
    borderTopColor: colors.light,
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
    padding: 20,
  },
  scrollHeight: {
    paddingBottom: '11%',
  },
  txtAddress: {
    ...text.text01,
    alignSelf: 'stretch',
    color: colors.regular,
    fontSize: 12,
    letterSpacing: 0,
    lineHeight: 16,
    textAlign: 'left',
  },
  txtLinkCard: {
    ...text.text01,
    fontSize: 12,
    textAlign: 'center',
    letterSpacing: 1,
    alignSelf: 'stretch',
  },
  txtPlace: {
    ...text.text01,
    color: colors.darker,
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: -0.5,
    alignSelf: 'stretch',
    textAlign: 'left',
  },
});

export default styles;
