import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, Alert } from 'react-native';
import api from '../services/api';
import CardTodo from '../components/CardTodo';

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Função separada para carregar os dados
  async function getTodos() {
    try {
      const todosRes = await api.get('/todos');
      const usersRes = await api.get('/users');

      setTodos(todosRes.data);
      setUsers(usersRes.data);
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
      Alert.alert('Erro', 'Não foi possível carregar os dados de tarefas');
    } finally {
      setLoading(false);
    }
  }

  
  useEffect(() => {
    getTodos();
  }, []);

  
  function toggleTodo(id) {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  // Busca o nome do usuário pelo id
  function getUserName(userId) {
    const user = users.find(u => u.id === userId);
    return user ? user.name : 'Desconhecido';
  }

  // Loading enquanto os dados são carregados
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  // Renderização da lista
  return (
    <FlatList
      data={todos}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <CardTodo
          title={item.title}
          completed={item.completed}
          onToggle={() => toggleTodo(item.id)}
          user={getUserName(item.userId)}
        />
      )}
    />
  );
}
