import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, ScrollView, Platform, ImageBackground, Dimensions } from 'react-native';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const navigation = useNavigation();



    return (
        <ScrollView
            style={{ flex: 1, backgroundColor: '#ffffff' }}
            showsVerticalScrollIndicator={false}
        >
            <ImageBackground
                source={require("../images/backgroundImage1.jpeg")}
                style={{
                    height: Dimensions.get('window').height / 2.5
                }}
            >
                <View style={styles.brandView}>
                    <Text style={styles.brandViewText}>RIMINDER</Text>
                </View>
            </ImageBackground>
            <View style={styles.bottomView}>
                <View style={{ padding: 40 }}>
                    <Text style={{ fontSize: 34, fontWeight: 'bold' }}>Welcome</Text>
                    <Text>
                        Don't Have an account?
                        {' '}
                        <Text>
                            Register now
                        </Text>
                    </Text>
                    <View
                        style={{ marginTop: 50 }}
                    >
                        <TextInput placeholder='Email' style={{ borderColor: '#000' }}></TextInput>
                    </View>
                    <View
                        style={{ marginTop: 20 }}
                    >
                        <TextInput placeholder='Password' style={{ borderColor: '#000' }}></TextInput>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    brandView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    brandViewText: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#f5c4d7'
    },
    bottomView: {
        flex: 1.5,
        bottom: 50,
        backgroundColor: '#fff',
        borderTopStartRadius: 60,
        borderTopEndRadius: 60
    }
})

export default Login
