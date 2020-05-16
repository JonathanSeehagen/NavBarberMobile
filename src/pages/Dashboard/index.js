import React from 'react';
import {Button, View, Text} from 'react-native';

export default function Dashboard({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Você está em Dashboard</Text>
      <Button
        title="Ir para login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}
