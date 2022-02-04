import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import icon from '../assets/imgs/icon.png'

export default Header => {
    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <Image source={icon} style={styles.image}></Image>
                <Text style={styles.title}>Lambe Lambe</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#bbb',
        width: '100%'
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    title: {
        color: '#000',
        fontFamily: 'shelter',
        height: 30,
        fontSize: 28,
    }
})