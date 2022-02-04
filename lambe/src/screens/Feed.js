import React, { Component } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import Post from '../components/Post'
import Header from '../components/Header'
class Feed extends Component {
    state = {
        pots: [{
            id: Math.random(),
            nickName: "Rafael Pereira Filho",
            email: "rafaelprrflh@gmail.com",
            image: require('../assets/imgs/fence.jpg'),
            comments: [{
                nickName: "Thiago",
                comment: "Ola Tudo bem ?"
            }, {
                nickName: "Vanessa",
                comment: "Osss bem ?"
            }]
        },
        {
            id: Math.random(),
            nickName: "Francisco Almeida",
            email: "xico@gmail.com",
            image: require('../assets/imgs/bw.jpg'),
            comments: []
        }]
    }
    render() {
        return (
            <View style={styles.container}>
                <Header></Header>
                <FlatList
                    data={this.state.pots}
                    keyExtractor={item => `${item.id}`}
                    renderItem={({ item }) => <Post key={item.id} {...item} />}
                />
            </View>
        )
    }


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})

export default Feed