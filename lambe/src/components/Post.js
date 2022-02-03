import React from 'react'
import { View, StyleSheet, Image, Dimensions } from 'react-native'
import Author from './Author'
export default Post = (props) => {
    return (
        <View style={styles.container}>
            <Image source={props.image} style={styles.image}></Image>
            <Author email="jv._.araujo@hotmail.com" nickName="Joao Araujo"></Author>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {

    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: 'contain'
    }
})

