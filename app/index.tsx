import { Text, View, Pressable, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {

  const router = useRouter()

  return (
    <View style={styles.container}>
      <Image source={require('../assets/icons/0.png')} />
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
    backgroundColor: '#075985',
    fontFamily: 'Onest'
  },
  text: {
    color: 'white', fontSize: 30, fontWeight: '700', marginTop: -70
  },
  button: {
    backgroundColor: 'black',
    color: 'white',
    padding: 16,
    width: 320,
    textAlign: 'center',
    borderRadius: 12,
    marginTop: 20,
    fontSize: 15
  }

})
