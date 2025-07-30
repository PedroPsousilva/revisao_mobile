import React, { useEffect, useState } from 'react';
import { View, FlatList, ActivityIndicator, Alert } from 'react-native';
import api from '../services/api';
import CardPost from '../components/CardPost';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getPosts() {
    try {
      const posts = await api.getPosts();
      const users = await api.getUsers();

      setPosts(posts.data);
      setUsers(users.data);
    } catch (error) {
      console.log('Erro ao buscar dados:', error);
      Alert.alert('Erro', 'Falha ao carregar os posts ou usuários');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  function getNomeuser(userId) {
    const user = users.find(u => u.id === userId);
    return user ? user.name : 'Desconhecido';
  }

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <FlatList
      data={posts}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <CardPost
          title={item.title}
          body={item.body}
          author={getNomeuser(item.userId)}
        />
      )}
    />
  );
}
