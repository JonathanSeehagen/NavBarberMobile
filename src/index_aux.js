import React from 'react';
// /import {StatusBar} from 'react-native';
// <StatusBar barStyle="light-content" backgroundColor="#7159c1" />

import './config/ReactotronConfig';
// import App from './pages/SwitchNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Tab1 from './pages/Tabs/Tab1';
import Tab2 from './pages/Tabs/Tab2';
import Tab3 from './pages/Tabs/Tab3';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();
const MaterialTopTabs = createMaterialTopTabNavigator();
// import App from './pages/DrawerNavigator';

const createHomeStack = () => (
  <Stack.Navigator>
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen
      name="About"
      component={About}
      options={{
        title: 'About the app',
        headerStyle: {backgroundColor: 'black'},
        headerTintColor: 'white',
      }}
    />
    <Drawer.Screen name="Bottom Tabs" children={createBottomTabs} />
    <Drawer.Screen name="Top Tabs" children={createTopTabs} />
  </Stack.Navigator>
);

const createTopTabs = () => {
  return (
    <MaterialTopTabs.Navigator>
      <MaterialTopTabs.Screen
        name="Tab 1"
        component={Tab1}
        options={{title: 'HELLO'}}
      />
      <MaterialTopTabs.Screen name="Tab 2" component={Tab2} />
      <MaterialTopTabs.Screen name="Tab 3" component={Tab3} />
    </MaterialTopTabs.Navigator>
  );
};

const createBottomTabs = () => {
  return (
    <MaterialBottomTabs.Navigator>
      <MaterialBottomTabs.Screen name="Tab 1" component={Tab1} />
      <MaterialBottomTabs.Screen name="Tab 2" component={Tab2} />
      <MaterialBottomTabs.Screen name="Tab 3" component={Tab3} />
    </MaterialBottomTabs.Navigator>
  );
};

export default function Index() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerPosition="right">
        <Drawer.Screen name="Start" children={createHomeStack} />
        <Drawer.Screen name="Login" component={Login} />
        <Drawer.Screen name="Dashboard" component={Dashboard} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
