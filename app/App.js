import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator} from 'react-navigation';
import BookMarks from './components/BookMarks';
import Search from './components/Search';
import PlaceScreen from './components/PlaceScreen';


const RootStack = createStackNavigator(
  {
  HomeScreen: BookMarks,
  SearchScreen: Search,
  PlaceScreen: PlaceScreen
},
{
  initialRouteName: 'HomeScreen'
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

