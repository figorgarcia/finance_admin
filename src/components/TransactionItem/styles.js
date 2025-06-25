import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    transaction: {
        flexDirection: 'row',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        padding: 16,
        marginVertical: 8,
        alignItems: 'center',
        elevation: 2,
        shadowColor: '#000',
        marginHorizontal: 10,
    },
    transactionDescription: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#222',
        marginBottom: 2,
    },
    transactionLocation: {
        fontSize: 14,
        color: '#666',
        marginBottom: 2,
    },
    transactionCategory: {
        fontSize: 13,
        color: '#888',
        marginBottom: 2,
        fontStyle: 'italic',
    },
    transactionDate: {
        fontSize: 12,
        color: '#aaa',
    },
    transactionAmount: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    transactionCredit: {
        color: '#4CAF50',
    },
    transactionDebit: {
        color: '#F44336',
    },
    transactionType: {
        fontSize: 13,
        color: '#555',
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
});

export default styles;