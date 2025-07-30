import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CardPost({ title, body, author }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
      <Text style={styles.author}>Autor: {author}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    elevation: 3,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  body: {
    fontSize: 14,
    marginBottom: 6,
  },
  author: {
    fontSize: 12,
    color: '#666',
    textAlign: 'right',
  },
});
