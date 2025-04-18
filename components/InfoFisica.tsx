import { View, Text, StyleSheet } from "react-native";

export default function InfoFisica(props) {
  const { title, description } = props
  return (
    <View style={styles.contanier}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

  contanier: {

  },
  title: {

  },
  description: {

  }

})
