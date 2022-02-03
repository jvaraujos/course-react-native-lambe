import React, { Component } from 'react'
import { SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Header from './components/Header'
import Post from './components/Post'

export default class App extends Component {
    render() {
        const comments = [
            { nickName: 'Thiago', comment: 'Excelente Foto!' },
            { nickName: 'Anaina', comment: 'Gordo feio!' },
            { nickName: 'Fran', comment: 'Ola!' },
        ]

        return (
            <SafeAreaView>
                <Header />
                <Post image={require('./assets/imgs/fence.jpg')} comments={comments} />
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {

    }
})

