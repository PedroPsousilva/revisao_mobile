import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';

export default function CardTodo({ title, completed, onToggle, user }) {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Checkbox
          style={styles.checkbox}
          value={completed}
          onValueChange={onToggle}
          color={completed ? '#4caf50' : undefined}
        />
        <Text style={[styles.title, completed && styles.completed]}>{title}</Text>
      </View>
      <Text style={styles.user}>Usuário: {user}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 12,
    marginHorizontal: 16,
    marginVertical: 6,
    borderRadius: 8,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    marginRight: 8,
  },
  title: {
    fontSize: 16,
    flexShrink: 1,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  user: {
    fontSize: 12,
    color: '#555',
    marginTop: 6,
    textAlign: 'right',
  },
});
