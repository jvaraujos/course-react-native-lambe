import React from 'react'
import Feed from '../screens/Feed'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddPhoto from '../screens/AddPhoto'
import Profile from '../screens/Profile';

const BottomTabNavigator = createBottomTabNavigator();

export default props => {
    return (
        <BottomTabNavigator.Navigator initialRouteName='Profile' screenOptions={{
            headerShown: false
        }}>
            <BottomTabNavigator.Screen name="Feed" component={Feed}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    )
                }} />
            <BottomTabNavigator.Screen name="AddPhoto"
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="camera" color={color} size={size} />
                    )
                }}>
                {props => (
                    <AddPhoto {...props}>
                    </AddPhoto>
                )}
            </BottomTabNavigator.Screen>
            <BottomTabNavigator.Screen name="Profile" component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="account-circle" color={color} size={size} />
                    )
                }} />
        </BottomTabNavigator.Navigator>
    )
}
