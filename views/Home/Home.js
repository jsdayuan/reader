import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { connect } from "react-redux"

import Search from "./Components/Search"
import Swiper from "./Components/Swiper"

import { RouterTo } from "../../core/routerCore"

import { getGoodList, getBrandList, geColumnList } from "../../action/Home"

class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: '发现',
  };

  componentDidMount() {
    this.init()
  }

  init() {
    // this.props.getBrandList()
    // this.props.getGoodList()
    // this.props.geColumnList()
  }

  render() {
    let routerTo = RouterTo(this)
    return (
      <View style={Styles.box}>
        <ScrollView>
          <Search routerTo={routerTo} />
          <Swiper />
        </ScrollView>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  box: {
    marginTop: -7
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

const mapStateToProps = (state) => {
  return {
    Home: state.Home
  }
}

const mapDispatchToProps = {
  getGoodList,
  getBrandList,
  geColumnList
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)