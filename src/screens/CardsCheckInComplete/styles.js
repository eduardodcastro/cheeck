import { StyleSheet } from 'react-native';

import {
  colors, general, metrics, text,
} from '../../styles';

const styles = StyleSheet.create({
  backLink: {
    flexDirection: 'row',
    padding: 10,
  },
  cardCheck: {
    backgroundColor: colors.colorBackground,
    flex: 1,
    padding: 20,
    paddingBottom: 30,
  },
  cardDescription: {
  },
  cardListCheck: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 15,
    paddingVertical: 5,
    width: '98%',
    // backgroundColor: colors.sucess,
  },
  cardTitle: {
    ...text.text01,
    color: colors.darker,
    fontSize: 14,
    letterSpacing: -0.5,
    alignSelf: 'stretch',
    paddingBottom: 5,
    textAlign: 'left',
  },
  checkCircle: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderRadius: 46,
    borderStyle: 'solid',
    borderWidth: 1,
    height: 46,
    justifyContent: 'center',
    width: 46,
  },
  checkCircleOff: {
    backgroundColor: colors.lighter,
  },
  checkDate: {
    ...text.text01,
    alignSelf: 'stretch',
    color: colors.primary,
    fontSize: 12,
    letterSpacing: 0,
    textAlign: 'center',
  },
  checkItem: {
    alignItems: 'center',
    marginRight: 12,
    paddingVertical: 5,
    textAlign: 'center',
    // backgroundColor: colors.danger,
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
  head: {
    ...general.imageHead,
    paddingHorizontal: 20,
  },
  headerBackLink: {
    left: 10,
    position: 'absolute',
    top: 30,
  },
  headerRefresh: {
    position: 'absolute',
    right: 10,
    top: 30,
  },
  infoCard: {
    backgroundColor: colors.white,
    elevation: 6,
    flex: 1,
    marginHorizontal: 10,
    marginTop: -60,
  },
  infoPlace: {
    borderBottomColor: colors.light,
    borderBottomWidth: 1,
    padding: 20,
  },
  logo: {
    bottom: 80,
    height: 43,
    left: 20,
    position: 'absolute',
    width: 100,
  },
  number: {
    color: colors.primary,
  },
  placeAddress: {
    ...text.text01,
    alignSelf: 'stretch',
    color: colors.regular,
    fontSize: 12,
    letterSpacing: 0,
    textAlign: 'left',
  },
  placeName: {
    ...text.text01,
    color: colors.darker,
    fontSize: 20,
    letterSpacing: -0.5,
    alignSelf: 'stretch',
    paddingBottom: 5,
    textAlign: 'left',
  },
  scrollHeight: {
    paddingBottom: '11%',
  },
});

export default styles;
