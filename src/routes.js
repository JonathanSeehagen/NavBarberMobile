import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {createAppContainer, createSwitchNavigator} from 'react-navigation';
// import {createBottomTabNavigator} from 'react-navigation-tabs';
// import {createStackNavigator} from 'react-navigation-stack';

// import Icon from 'react-native-vector-icons/MaterialIcons';

import SignInScreen from './pages/SignInScreen';
import SplashScreen from './pages/SplashScreen';
import HomeScreen from './pages/HomeScreen';

// import SignUp from './pages/SignUp';

// import SelectProvider from './pages/New/SelectProvider';
// import SelectDateTime from './pages/New/SelectDateTime';
// import Confirm from './pages/New/Confirm';

// import Dashboard from './pages/Dashboard';

// const Drawer = createDrawerNavigator();
// import Profile from './pages/Profile';
const Stack = createStackNavigator();

export default function createRouter() {
  const isLoading = false;
  const userToken = null;
  const isSignout = true;

  if (isLoading) {
    // We haven't finished checking for the token yet
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator>
      {userToken == null ? (
        // No token found, user isn't signed in
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            title: 'Sign in',
            // When logging out, a pop animation feels intuitive
            // You can remove this if you want the default 'push' animation
            animationTypeForReplace: isSignout ? 'pop' : 'push',
          }}
        />
      ) : (
        // User is signed in
        <Stack.Screen name="Home" component={HomeScreen} />
      )}
    </Stack.Navigator>
  );
}

/**
export default (signedIn = false) => (
  <NavigationContainer>
    <Drawer.Navigator drawerPosition="right"></Drawer.Navigator>
  </NavigationContainer>
);


/**
export default (signedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createBottomTabNavigator(
          {
            Dashboard,
            New: {
              screen: createStackNavigator(
                {
                  SelectProvider,
                  SelectDateTime,
                  Confirm,
                },
                {
                  defaultNavigationOptions: {
                    headerTransparent: true,
                    headerTintColor: '#fff',
                    headerLeftContainerStyle: {
                      marginLeft: 20,
                    },
                  },
                },
              ),
              navigationOptions: {
                tabBarVisible: false,
                tabBarLabel: 'Agendar',
                tabBarIcon: (
                  <Icon
                    name="add-circle-outline"
                    size={20}
                    color="rgba(255, 255, 255, 0.6)"
                  />
                ),
              },
            },
            Profile,
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#FFF',
              inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
              style: {
                backgroundColor: '#8d41a8',
              },
            },
          },
        ),
      },
      {
        initialRouteName: signedIn ? 'App' : 'Sign',
      },
    ),
  );
  */
