import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { login } from '../store/actions/user'

class Login extends Component {
    state = {
        name: '',
        email: '',
        password: ''
    }
    componentDidUpdate = prevProps => {
        if (prevProps.isLoading && !this.props.isLoading) {
            this.props.navigation.navigate('Home')
        }
    }

    render() {
        return <View style={styles.container}>
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
                this.props.onLogin({ ...this.state })
            }} style={styles.buttom}>
                <Text style={styles.buttomText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                this.props.navigation.navigate('Register')
            }} style={styles.buttom}>
                <Text style={styles.buttomText}>Criar nova conta.</Text>
            </TouchableOpacity>
        </View >
    }
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

const mapStateToProps = ({ user }) => {
    return {
        isLoading: user.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: user => dispatch(login(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)