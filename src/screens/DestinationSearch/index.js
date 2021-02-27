import React, { useState } from "react";
import { View, Text, TextInput, FlatList, Pressable, TouchableOpacity } from "react-native";
import styles from "./styles";
import Entypo from "react-native-vector-icons/Entypo";
import {useNavigation} from '@react-navigation/native';

import searchResults from "../../../assets/data/search";

const DestinationSearchScreen = (props) => {
  const [inputText, setInputText] = useState("");

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* input component */}
      <TextInput
        style={styles.TextInput}
        placeholder="Where are you going?"
        value={inputText}
        onChangeText={setInputText}
      />

      {/* list of destinations */}
      <FlatList
        data={searchResults}
        renderItem={({item}) => (
          <TouchableOpacity 
          activeOpacity={0.9}
          onPress={() => navigation.navigate('Guests')} 
          style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name={"location-pin"} size={30} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
            </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default DestinationSearchScreen;
