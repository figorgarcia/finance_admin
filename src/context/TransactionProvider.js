import React, { createContext, useState, useContext } from 'react';

const TransactionContext = createContext();

export function TransactionProvider({ children }) {

    const [transactions, setTransactions] = useState([]);
    const [addTransactionVisible, setAddTransactionVisible] = useState(false);

    function addTransaction(transaction) {
        setTransactions(prev => [...prev, { ...transaction, id: transactions.length + 1 }]);
    }

    function deleteTransaction(id) {
        setTransactions(prev => prev.filter(t => t.id !== id));
    }

    return (
        <TransactionContext.Provider value={{ transactions, addTransaction, deleteTransaction, addTransactionVisible, setAddTransactionVisible }}>
            {children}
        </TransactionContext.Provider>
    );
}

export function useTransactions() {
    return useContext(TransactionContext);
}