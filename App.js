import { Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
        Poppo-like MVP
      </Text>
      <Text>Home Screen (Live List)</Text>
      <Button title="Go Live" onPress={() => alert('Live Started')} />
    </View>
  );
}
