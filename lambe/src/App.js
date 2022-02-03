import React, { Component } from 'react'
import { SafeAreaView, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Header from './components/Header'
import Post from './components/Post'

export default class App extends Component {
    render() {
        return (
            <SafeAreaView>
                <Header />
                <Post image={require('./assets/imgs/fence.jpg')} />
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {

    }
})

