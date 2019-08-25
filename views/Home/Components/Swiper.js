

import React, { createRef } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { connect } from "react-redux"
import Swiper from 'react-native-swiper'
import { Icon, Image, Text } from "react-native-elements"

class SwiperComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      SwiperOption: {
        showsPagination: false,
        loop: false
      },
      swiper: [
        {
          title: '两全其美',
          zz: "梅尔·海螺",
          image: 'https://img3.doubanio.com/view/subject/m/public/s32324820.jpg',
          lick: 1
        },
        {
          image: 'https://img3.doubanio.com/view/subject/m/public/s33301325.jpg',
          lick: 0
        },
        {
          image: 'https://img3.doubanio.com/view/subject/m/public/s33301325.jpg',
          lick: 1
        }
      ]
    }

    this.swiper = createRef()

    this.nextPage = this.nextPage.bind(this)
  }


  componentDidMount() {
    console.log(this.swiper, 'a');
  }

  nextPage() {
    this.swiper.current.scrollBy(1)
  }

  render() {
    let { SwiperOption, swiper } = this.state
    return (
      <View style={styles.box} >
        <View style={styles.swiperBox}>
          <Swiper style={styles.wrapper} {...SwiperOption} ref={this.swiper}>
            {
              swiper.map((val, idx) => {
                return (
                  <View style={styles.slide} key={idx}>
                    <View style={styles.swiperTop}>
                      <Image
                        source={{ uri: val.image }}
                        style={{ width: 150, height: 200 }}
                        placeholderStyle={{ backgroundColor: '#fff' }}
                        PlaceholderContent={<ActivityIndicator />}
                      />
                      <View style={styles.topTxtBox}>
                        <Text h4 style={[{ fontWeight: 'bold' }, styles.paddingTop]}>{val.title}</Text>
                        <Text style={styles.paddingTop}>{val.zz}</Text>
                      </View>
                    </View>
                    <View style={styles.swiperBottom}>
                      {
                        val.lick ?
                          <Icon
                            type='font-awesome'
                            name='heart'
                            color="red"
                            onPress={() => console.log('hello')}
                          />
                          :
                          <Icon
                            type='font-awesome'
                            name='heart-o'
                            onPress={() => console.log('hello')}
                          />
                      }
                    </View>
                  </View>
                )
              })
            }
          </Swiper>
        </View>
        <Icon
          name='chevron-right'
          containerStyle={styles.nextIcon}
          raised
          onPress={this.nextPage}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    flex: .75,
    position: 'relative'
  },
  swiperBox: {
    flex: 1,
    overflow: 'hidden'
  },
  wrapper: {

  },
  slide: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 6,
    backgroundColor: '#fff',
    margin: 18,
    position: 'relative'
  },
  nextIcon: {
    position: 'absolute',
    right: 0,
    bottom: 0
  },
  swiperTop: {
    paddingTop: 50
  },
  topTxtBox: {
    alignItems: 'center'
  },
  paddingTop: {
    paddingTop: 12
  },
  swiperBottom: {
    position: 'absolute',
    bottom: 30
  }
})

const mapStateToProps = (state) => {
  return {
  }
}
export default connect(mapStateToProps)(SwiperComponent)