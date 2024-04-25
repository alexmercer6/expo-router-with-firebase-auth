import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import React, { useState } from 'react';
import { loginUser } from '@/firebase/authentication';
import Colors from '@/constants/Colors';

export function Login({ title }: { title: string }) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          inputMode="email"
          placeholder="Your email address"
          onChangeText={(value) => setEmail(value)}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Your secret password"
          onChangeText={(value) => setPassword(value)}
          autoCapitalize="none"
        />
      </View>
      <Button
        title="Sign in"
        onPress={() => loginUser(email, password)}
        color={Colors.light.text}
        accessibilityLabel="Learn more about this pink button"
      />
      <Text style={styles.forgotPassword}>Forgot password?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.light.background,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: Colors.light.text,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: Colors.light.tint,
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 10,
  },
  forgotPassword: {
    fontSize: 16,
    color: '#666',
    marginTop: 20,
  },
});
