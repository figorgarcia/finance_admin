import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './styles'

export default function Login({ navigation }) {

    const [username, setUsername] = useState(false);
    const [password, setPassword] = useState(false);

    function onPressLoginButton() {

        navigation.navigate('Home');

        if (!username || !password) {
            alert('Please enter both username and password');
            return;
        }

        if (username == 'admin' || password == 'admin') {
            navigation.navigate('Home');
        }else{
            alert('Invalid username or password');
            setUsername('');
            setPassword('');
            return;
        }

        
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Sign in with email</Text>
                <TextInput placeholder='Email' style={styles.input} onChangeText={setUsername}/>
                <TextInput placeholder='Password' secureTextEntry={true} style={styles.input} onChangeText={setPassword} />
                <TouchableOpacity style={styles.button} onPress={onPressLoginButton}>
                    <Text style={styles.buttonText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}