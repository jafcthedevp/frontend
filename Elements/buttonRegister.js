import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import { registerUser } from "../api";

const ButtonRegister = ({data}) => {
    return (
        <TouchableOpacity onPress={() =>
            registerUser(data.username, data.email, data.password)

        }
                          style={styles.container}>
            <LinearGradient
                colors={['#4c669f', '#719ae8', '#03a9ea']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 1}}
                style={styles.button}
            >
                <Text style={styles.text}>Sign Up</Text>
            </LinearGradient>
        </TouchableOpacity>
    );

}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: 250,
        marginTop: 60,
    },
    text: {
        fontSize: 15,
        color: '#fff',
        fontWeight: 'bold',
    },
    button: {
        width: '80%',
        height: 50,
        borderRadius: 25,
        padding: 15,
        alignItems: 'center',

    }
});

export default ButtonRegister;