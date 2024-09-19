import * as React from 'react'
import { SafeAreaView, StyleSheet, TextInput, View, Text, Appearance } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Notes from './components/notes';
import Login from './components/login';
import Register from './components/register';
import Home from './components/home';


const Stack = createNativeStackNavigator();

//android : 253760332014-51pu1sf0u918in2fe58iri7tn78r7l3h.apps.googleusercontent.com

const App = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home}
                              options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                />
                <Stack.Screen
                    name="Sign Up"
                    component={Register}
                />
                <Stack.Screen name="Notes"
                              component={Notes}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: 250,
        marginTop: 60,
    }
})

export default App;

