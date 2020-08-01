import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';

import {createDrawerNavigator} from '@react-navigation/drawer';

import MainTabScreen from './src/screens/MainTabScreen';
import {DrawerContent} from './src/screens/DrawerContent';
// drawer
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <DrawerContent {...props} />}>
          <Drawer.Screen name="Home" component={MainTabScreen} />
          {/* <Drawer.Screen name="Details" component={DetailStackScreen} /> */}
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
