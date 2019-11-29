import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

if (__DEV__) {
  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .useReactNative()
    .connect();

  console.tron = tron;

  // this line below clears the timeline on every refresh
  tron.clear();
}
