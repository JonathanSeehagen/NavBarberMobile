import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import Login from '../Login';
import Dashboard from '../Dashboard';

const mainNavigation = createSwitchNavigator({
  Login,
  Dashboard,
});

export default createAppContainer(mainNavigation);
