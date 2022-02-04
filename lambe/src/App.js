import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Router from './routes';

const App = () => {
    return (
        <SafeAreaProvider>
            <Router />
        </SafeAreaProvider>
    );
};

export default App;
