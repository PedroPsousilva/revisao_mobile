import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CardUser({ name, email, company, zipcode }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
      <Text style={styles.detail}>Empresa: {company}</Text>
      <Text style={styles.detail}>CEP: {zipcode}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f2f2f2',
    padding: 14,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
    elevation: 2,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  email: {
    fontSize: 14,
    color: '#555',
    marginBottom: 6,
  },
  detail: {
    fontSize: 12,
    color: '#666',
  },
});
