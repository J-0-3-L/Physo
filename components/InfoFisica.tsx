import { View, Text, StyleSheet, Image } from "react-native";

export default function InfoFisica(props) {

  const { title, description, img } = props
  return (
    <View /*style={styles.container}*/ >
      <Image source={img} style={styles.img} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  /*container: {
    justifyContent: 'center', alignItems: 'center', padding: 30
  },*/
  title: {
    fontSize: 25, fontWeight: 'bold', color: 'white', textAlign: 'center', marginBottom: 15, width: 300
  },
  description: {
    fontSize: 18, color: 'white', opacity: 0.6, textAlign: 'center', width: 300
  },
  img: {
    width: 240, height: 240, marginBottom: 20, marginLeft: 30

  },
  textContainer: {
    marginTop: 10
  }

})
