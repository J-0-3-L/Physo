import { ScrollView, View, StyleSheet, Dimensions } from "react-native";
import InfoFisica from '../components/InfoFisica';
import { fisica } from '../data/fisica.js';

import { useState } from "react";
//const { width } = Dimensions.get('window');

export default function FisicaSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / width);
    setCurrentIndex(index);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {fisica.map((f, index) => (
          <View key={index} style={styles.fisica}>
            <InfoFisica
              title={f.title}
              description={f.description}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#155e75'
  },
  fisica: {
    width: 300,

  }

})
