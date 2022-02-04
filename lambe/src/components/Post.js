import React, { Component } from 'react'
import { View, StyleSheet, Image, Dimensions } from 'react-native'
import AddComment from './AddComment'
import Author from './Author'
import Comments from './Comments'

class Post extends Component {
    render() {
        return (
            <View style={styles.container} >
                <Image source={this.props.image} style={styles.image}></Image>
                <Author email={this.props.email} nickName={this.props.nickName}></Author>
                <Comments comments={this.props.comments} />
                <AddComment postId={this.props.id}></AddComment>
            </View>
        )
    }
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

export default Post 
