

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux"
import Swiper from 'react-native-swiper'

class SwiperComponent extends React.Component {
  
  render() {
    return (
      <View style={{ height: 200 }} >
        <Swiper style={styles.wrapper} autoplay={true}
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.activeDot} />}
        >
          <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  dot: { backgroundColor: 'rgba(255,255,255,.3)', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7 },
  activeDot: { backgroundColor: '#fff', width: 13, height: 13, borderRadius: 7, marginLeft: 7, marginRight: 7 }

})

const mapStateToProps = (state) => {
  return {
  }
}
export default connect(mapStateToProps)(SwiperComponent)