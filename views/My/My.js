import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux"

class My extends React.Component {
  static navigationOptions = {
    tabBarLabel: '我的',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen2</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  }
}
export default connect(mapStateToProps)(My)