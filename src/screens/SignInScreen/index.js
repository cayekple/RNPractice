import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <Text>SignIn Screen</Text>
      <Button title="Click Here" onPress={() => alert('Button click')} />
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
