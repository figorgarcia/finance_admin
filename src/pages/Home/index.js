import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import TransactionItem from '../../components/TransactionItem';

import styles from './styles';
import { FlatList } from 'react-native-gesture-handler';
import AddTransaction from '../AddTransaction';
import EmptyComponent from '../../components/EmptyComponent';
import { useTransactions } from '../../context/TransactionProvider';

export default function Home({ navigation }) {

    const { transactions, addTransactionVisible, setAddTransactionVisible } = useTransactions();

    const onPressDetailTransaction = (transaction) => {
        navigation.navigate('TransactionDetails', { transaction });
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text>Hello,</Text>
                    <View style={styles.headerTextIcon}>
                        <Text style={styles.name}>Francisco</Text>
                        <Ionicons name="hand-left-outline" size={30} color="#F9CB9C" />
                    </View>
                </View>
                <AntDesign name="plussquareo" size={25} color="black" onPress={() => setAddTransactionVisible(true)} />
            </View>
            <FlatList
                style={{ marginBottom: 20 }}
                keyExtractor={(item) => item.id.toString()}
                data={transactions}
                ListEmptyComponent={EmptyComponent}
                renderItem={({ item }) => (
                    <TransactionItem
                        item={item}
                        onPress={() => onPressDetailTransaction(item)}
                    />
                )}
            />
            <AddTransaction isVisible={addTransactionVisible} />
        </View>
    )
}