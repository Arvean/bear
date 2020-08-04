import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Button } from "react-native";

export default function App() {
  console.log("App executed");
  return (
    <SafeAreaView style={styles.container}>
      <Text>Talk To Ted</Text>
      <Button
        title="Connect to bluetooth"
        onPress={() => alert("Connecting")}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
