import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Entype from 'react-native-vector-icons/Entypo'

import HomeScreen from './src/screens/Home'

export default function App() {
  return (
    <>
    <StatusBar style="auto" />
    <SafeAreaView>
     <HomeScreen />
      
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