import { View, StyleSheet, Dimensions, ScrollView, Text } from "react-native";
import InfoFisica from '../components/InfoFisica';
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
              img={f.img}
            />
            <Text style={{ color: 'white' }}>Slair</Text>
          </View>
        ))}
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#312e81'
  },
  pagerView: {
    flex: 1
  },
  page: {
    flex: 1,
    /*flexDirection: 'column',*/
    alignItems: 'center',
    justifyContent: 'center',
    /*gap: 50,*/
    marginHorizontal: 50,
    marginVertical: 50,
    /*fontFamily: 'Onest'*/
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
