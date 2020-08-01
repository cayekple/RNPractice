import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import Main from './src/Main';

// Screens
import HomeScreen from './src/screens/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
