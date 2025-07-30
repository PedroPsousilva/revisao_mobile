import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header({ title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 80,
    backgroundColor: "#6A1B9A",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30, // Para considerar o notch/status bar
    elevation: 4,
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});
