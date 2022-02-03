import React from 'react'
import { ScrollView, View, StyleSheet, FlatList } from 'react-native'
import Header from '../components/Header'
export default Feed = (props) => {
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
            image: require('../assets/imgs/fence.jpg'),
            comments: []
        }]
    }

    return (
        <View style={styles.container}>
            <Header />
            <FlatList
                data={this.state.pots}
                keyExtractor={item => `${item.id}`}
                renderItem={({ item }) => <Post key={item.id} {...item} />}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})