import { StyleSheet } from 'react-native';

import {
  colors, general, metrics, text,
} from '../../styles';

const styles = StyleSheet.create({
  boxBullet: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
  boxPassword: {
    marginBottom: 30,
  },
  container: {
    flex: 1,
  },
  contentKey: {
    // backgroundColor: colors.danger,
    paddingHorizontal: 40,
    width: metrics.screenWidth,
  },
  keyboardNumber: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '98%',
  },
  numberBullet: {
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: colors.white,
    borderRadius: 62,
    borderStyle: 'solid',
    borderWidth: 1,
    height: 62,
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 10,
    width: 62,
  },
  numberKey: {
    ...text.text01,
    color: colors.white,
    fontSize: 24,
    letterSpacing: -0.5,
    alignSelf: 'stretch',
    textAlign: 'center',
    lineHeight: 24,
  },
  passBullet: {
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: colors.white,
    borderRadius: 16,
    borderStyle: 'solid',
    borderWidth: 1,
    height: 16,
    justifyContent: 'center',
    width: 16,
  },
  passBulletColor: {
    backgroundColor: colors.white,
  },
  phraseOne: {
    ...text.text01,
    color: colors.white,
    fontSize: 16,
    letterSpacing: -0.5,
    alignSelf: 'stretch',
    paddingBottom: 5,
    textAlign: 'center',
    lineHeight: 24,
  },
  safearea: {
    ...general.safearea,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // eslint-disable-next-line react-native/sort-styles
  modalContent: {
    alignItems: 'center',
    backgroundColor: colors.modalBg,
    flex: 1,
    justifyContent: 'center',
  },
  modalTxt: {
    ...text.text01,
    color: colors.white,
  },
  loading: {
    height: 64,
    marginTop: 20,
    width: 64,
  },
});

export default styles;
