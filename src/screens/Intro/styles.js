import { StyleSheet } from 'react-native';

import { colors, general, text } from '../../styles';

const styles = StyleSheet.create({
  mainContent: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center', // IMPORTANT
    paddingHorizontal: 20,
  },
  text: {
    ...text.text01,
    fontSize: 18,
    letterSpacing: 2,
  },
  title: {
    ...text.text01,
    fontSize: 12,
    paddingVertical: 20,
  },
  // eslint-disable-next-line react-native/sort-styles
  image: {
    height: 320,
    width: 320,
  },
  buttonCircle: {
    alignItems: 'center',
    backgroundColor: colors.secundary,
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    width: 40,
  },
});

export default styles;
