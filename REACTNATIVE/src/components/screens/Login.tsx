import React from "react";
import { View, StyleSheet, SafeAreaView, StatusBar } from "react-native";
import CustomButton from "../components/CustomButton";

export default function Login() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <View style={styles.buttonContainer}>
                <CustomButton 
                    title="Iniciar Sesión" 
                    onPress={() => {}} 
                    variant="primary"
                />
                <CustomButton 
                    title="Registrarme" 
                    onPress={() => {}} 
                    variant="secondary"
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        gap: 20,
    },
});