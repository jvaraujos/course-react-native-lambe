import React from 'react'
import { View, StyleSheet, Text, Dimensions, Alert } from 'react-native'

export default Comments = (props) => {
    let view = null
    if (props.comments) {

        view = props.comments.map((item, index) => {
            return (
                <View style={styles.commentContainer} key={index}>
                    <Text style={styles.nickName}>{item.nickName}</Text>
                    <Text style={styles.comment}>{item.comment}</Text>
                </View>
            )
        })
    }

    return (
        view
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    commentContainer: {
        flexDirection: 'row',
        marginTop: 5,
    },
    nickName: {
        marginLeft: 5,
        fontWeight: 'bold',
        color: '#444'
    },
    comment: {
        color: '#555'
    }
})