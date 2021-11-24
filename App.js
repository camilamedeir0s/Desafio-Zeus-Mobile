import React from 'react';
import { StyleSheet, View } from 'react-native';
import Title from './src/components/Title'
import Form from './src/components/Form'
import api from './src/services/Api'

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#351252',
    paddingTop:80,
  },
});
