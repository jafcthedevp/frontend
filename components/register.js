import { StyleSheet, TextInput, View, Text, StatusBar } from 'react-native';
import ButtonRegister from "../Elements/buttonRegister";
import React, {useState} from "react";
import PasswordInput from "../Elements/passwordInput";

const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    let newData = {
        "username": username,
        "email": email,
        "password": password,
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <Text style={styles.subtitle}>Register your account</Text>

            <TextInput
                placeholder="username"
                style={styles.textInput}
                onChangeText={newUsername => setUsername(newUsername)}
            >
            </TextInput>

            <TextInput
                placeholder="password"
                style={styles.textInput}
                onChangeText={password => setPassword(password)}
            >
            </TextInput>


            <TextInput
                placeholder="@email"
                style={styles.textInput}
                onChangeText={newEmail => setEmail(newEmail)}
            >
            </TextInput>

            <ButtonRegister data={newData}/>

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
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
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

export default Register;
