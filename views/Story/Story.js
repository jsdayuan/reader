import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux"
import { Button } from 'react-native-elements';

class Story extends React.Component {
  static navigationOptions = {
    tabBarLabel: '故事'
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Classification</Text>
        <Button
          title="Outline button"
          type="outline"
          onPress={() => this.props.navigation.navigate('My')}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  }
}
export default connect(mapStateToProps)(Story)