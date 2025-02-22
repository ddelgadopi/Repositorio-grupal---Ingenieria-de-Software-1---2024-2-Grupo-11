import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a EcoScan 🌱</Text>
      <Button title="Iniciar Sesión" onPress={() => router.push('/login')} />
      <Button title="Registrarse" onPress={() => router.push('/register')} />
      <Button title="Explorar como invitado" onPress={() => router.push('/explore')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
