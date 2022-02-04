import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

export default props => {
    state = {
        email: '',
        password: '',
    }
    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Email"
                autoFocus={true}
                style={styles.input}
                keyboardType="email-address"
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
            />
            <TextInput
                placeholder="Senha"
                autoFocus={true}
                style={styles.input}
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
            />
            <TouchableOpacity onPress={() => {
                props.navigation.navigate('Home')
            }} style={styles.buttom}>
                <Text style={styles.buttomText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }} style={styles.buttom}>
                <Text style={styles.buttomText}>Criar nova conta.</Text>
            </TouchableOpacity>
        </View >
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttomText: {
        fontSize: 20,
        color: '#fff',
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#eee',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
    }
})

