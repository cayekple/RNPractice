import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';

import {createDrawerNavigator} from '@react-navigation/drawer';

import MainTabScreen from './src/screens/MainTabScreen';
import {DrawerContent} from './src/screens/DrawerContent';
import SupportScreen from './src/screens/SupportScreen';
import BookmarkScreen from './src/screens/BookmarkScreen';
import SettingsScreen from './src/screens/SettingsScreen';

import RootStackScreen from './src/screens/RootStackScreen';
// drawer
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <RootStackScreen />
        {/* <Drawer.Navigator
          drawerContent={(props) => <DrawerContent {...props} />}>
          <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
          <Drawer.Screen name="Support" component={SupportScreen} />
          <Drawer.Screen name="Bookmark" component={BookmarkScreen} />
          <Drawer.Screen name="Setting" component={SettingsScreen} />
        </Drawer.Navigator> */}
      </NavigationContainer>
    </PaperProvider>
  );
}
