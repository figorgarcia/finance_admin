import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useTransactions } from '../../context/TransactionProvider';
import styles from './styles';

export default function Detail({ route, navigation }) {

    const { transaction } = route.params || {};
    const { deleteTransaction } = useTransactions();

    const deleteTransactionHandler = (id) => {
        deleteTransaction(id);
        navigation.goBack();
    }

    if (!transaction) {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Ops, we can't find details about this transaction.</Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={styles.goBackText}>Go Back</Text>
                </TouchableOpacity>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.label}>Description:</Text>
                <Text style={styles.description}>{transaction.description}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Category:</Text>
                <Text style={styles.description}>{transaction.category}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Date:</Text>
                <Text style={styles.description}>{transaction.date}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Type:</Text>
                <Text style={styles.description}>{transaction.transactionType}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Amount:</Text>
                <Text style={styles.description}>CAD {transaction.amount.toLocaleString('en-CA', { style: 'currency', currency: 'CAD' })}</Text>
            </View>

            <TouchableOpacity onPress={() => deleteTransactionHandler(transaction.id)}>
                <Text style={styles.goBackText}>Delete Transaction</Text>
            </TouchableOpacity>

        </View>
    )
}