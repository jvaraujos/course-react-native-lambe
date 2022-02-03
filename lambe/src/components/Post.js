import React from 'react'
import { View, StyleSheet, Image, Dimensions } from 'react-native'

export default Post = (props) => {
    return (
        <View style={styles.container}>
            <Image source={props.image} style={styles.image}></Image>
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

