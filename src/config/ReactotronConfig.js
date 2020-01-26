import { NativeModules } from 'react-native';
import Reactotron from 'reactotron-react-native';

let scriptHostname;

if (__DEV__) {
  const { scriptURL } = NativeModules.SourceCode;
  // eslint-disable-next-line prefer-destructuring
  scriptHostname = scriptURL.split('://')[1].split(':')[0];

  const tron = Reactotron
    // .configure({ host: scriptHostname })
    .configure({ host: '192.168.0.102' })
    .useReactNative()
    .connect();

  tron.clear();

  console.tron = tron;
}
