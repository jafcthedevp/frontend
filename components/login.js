import React, { useState} from 'react';
import { Button, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import ButtonGradient from "../Elements/buttonLogin";
import { useNavigation } from '@react-navigation/native';


const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    let newData = {
        "username": username,
        "password": password,
    }

    const navigation = useNavigation();

    return(
        <View style={ styles.container }>

            <Text style={ styles.title }>Login</Text>
            <Button style={styles.title} title='hola' onPress={() => navigation.navigate('Notes')}/>
            <Text style={ styles.subtitle }>Sign in to your account</Text>
            <TextInput
                placeholder="username"
                style={ styles.textInput }
                onChangeText={username => setUsername(username)}
            >
            </TextInput>

            <TextInput
                placeholder="password"
                style={ styles.textInput }
                onChangeText={password => setPassword(password)}
            >
            </TextInput>

            <ButtonGradient data={newData}/>

            <TouchableOpacity>
            </TouchableOpacity>
                <StatusBar style="auto"/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f1f1f1',
    },
    title: {
        marginTop: 80,
        textAlign: 'center',
        fontSize: 60,
        fontWeight: 'bold',
        paddingBottom: 20,
    },
    subtitle: {
        color: 'gray',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    textInput: {
        borderColor: 'gray',
        padding: 15,
        paddingStart: 30,
        width: '80%',
        marginTop: 30,
        borderRadius: 40,
        height: 45,
        backgroundColor: 'white',
    },
    input: {
        margin: 12,
        borderWidth: 1,
        padding: 15,
        paddingStart: 30,
    },
    forgotPassword: {
        padding: 10,
        color: 'gray',
    },
    createAccount: {
        padding: 10,
        color: 'gray',
    }
});

export default Login;