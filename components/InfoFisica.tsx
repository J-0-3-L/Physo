import { View, Text, StyleSheet } from "react-native";

export default function InfoFisica(props) {
  const { title, description } = props
  return (
    <View /*style={styles.container}*/ >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

  /*container: {
    justifyContent: 'center', alignItems: 'center', padding: 30
  },*/
  title: {
    fontSize: 26, fontWeight: 'bold', color: 'white', textAlign: 'center', marginBottom: 15, width: 200
  },
  description: {
    fontSize: 18, color: 'white', opacity: 0.6, textAlign: 'center', width: 200
  }

})
