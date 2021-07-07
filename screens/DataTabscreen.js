import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import GetDataScreen from './GetDataScreen';
import InsertDataScreen from './InsertDataScreen';
const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();

const DataTabScreen = () => (
    <Tab.Navigator
        initialRouteName="GetData"
        activeColor="#fff"
    >
        <Tab.Screen
            name="GetData"
            component={HomeStackScreen}
            options={{
                tabBarLabel: 'GetData',
                tabBarColor: '#009387',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-home" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="InsertData"
            component={InsertDataScreen}
            options={{
                tabBarLabel: 'InsertData',
                tabBarColor: '#009387',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-home" color={color} size={26} />
                ),
            }}
        />
    </Tab.Navigator>
);

export default DataTabScreen;
const HomeStackScreen = ({ navigation }) => (
    
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={GetDataScreen} options={{
            title: 'Mee-Farm',
            headerLeft: () => (
                <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
            )
        }} />
    </HomeStack.Navigator>
);

