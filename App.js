import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Entype from 'react-native-vector-icons/Entypo'

import HomeScreen from './src/screens/Home'
import Post from './src/components/Post'

import feed from './assets/data/feed'

const post1 = feed[0];

export default function App() {
  return (
    <>
    <StatusBar style="auto" />
    <SafeAreaView>
     {/* <HomeScreen /> */}
     <Post post={post1} />
      
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});