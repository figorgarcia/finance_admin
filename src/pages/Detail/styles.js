import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 24,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 24,
        color: '#222',
        textAlign: 'center',
    },
    label: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#ccc',
    },
    value: {
        fontSize: 18,
        marginBottom: 12,
        color: '#333',
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#c00',
        marginBottom: 16,
        textAlign: 'center',
    },
    goBackText: {
        color: '#007bff',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 12,
    },
    row: {
        flexDirection: 'column',
    },
    description: {
        fontSize: 20,
        marginBottom: 12,
        color: '#333',
    },
});

export default styles;