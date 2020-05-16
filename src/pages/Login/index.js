import React from 'react';
import {Button, View, Text} from 'react-native';

export default function Login({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Você está em Login</Text>
      <Button
        title="Ir para dashboard"
        onPress={() => navigation.navigate('Dashboard')}
      />
    </View>
  );
}
