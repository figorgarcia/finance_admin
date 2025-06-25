import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import styles from './styles';

export default function AddTransaction({ onAdd, onCancel, isVisible, setModalVisible }) {
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('Shopping');
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [amount, setAmount] = useState('');
  const [transactionType, setTransactionType] = useState('Debit');

  function handleAdd() {
    if (!description || !location || !category || !date || !amount || !transactionType) {
      alert('All fields are required.');
      return;
    }
    onAdd({
      id: Date.now(),
      description,
      location,
      category,
      date: date.toISOString().split('T')[0],
      amount: parseFloat(amount),
      transactionType,
    });
  }

  function handleAmountChange(text) {
    // Permite apenas números e ponto
    const numeric = text.replace(/[^0-9.]/g, '');
    setAmount(numeric);
  }

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      onRequestClose={() => setModalVisible(false)}
      transparent={true}
    >
      <View style={{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <View style={{
          backgroundColor: '#fff',
          borderRadius: 12,
          padding: 20,
          width: '90%',
          elevation: 5
        }}>
          <Text style={styles.title}>Add Transaction</Text>
          <TextInput
            style={styles.input}
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
          />
          <TextInput
            style={styles.input}
            placeholder="Location"
            value={location}
            onChangeText={setLocation}
          />
          <Text style={styles.label}>Category</Text>
          <Picker
            selectedValue={category}
            style={styles.input}
            onValueChange={(itemValue) => setCategory(itemValue)}
          >
            <Picker.Item label="Shopping" value="Shopping" />
            <Picker.Item label="Travel" value="Travel" />
            <Picker.Item label="Grocery" value="Grocery" />
            <Picker.Item label="Utility" value="Utility" />
          </Picker>
          <Text style={styles.label}>Date</Text>
          <TouchableOpacity
            style={[styles.input, { justifyContent: 'center' }]}
            onPress={() => setShowDatePicker(true)}
          >
            <Text>{date.toISOString().split('T')[0]}</Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={(_, selectedDate) => {
                setShowDatePicker(false);
                if (selectedDate) setDate(selectedDate);
              }}
            />
          )}
          <TextInput
            style={styles.input}
            placeholder="Amount"
            value={amount}
            onChangeText={handleAmountChange}
            keyboardType="numeric"
          />
          <Text style={styles.label}>Type</Text>
          <Picker
            selectedValue={transactionType}
            style={styles.input}
            onValueChange={(itemValue) => setTransactionType(itemValue)}
          >
            <Picker.Item label="Debit" value="Debit" />
            <Picker.Item label="Credit" value="Credit" />
            <Picker.Item label="Refund" value="Refund" />
          </Picker>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 }}>
            <TouchableOpacity style={[styles.button, { backgroundColor: '#B10512' }]} onPress={handleAdd}>
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: '#aaa' }]} onPress={onCancel}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}