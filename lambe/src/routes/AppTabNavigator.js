import React from 'react'
import Feed from '../screens/Feed'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AddPhoto from '../screens/AddPhoto'
import Profile from '../screens/Profile';


const BottomTabNavigator = createBottomTabNavigator();
const AppTabNavigator = () => {
    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator initialRouteName='Feed' screenOptions={{
                headerShown: false
            }}>
                <BottomTabNavigator.Screen name="Feed" component={Feed}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="home" color={color} size={size} />
                        )
                    }} />
                <BottomTabNavigator.Screen name="AddPhoto" component={AddPhoto}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="camera" color={color} size={size} />
                        )
                    }} />
                <BottomTabNavigator.Screen name="User" component={Profile}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Icon name="account-circle" color={color} size={size} />
                        )
                    }} />
            </BottomTabNavigator.Navigator>
        </NavigationContainer>

    )
}
export default AppTabNavigator