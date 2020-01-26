import {
  Platform,
} from 'react-native';

import colors from './colors';
import metrics from './metrics';
import text from './text';

export default {
  box: {
    // backgroundColor: colors.danger,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    padding: metrics.basePadding,
  },
  logo: {
    width: 160,
    height: 69,
  },
  safearea: {
    width: metrics.screenWidth,
  },
  containerContent: {
    flex: 1,
    marginTop: -110,
    padding: 25,
  },
  content: {
    padding: 20,
    backgroundColor: colors.white,
    borderRadius: 5,
    // flex: 1,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btnDefault: {
    borderRadius: 5,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowRadius: 2,
    shadowOpacity: 1,
    shadowOffset: { height: 2, width: 0 },
    elevation: 5,
    alignSelf: 'stretch',
    height: 50,
    justifyContent: 'center',
  },
  txtBtnDefault: {
    ...text.text01,
    ...text.text02,
    paddingTop: Platform.OS === 'ios' ? 10 : 5,
  },
  iconInput: {
    marginTop: -22,
    paddingRight: 10,
    textAlign: 'right',
    // backgroundColor: colors.danger,
  },
  noMarginBottom: {
    noMarginBottom: 0,
  },
  head: {
    width: metrics.screenWidth,
    height: 150,
  },
  imageHead: {
    width: metrics.screenWidth,
    height: 220,
  },
  contentHead: {
    borderWidth: 0,
    borderRadius: 0,
    shadowColor: Platform.OS === 'ios' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.8)',
    shadowRadius: 2,
    shadowOpacity: 1,
    shadowOffset: { height: 2, width: 0 },
    elevation: 5,
  },
  menuBottom: {
    position: 'absolute',
    bottom: 0,
    width: metrics.screenWidth,
    height: 72,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    borderTopWidth: 1,
    borderTopColor: colors.light,
    backgroundColor: '#FAFAFA',
    zIndex: 9,
    elevation: 9,
  },
  mlink: {
    alignItems: 'center',
  },
  mtxtLink: {
    ...text.text01,
    color: 'rgb(123, 123, 123)',
    fontSize: 12,
    textAlign: 'center',
    letterSpacing: 0,
    paddingTop: 5,
  },
  mtxtPos: {
    position: 'absolute',
    top: 44,
    left: 23,
    color: colors.white,
  },
  mtxtPosTwo: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    // backgroundColor: '#FAFA',
  },
  mtxtPosThree: {
    paddingTop: 9,
  },
  heading: {
    width: metrics.screenWidth,
    paddingHorizontal: 10,
    paddingVertical: Platform.OS === 'ios' ? 10 : 20,
  },
  contentHeading: {
    flexDirection: 'row',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
  titleBackLink: {
    ...text.text01,
    color: colors.white,
    fontSize: 20,
    textAlign: 'left',
    letterSpacing: 0,
    marginLeft: 10,
  },
  iconBackLink: {
    marginTop: Platform.OS === 'ios' ? -1 : 2,
    paddingHorizontal: 10,
  },
  linkHighlights: {
    color: colors.primary,
  },
  youAreHere: {
    width: metrics.screenWidth,
  },
  youAreHereBorder: {
    borderTopWidth: 1,
    borderTopColor: colors.light,
    borderBottomWidth: 1,
    borderBottomColor: colors.light,
  },
  txtBtnPosition: {
    marginTop: Platform.OS === 'ios' ? -5 : 0,
  },
  loading: {
    color: colors.primary,
  },
};
