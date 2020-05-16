import React from 'react';
import {
  createDrawerNavigator,
  createAppContainer,
} from '@react-navigation/drawer';

import Login from '../Login';
import Dashboard from '../Dashboard';

const Drawer = createDrawerNavigator(
  <Drawer.Navigator>
    <Drawer.Screen name="Login" component={Login} />
    <Drawer.Screen name="Dashboard" component={Dashboard} />
  </Drawer.Navigator>,
);

export default createAppContainer(Drawer);
