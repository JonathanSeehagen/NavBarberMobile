import React from 'react';
import {Button, View, Text} from 'react-native';

export default function Login({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home</Text>
      <Button
        title="Ir para About"
        onPress={() =>
          navigation.navigate('About', {screenName: 'About screen'})
        }
      />
    </View>
  );
}
