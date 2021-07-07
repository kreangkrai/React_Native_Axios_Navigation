import React from 'react';
import {
  NavigationContainer,
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {
  Provider as PaperProvider,
} from 'react-native-paper';

import { DrawerContent } from './screens/DrawerContent';

import MainTabScreen from './screens/MainTabScreen';
import SupportScreen from './screens/SupportScreen';
import SettingsScreen from './screens/SettingsScreen';
import BookmarkScreen from './screens/BookmarkScreen';
import DataTabScreen from './screens/DataTabscreen';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <PaperProvider>
        <NavigationContainer>
          <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            <Drawer.Screen name="SupportScreen" component={SupportScreen} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
            <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
            <Drawer.Screen name="DataTabScreen" component={DataTabScreen}/>
          </Drawer.Navigator>
        </NavigationContainer>
    </PaperProvider>
  );
}

export default App;