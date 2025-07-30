// components/Header.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header({ title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#6200ee',
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 4,
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});
