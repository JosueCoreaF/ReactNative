import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet, KeyboardTypeOptions, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

type Props = {
    value: string;
    type?: 'text' | 'password' | 'email' | 'number' | 'numeric';
    onChange: (text: string) => void;
    required?: boolean;
    title: string;
}

export default function CustomInput({ value, type = 'text', onChange, title, required }: Props) {
    // Variable de estado local para controlar si la contraseña es visible
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    
    // Bandera para determinar si el campo es de tipo contraseña
    const isPasswordField = type === 'password';

    const keyboardType: KeyboardTypeOptions = type === 'email' ? 'email-address' : type === 'number' ? 'number-pad' : type === 'numeric' ? 'numeric' : 'default';

    const getError = () => {
        if (required && !value) return "Este campo es obligatorio";
        if (type === 'email' && !value.includes('@')) return "El correo no es valido";
        // Condición para la longitud de la contraseña
        if (type === 'password' && value.length > 0 && value.length < 6) return "La contraseña debe tener al menos 6 caracteres";
        return null; // Devuelve null si no hay errores
    }

    const error = getError();

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={[styles.input, error ? styles.inputError : null]}
                placeholder={title}
                value={value}
                onChangeText={onChange}
                // La contraseña está enmascarada solo si es un campo de contraseña y no es visible
                secureTextEntry={isPasswordField && !isPasswordVisible}
                keyboardType={keyboardType}
            />
            {/* Renderiza el ícono solo si es un campo de contraseña */}
            {isPasswordField && (
                <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                    <Icon
                        // Cambia el ícono dinámicamente según el estado de visibilidad
                        name={isPasswordVisible ? "visibility-off" : "visibility"}
                        size={24}
                        color="#888"
                        
                    />
                </TouchableOpacity>
            )}
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        flex: 1,
        paddingVertical: 12,
        fontSize: 15,
        color: 'black',
    },
    inputError: {
        borderColor: 'red',
    },
    error: {
        color: 'red',
        fontSize: 12,
        marginTop: 4,
        position: 'absolute',
        bottom: -20,
        left: 0,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 12,
        backgroundColor: '#f9f9f9ff',
        marginBottom: 20, // Añadimos un margen para el texto de error
    }
});