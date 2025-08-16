import React  from "react";

import { TouchableOpacity,Text, StyleSheet } from "react-native";

type Props = {
    title: string;
    onPress: () => void;
    variant?: 'primary' | 'secondary' | 'tertiary';
}

export default function CustomButton({title,onPress,variant = 'primary'}: Props) {
    const styles = StyleSheet.create({
        button: {
            padding: 15,
            width: '100%',
            maxWidth: 300,
            borderRadius: 8,
            backgroundColor:
                variant === 'primary' ? '#1c1c30' :
                variant === 'secondary' ? '#65659c' :
                '#dfdff7',
            borderWidth: variant === 'tertiary' ? 1 : 0,
            borderColor: '#CCC',
            elevation: 3,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
        },
        text: {
            color: variant === "primary" || variant === "secondary" ? '#ededf7' : '#010117',
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 16,
        },
    });

    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}
