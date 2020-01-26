import { StyleSheet, Platform } from 'react-native';

import { colors, general, metrics, text } from '../../styles';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.nocolor,
    flex: 1,
    justifyContent: 'center',
  },
  topOverlay: {
    alignItems: 'center',
    backgroundColor: colors.qrCodeBackground,
    flex: 1,
    height: metrics.widthScreen,
    justifyContent: 'center',
    width: metrics.heightScreen,
  },
  // eslint-disable-next-line react-native/sort-styles
  leftAndRightOverlay: {
    backgroundColor: colors.qrCodeBackground,
    height: metrics.widthScreen * 0.65,
    width: metrics.widthScreen,
  },
  rectangle: {
    alignItems: 'center',
    backgroundColor: colors.nocolor,
    borderColor: colors.qrCodeBorder,
    borderWidth: metrics.widthScreen * 0.005,
    height: metrics.widthScreen * 0.65,
    justifyContent: 'center',
    width: metrics.widthScreen * 0.65,
  },
  bottomOverlay: {
    backgroundColor: colors.qrCodeBackground,
    flex: 1,
    height: metrics.widthScreen,
    paddingBottom: metrics.widthScreen * 0.25,
    width: metrics.widthScreen,
  },
  iconQrCode: {
    marginTop: Platform.OS === 'ios' ? (-(metrics.widthScreen * 0.045)) : 0,
  },
  logo: {
    ...general.logo,
  },
  contentBackLink: {
    alignItems: 'flex-start',
    // backgroundColor: colors.danger,
    paddingHorizontal: metrics.widthScreen * 0.05,
    width: metrics.widthScreen,
  },
  flexDirection: {
    flexDirection: 'row',
  },
  txtQrCode: {
    ...text.text01,
    fontSize: 16,
    letterSpacing: 0,
    marginTop: metrics.widthScreen * 0.10,
  },
});

export default styles;
