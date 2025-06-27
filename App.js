import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native';

import StackNavigator from './src/navigation/StackNavigator'
import { TransactionProvider } from './src/context/TransactionProvider';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TransactionProvider>
        <StatusBar style="auto" />
        <StackNavigator />
      </TransactionProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30,
  },
});
