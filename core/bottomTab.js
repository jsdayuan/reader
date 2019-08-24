import React from "react";
import { createBottomTabNavigator } from "react-navigation";

// import { Icon } from 'react-native-elements'
// import Ionicons from 'react-native-vector-icons/Ionicons';

import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from "../static/defaultColors/headerColors"

import Home from "../views/Home/Home"
import BookCase from "../views/BookCase/BookCase"
import Story from "../views/Story/Story"
import My from "../views/My/My"

//eercast

export const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    params: {
      title: '发现',
    }
  },
  BookCase: {
    screen: BookCase,
    params: {
      title: '书架',
    }
  },
  Story: {
    screen: Story,
    params: {
      title: '故事'
    }
  },
  My: {
    screen: My,
    params: {
      title: '我的'
    }
  },
}, {
    initialRouteName: "Home",
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let typeName = {
          Home: 'ravelry',
          BookCase: 'book',
          Story: 'eercast',
          My: 'user-o'
        }
        return <Icon name={typeName[routeName]} color={tintColor} size={20} />
      },
    }),
    tabBarOptions: {
      activeTintColor: `${Colors.color}`,
      inactiveTintColor: 'gray',
    }
  }
);

