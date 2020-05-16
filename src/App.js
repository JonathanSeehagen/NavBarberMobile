/* eslint-disable react/display-name */
/* eslint-disable no-nested-ternary */
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import HomeScreen from './pages/HomeScreen';
import SignInScreen from './pages/SignInScreen';
import SignUpScreen from './pages/SignUpScreen';
import LoadingScreen from './pages/LoadingScreen';
import VendaDiariaScreen from './pages/VendaDiariaScreen';

const AppDrawer = createDrawerNavigator();
const AppDrawerScreen = () => (
  <AppDrawer.Navigator>
    <AppDrawer.Screen name="Home" component={HomeScreen} />
    <AppDrawer.Screen name="Venda Diária" component={VendaDiariaScreen} />
  </AppDrawer.Navigator>
);

const AuthStack = createStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="SignIn" component={SignInScreen} />
    <AuthStack.Screen name="SignUp" component={SignUpScreen} />
  </AuthStack.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
      setUser(null);
    }, 500);
  }, []);

  return (
    <RootStack.Navigator
      headerMode="none"
      screenOptions={{animationEnabled: false}}>
      {isLoading ? (
        <RootStack.Screen name="Loading" component={LoadingScreen} />
      ) : user != null ? (
        <RootStack.Screen name="AppDrawerScreen" component={AppDrawerScreen} />
      ) : (
        <RootStack.Screen name="AuthStackScreen" component={AuthStackScreen} />
      )}
    </RootStack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};
