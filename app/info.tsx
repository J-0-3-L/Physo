import { View, Text, StyleSheet, Dimensions, ScrollView, FlatList } from "react-native";
import InfoFisica from '../components/InfoFisica';
import getDots from '../utils/Dots';
import { fisica } from '../data/fisica.js';

import { useState } from "react";

const { width } = Dimensions.get('window');

export default function FisicaSection() {

  const [pageIndex, setPageIndex] = useState(0)

  const handleScroll = (e) => {
    const offsetX = e.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / width);
    setPageIndex(index)
  }

  const dots = getDots(pageIndex, fisica.length);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        onScroll={handleScroll}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
      >
        {fisica.map((f, index) => (
          <View style={styles.page} key={index}>
            <InfoFisica
              title={f.title}
              description={f.description}
            />
          </View>
        ))}
      </ScrollView>

      <View style={styles.dotsContainer}>
        {dots.map((_, i) => (

          <View
            key={i}
            style={[
              styles.dot,
              { backgroundColor: i === pageIndex ? '#fff' : 'rgba(255,255,255,0.3)' },
            ]}
          />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#673AB7'
  },
  pagerView: {
    flex: 1
  },
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 100,
    marginVertical: 50
    /*padding:300*/
  },
  dotsContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    margin: 8,
  },


})
