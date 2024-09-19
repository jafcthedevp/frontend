import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Notestest = () => {
    const [notes, setNotes] = useState([]);
    const [newNoteText, setNewNoteText] = useState('');

    const handleAddNote = () => {
        if (newNoteText.trim() !== '') {
            const newNote = {
                id: Date.now(),
                title: newNoteText,
                date: '24/07/2021',
                price: '0',
            };
            setNotes([...notes, newNote]);
            setNewNoteText('');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Ingresar nueva nota"
                    value={newNoteText}
                    onChangeText={setNewNoteText}
                />
                <TouchableOpacity style={styles.addButton} onPress={handleAddNote}>
                    <Icon name="plus" size={20} color="white" />
                </TouchableOpacity>
            </View>
            <FlatList
                data={notes}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.noteItem}>
                        <View style={styles.noteContent}>
                            <Icon name="file-document-outline" size={30} color="black" />
                            <View style={styles.noteInfo}>
                                <Text style={styles.noteTitle}>{item.title}</Text>
                                <Text style={styles.noteDate}>{item.date}</Text>
                                <Text style={styles.notePrice}>{item.price} DA</Text>
                            </View>
                        </View>
                        <View style={styles.noteActions}>
                            <TouchableOpacity style={styles.deleteButton}>
                                <Icon name="delete" size={20} color="red" />
                                <Text style={styles.deleteText}>Delete</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.editButton}>
                                <Text style={styles.editText}>Edit</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    // ... (estilos de antes)
    container: {
        flex: 1,
        padding: 16,
    },
    noteItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: 16,
        marginBottom: 10,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    noteContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    noteInfo: {
        marginLeft: 16,
    },
    noteTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    noteDate: {
        fontSize: 12,
        color: 'gray',
        marginBottom: 4,
    },
    notePrice: {
        fontSize: 14,
    },
    noteActions: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    deleteButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 16,
    },
    deleteText: {
        marginLeft: 4,
        color: 'red',
        fontSize: 14,
    },
    editButton: {
        backgroundColor: 'black',
        padding: 8,
        borderRadius: 5,
    },
    editText: {
        color: '#fff',
        fontSize: 14,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
    },
    addButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        marginLeft: 8,
    },
});

export default Notestest;