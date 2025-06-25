import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

export default function TransactionItem({ item }) {
    return (
        <TouchableOpacity
            style={styles.transaction}
            onPress={() => navigation.navigate('Detail', { transaction: item })}
        >
            <View style={{ flex: 3 }}>
                <Text style={styles.transactionDescription}>{item.description}</Text>
                <Text style={styles.transactionLocation}>{item.location}</Text>
                <Text style={styles.transactionCategory}>{item.category}</Text>
                <Text style={styles.transactionDate}>{item.date}</Text>
            </View>
            <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                <Text style={[item.transactionType === 'Debit' ? styles.transactionDebit : styles.transactionCredit, styles.transactionAmount]}>
                    {item.transactionType === 'Debit' ? '-' : '+'}${item.amount.toFixed(2)}
                </Text>
                <Text style={styles.transactionType}>{item.transactionType}</Text>
            </View>
        </TouchableOpacity>
    )
}