import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';

import {createDrawerNavigator} from '@react-navigation/drawer';

import MainTabScreen from './src/screens/MainTabScreen';
// drawer
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={MainTabScreen} />
          {/* <Drawer.Screen name="Details" component={DetailStackScreen} /> */}
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
