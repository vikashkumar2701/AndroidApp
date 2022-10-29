import {View, Text, StyleSheet, Button} from 'react-native';
export default function Dashboard({ navigation }) {
    return (
        <View style={styles.container}>
        <Text>Dashboard</Text>
        </View>
    );
    }
    const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: "#42B0D5",
    color: "white",
    },
    });