import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useTransactions } from '../../context/TransactionProvider';
import styles from './styles';

export default function AddTransaction() {
  
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('Shopping');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [amount, setAmount] = useState('');
  const [transactionType, setTransactionType] = useState('Debit');

  const { addTransaction, setAddTransactionVisible, addTransactionVisible} = useTransactions();

  function handleAdd() 
  {
    if (!description || !location || !category || !date || !amount || !transactionType) {
      alert('All fields are required.');
      return;
    }

    addTransaction({
      description,
      location,
      category,
      date: date.toISOString().split('T')[0],
      amount: parseFloat(amount),
      transactionType,
    });

    clearForm();
    setAddTransactionVisible(false);
  }

  const clearForm = () => {
    setDescription('');
    setLocation('');
    setCategory('Shopping');
    setDate(new Date());
    setAmount('');
    setTransactionType('Debit');
  };

  return (
    <Modal
      visible={addTransactionVisible}
      animationType="slide"
      onRequestClose={() => setAddTransactionVisible(false)}
      transparent={true}
    >
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>Add Transaction</Text>
          <TextInput style={styles.input} placeholder="Description" value={description} onChangeText={setDescription} />
          <TextInput style={styles.input} placeholder="Location" value={location} onChangeText={setLocation} />
          <Text style={styles.label}>Category</Text>

          <Picker selectedValue={category} style={styles.input} onValueChange={(itemValue) => setCategory(itemValue)}>
            <Picker.Item label="Shopping" value="Shopping" />
            <Picker.Item label="Travel" value="Travel" />
            <Picker.Item label="Grocery" value="Grocery" />
            <Picker.Item label="Utility" value="Utility" />
          </Picker>

          <Text style={styles.label}>Date</Text>
          <TouchableOpacity style={[styles.input, { justifyContent: 'center' }]} onPress={() => setShowDatePicker(true)} >
            <Text>{date.toISOString().split('T')[0]}</Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker value={date} mode="date" display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={(_, selectedDate) => {
                setShowDatePicker(false);
                if (selectedDate) setDate(selectedDate);
              }}
            />
          )}

          <TextInput style={styles.input} placeholder="Amount" value={amount} keyboardType="numeric" onChangeText={setAmount}/>
        
          <Text style={styles.label}>Type</Text>
          <Picker selectedValue={transactionType} style={styles.input} onValueChange={(itemValue) => setTransactionType(itemValue)} >
            <Picker.Item label="Debit" value="Debit" />
            <Picker.Item label="Credit" value="Credit" />
            <Picker.Item label="Refund" value="Refund" />
          </Picker>
 
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 }}>
            <TouchableOpacity style={[styles.button, { backgroundColor: '#aaa' }]} onPress={() => setAddTransactionVisible(false)}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: '#B10512' }]} onPress={handleAdd}>
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </Modal>
  );
}