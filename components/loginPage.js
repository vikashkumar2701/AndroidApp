import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { useState, useEffect } from "react";

export default function LoginPage({ navigation }) {
  const [isOTPSent, setIsOTPSent] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  function sendOTP() {
    console.log("Send OTP");
    setIsOTPSent(true);
    console.log("isOTPSent", isOTPSent);
  }
  function verifyOTP() {
    console.log("Verify OTP");
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>DLogistics</Text>
      </View>
      <View style={styles.input}>
        <TextInput
          
          placeholder="Enter your mobile number"
        ></TextInput>
      </View>
      <View>
        <TextInput style={styles.input} placeholder="Enter OTP"></TextInput>
      </View>

      {isOTPSent===false ? (
        <View style={styles.Button}>
          <Button title="Send OTP" onPress={sendOTP} />
        </View>
      ) : (
        <View style={styles.Button}>
          <Button title="Login" onPress={() =>
        navigation.navigate('Dashboard', { name: 'Jane' })
      }/>
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#42B0D5",
    color: "white",
  },
  input: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    width: "90%",
    alignSelf: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  Button: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    width: "90%",
    alignContent: "center",
    alignSelf: "center",
  },
});
