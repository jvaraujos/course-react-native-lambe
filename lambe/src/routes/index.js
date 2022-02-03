import React from 'react';
import { createStackNavigator } from '@react-navigation/native-stack';
import AppTabNavigator from './AppTabNavigator';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Feed"
                    component={AppTabNavigator}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;
