import React from 'react';
import {Button, View, Text} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();
  const route = useRoute;

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>route.params.screenName</Text>
      <Button
        title="Ir para Home"
        onPress={() => navigation.navigate('Home')}
      />
      <Button
        title="View Bottom Tabs"
        onPress={() => navigation.navigate('Bottom Tabs')}
      />
      <Button
        title="View Top Tabs"
        onPress={() => navigation.navigate('Top Tabs')}
      />
    </View>
  );
}
