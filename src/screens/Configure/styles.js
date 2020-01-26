import { StyleSheet } from 'react-native';

import {
  colors, general, metrics, text,
} from '../../styles';

const styles = StyleSheet.create({
  boxContent: {
    alignItems: 'center',
    borderBottomColor: colors.light,
    borderBottomWidth: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  checkBox: {
    // backgroundColor: colors.danger,
    margin: 0,
    padding: 0,
  },
  configLink: {
    ...text.text01,
    fontSize: 14,
    letterSpacing: 0,
    alignSelf: 'stretch',
    color: colors.dark,
    textAlign: 'left',
  },
  configTitle: {
    ...text.text01,
    fontSize: 16,
    letterSpacing: 0,
    alignSelf: 'stretch',
    color: colors.secundaryGrey,
    textAlign: 'left',
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
  listNotify: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logout: {
    color: colors.secundaryRed,
  },
  notifyTitle: {
    paddingTop: 7,
  },
  scrollHeight: {
    paddingBottom: '11%',
  },
});

export default styles;
