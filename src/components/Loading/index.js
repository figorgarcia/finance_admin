import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import styles from './styles';

export default function Loading({ message = 'Loading...', style }) {
    return (
        <View style={[styles.container, style]}>
            <ActivityIndicator size="large" color="#c8102e" />
            <Text style={styles.text}>{message}</Text>
        </View>
    );
}