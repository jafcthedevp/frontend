import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { loginUser } from '../api';

const PasswordInput = (password) => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder="Password"
                secureTextEntry={!passwordVisible}
                autoCapitalize="none"
                placeholderTextColor="gray"

                onChangeText={() => loginUser(password.password)}
            />
            <TouchableOpacity
                style={styles.iconContainer}
                onPress={() => setPasswordVisible(!passwordVisible)}  // Alternar visibilidad
            >
                <Icon
                    name={passwordVisible ? "eye" : "eye-off"}  // Cambia el ícono entre "mostrar" y "ocultar"
                    size={24}
                    color="gray"
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: 'gray',
        borderRadius: 40,
        backgroundColor: 'white',
        width: '80%',
        height: 45,
        marginTop: 30,
        paddingHorizontal: 10,
    },
    textInput: {
        flex: 1,
        padding: 15,
        paddingStart: 30,
        color: 'black',
    },
    iconContainer: {
        paddingHorizontal: 10,
    },
});

export default PasswordInput;
