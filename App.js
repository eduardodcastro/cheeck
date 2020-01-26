// import '~/config/ReactotronConfig';
// console.tron.log('OTRON');

import { createStackNavigator, createAppContainer } from 'react-navigation';
import AppMaps from './AppMaps';
import AppQrCode from './AppQrCode';

const AppNavigator = createStackNavigator({
  ScreenMaps: { screen: AppMaps },
  ScreenQrCode: { screen: AppQrCode },
},
{
  initialRouteName: 'ScreenQrCode',
});

export default createAppContainer(AppNavigator);
