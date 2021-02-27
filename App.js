import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Entype from 'react-native-vector-icons/Entypo'

import HomeScreen from './src/screens/Home';
import SearchResultsScreen from './src/screens/SearchResults';
import Post from './src/components/Post';

import feed from './assets/data/feed'

const post1 = feed[0];
const post2 = feed[2];

export default function App() {
  return (
    <>
    <StatusBar barStyle="auto" />
    <SafeAreaView>
    
     {/* <HomeScreen /> */}
     {/* <Post post={post1} /> */}
     <SearchResultsScreen />
    
    </SafeAreaView>
    </>
  );
}

