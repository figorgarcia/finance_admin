import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

import Login from '../pages/Login';
import Home from '../pages/Home'
import Detail from '../pages/Detail';
import AddTransaction from '../pages/AddTransaction';

export default function StackNavigator() {

    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen name="Home" component={Home}
                    options={({ navigation }) => ({
                        headerRight: () => (
                            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                <Ionicons name="exit-outline" size={24} color="black" style={{ marginRight: 10 }} />
                            </TouchableOpacity>
                        ),
                        title: 'Dashboard',
                        headerLeft: () => null
                    })}
                />
                <Stack.Screen name="TransactionDetails" component={Detail} options={({ route }) => (
                    {
                        title: route.params?.transaction?.id
                            ? `Transaction #${route.params.transaction.id}` : 'Transaction Details',
                    }
                )} />
                <Stack.Screen name="AddTransaction" component={AddTransaction} options={{ title: 'Adicionar Transação' }} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}