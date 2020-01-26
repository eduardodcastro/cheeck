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
  contentText: {
    paddingHorizontal: 20,
  },
  scrollHeight: {
    paddingBottom: '11%',
  },
  text: {
    ...text.text01,
    fontSize: 13,
    letterSpacing: 0,
    alignSelf: 'stretch',
    color: colors.dark,
    textAlign: 'left',
    lineHeight: 20,
    marginVertical: 10,
  },
});

export default styles;
