import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import {useNavigation} from "@react-navigation/native";

const HomeScreen = () => {

    const navigation = useNavigation();

    return (
        <LinearGradient
            colors={['#4c669f', '#3b5998', '#192f6a', '#1a2b5b']} // Fondo difuminado con más capas
            style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.categoryText}>
                    Capture your thoughts {"\n"} anytime, anywhere
                </Text>
            </ScrollView>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Sign Up')}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    scrollContainer: {
        flex: 1,  // Ocupa toda la pantalla para centrar la frase
        justifyContent: 'center',  // Centra verticalmente
        alignItems: 'center',  // Centra horizontalmente
    },
    categoryText: {
        fontSize: 38,  // Aumenta el tamaño del texto
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',  // Centra el texto
        marginHorizontal: 20,  // Agrega margen lateral para que no choque con los bordes
        lineHeight: 48,  // Espaciado entre líneas para que la frase respire más
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 40,
        paddingHorizontal: 30,
    },
    button: {
        backgroundColor: 'rgba(255, 255, 255, 0.4)', // Botones con mayor transparencia
        paddingVertical: 15,
        paddingHorizontal: 50,  // Más ancho para botones más largos
        borderRadius: 30,  // Bordes más redondeados
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,  // Texto más grande
        textAlign: 'center',
    },
});

export default HomeScreen;
