import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Icon from 'react-native-vector-icons/FontAwesome';

import HeaderColors from "./static/defaultColors/headerColors"

import { TabNavigator } from "./core/bottomTab"

import Search from "./views/Search/Search"

const AppNavigator = createStackNavigator(
  {
    TabNavigator: {
      screen: TabNavigator
    },
    Search: {
      screen: Search
    }
  },
  {
    initialRouteName: "TabNavigator",
    defaultNavigationOptions: ({ navigation }) => {
      let BarTitle = {}
      if (navigation.state.index || navigation.state.index === 0) {
        let params = navigation.state['routes'][navigation.state.index].params
        BarTitle = {
          headerTitle: `${params.title}`
        }
      }
      return {
        ...BarTitle,
        headerStyle: {
          backgroundColor: HeaderColors.backgroundColor,
          borderBottomColor: HeaderColors.backgroundColor
        },
        headerTitleStyle: {
          color: HeaderColors.color
        },
        // headerBackTitleStyle: {
        //   color: HeaderColors.color,
          // paddingLeft: 6
        // },
        // headerBackImage: <Icon
        //   name='chevron-left'
        //   size={20}
        //   color={HeaderColors.color}
        // />
      }
    },

  }
);

export default createAppContainer(AppNavigator)