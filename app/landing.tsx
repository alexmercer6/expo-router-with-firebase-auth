import { View, Text, Button } from 'react-native';
import React from 'react';
import { router } from 'expo-router';

const LandingScreen = () => {
  return (
    <View>
      <Text>Screen</Text>
      <Button
        title="Login"
        onPress={() => router.push('/login')}
      />
      <Button
        title="Sign Up"
        onPress={() => router.push('/register')}
      />
    </View>
  );
};

export default LandingScreen;
