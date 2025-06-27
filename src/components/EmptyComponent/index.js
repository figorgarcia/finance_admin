import React from 'react'
import { View, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function EmptyComponent() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 50 }}>
            <Text style={{ fontSize: 20, color: '#aaa', marginTop: 10 }}>No Transactions Found</Text>
        </View>
    )
}