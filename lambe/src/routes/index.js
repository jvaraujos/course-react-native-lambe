import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppTabNavigator from './AppTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../screens/Login';

const Stack = createNativeStackNavigator();
const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Auth'>
                <Stack.Screen
                    name="Auth"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Home"
                    component={AppTabNavigator}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;
