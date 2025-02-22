import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const RegistroScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <TextInput style={styles.input} placeholder="Nombre" />
      <TextInput style={styles.input} placeholder="Correo electrónico" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry />
      <Button title="Registrarse" onPress={() => alert('Usuario registrado')} />
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
  input: { width: 300, height: 40, borderWidth: 1, marginBottom: 10, padding: 10 },
});

export default RegistroScreen;
