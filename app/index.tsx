import { Text, View, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {

  const router = useRouter()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Fisica Clasica</Text>
      <Pressable onPress={() => router.push('info')}>
        <Text style={styles.button}>Start Explore</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7dd3fc'
  },
  text: {
    color: 'white'
  },
  button: {
    backgroundColor: 'black',
    color: 'white',
    padding: 16,
    width: 320,
    textAlign: 'center',
    borderRadius: 12
  }

})
