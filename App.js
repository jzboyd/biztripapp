import 'react-native-gesture-handler'
import React from 'react';

import { StatusBar } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'

import HomeScreen from './src/screens/Home';
import Router from './src/navigation/Router';
// import SearchResultsScreen from './src/screens/SearchResults';
// import DestinationSearchScreen from './src/screens/DestinationSearch';
// import GuestsScreen from './src/screens/Guests';
// import Post from './src/components/Post';

// import feed from './assets/data/feed'

// const post1 = feed[0];
// const post2 = feed[2];

export default function App() {
  return (
    <>
    <StatusBar barStyle="default" />
    <Router />
    </>
  );
}

