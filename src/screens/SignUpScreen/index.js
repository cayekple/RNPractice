import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const SingUpScreen = () => {
  return (
    <View style={styles.container}>
      <Text>SingUp Screen</Text>
      <Button title="Click Here" onPress={() => alert('Button click')} />
    </View>
  );
};

export default SingUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
