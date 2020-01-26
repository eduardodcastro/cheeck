import './config/ReactotronConfig';
// console.tron.log('OTRON');

import { createStackNavigator, createAppContainer } from 'react-navigation';
import Splash from './screens/Splash';
import Home from './screens/Home';
import Signup from './screens/Signup';
import SignupTwo from './screens/SignupTwo';
import SignupSuccess from './screens/SignupSuccess';
import Login from './screens/Login';
import Forgot from './screens/Forgot';
import Profile from './screens/Profile';
import CardsList from './screens/CardsList';
import CardsCheckIn from './screens/CardsCheckIn';
import CardsCheckInComplete from './screens/CardsCheckInComplete';
import Premium from './screens/Premium';
import ToShare from './screens/ToShare';
import KeyboardPass from './screens/KeyboardPass';
import KeyboardNumber from './screens/KeyboardNumber';
import Places from './screens/Places';
import Prize from './screens/Prize';
import Configure from './screens/Configure';
import ConfigureContent from './screens/ConfigureContent';
import Scanner from './screens/Scanner';
import Intro from './screens/Intro';
import CheckInMessage from './screens/CheckInMessage';
import SignupInMessage from './screens/SignupInMessage';
import ForgotInMessage from './screens/ForgotInMessage';
import PasswordChange from './screens/PasswordChange';

const AppNavigator = createStackNavigator({
  SplashScreen: { screen: Splash },
  HomeScreen: { screen: Home },
  SignupScreen: { screen: Signup },
  SignupTwoScreen: { screen: SignupTwo },
  SignupSuccessScreen: { screen: SignupSuccess },
  LoginScreen: { screen: Login },
  ForgotScreen: { screen: Forgot },
  ProfileScreen: { screen: Profile },
  CardsListScreen: { screen: CardsList },
  CardsCheckInScreen: { screen: CardsCheckIn },
  CardsCheckInCompleteScreen: { screen: CardsCheckInComplete },
  PremiumScreen: { screen: Premium },
  ToShareScreen: { screen: ToShare },
  KeyboardPassScreen: { screen: KeyboardPass },
  KeyboardNumberScreen: { screen: KeyboardNumber },
  PlacesScreen: { screen: Places },
  PrizeScreen: { screen: Prize },
  ConfigureScreen: { screen: Configure },
  ConfigureContentScreen: { screen: ConfigureContent },
  ScannerScreen: { screen: Scanner },
  IntroScreen: { screen: Intro },
  CheckInMessageScreen: { screen: CheckInMessage },
  SignupInMessageScreen: { screen: SignupInMessage },
  ForgotInMessageScreen: { screen: ForgotInMessage },
  PasswordChangeScreen: { screen: PasswordChange },
},
{
  initialRouteName: 'SplashScreen',
});

export default createAppContainer(AppNavigator);
