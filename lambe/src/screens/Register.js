import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

export default props => {
    state = {
        name: '',
        email: '',
        password: ''
    }
    return (
        <View style={styles.container}>
            <TextInput placeholder='Nome' style={styles.input}
                autoFocus={true} value={this.state.name}
                onChangeText={name => this.setState({ name })} />
            <TextInput placeholder='Email' style={styles.input}
                keyboardType='email-address' value={this.state.email}
                onChangeText={email => this.setState({ email })} />
            <TextInput placeholder='Senha' style={styles.input}
                secureTextEntry={true} value={this.state.password}
                onChangeText={password => this.setState({ password })} />
            <TouchableOpacity
                onPress={() => { this.props.onCreateUser(this.state) }}
                style={styles.buttom}>
                <Text style={styles.buttomText}>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4'
    },
    buttomText: {
        fontSize: 20,
        color: '#FFF'
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#EEE',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
        paddingLeft: 15
    }
})
