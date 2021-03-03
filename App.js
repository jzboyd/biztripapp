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

import { withAuthenticator } from 'aws-amplify-react-native'


const App = () => {
  return (
    <>
    <StatusBar barStyle="default" />
    <Router />
    </>
  );
}

export default withAuthenticator(App);