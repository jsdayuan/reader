import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux"
import Icon from 'react-native-vector-icons/FontAwesome';
import HeaderColors from "../../../static/defaultColors/headerColors"
import { Button } from "react-native-elements";


class Search extends React.Component {

  render() {

    return (
      <View style={Styles.box}>
        <View style={Styles.text} >
          <Button type='clear' onPress={() => { this.props.routerTo('ShopSearch') }}
            icon={
              <Icon
                name='search'
                size={20}
                color='#ccc'
              />
            }
            title="书名、作者"
            titleStyle={{
              color: '#ccc',
              fontSize: 15
            }}
          >
          </Button>
        </View>
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  box: {
    padding: 8,
    backgroundColor: HeaderColors.backgroundColor
  },
  text: {
    backgroundColor: "#fff",
    borderColor: 'red',
    borderStyle: 'solid',
    borderWidth: 0,
    overflow: 'hidden',
    borderRadius: 15,
  },
  center: {
    textAlign: 'center',
    color: '#ccc',
  }
})

const mapStateToProps = (state) => {
  return {
  }
}
export default connect(mapStateToProps)(Search)