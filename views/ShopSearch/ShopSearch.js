import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux"
import { Button } from 'react-native-elements';

class ShopSearch extends React.Component {
  static navigationOptions = {
    title: '商品搜索',
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>商品搜索</Text>
        <Button
          title="Outline 商品详情"
          type="outline"
          onPress={() => this.props.navigation.navigate('My')}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    Home:state.Home
  }
}
export default connect(mapStateToProps)(ShopSearch)