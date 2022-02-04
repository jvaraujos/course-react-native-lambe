import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './src/store/storeConfig'
import App from './src/App'

const store = createStore(reducers)


class Redux extends Component {
    render() {
        return (
            <Provider store={store} >
                <App></App>
            </Provider >
        )
    }
}

AppRegistry.registerComponent(appName, () => Redux);
