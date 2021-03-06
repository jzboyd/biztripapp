import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Pressable,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import styles from "./styles";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import SuggestionRow from "./SuggestionRow";

import searchResults from "../../../assets/data/search";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const DestinationSearchScreen = (props) => {
  const [inputText, setInputText] = useState("");

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      {/* input component */}

      <GooglePlacesAutocomplete
        placeholder="Where are you going?"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          navigation.navigate("Guests");
        }}
        fetchDetails
        styles={{
          textInput: styles.textInput,
        }}
        query={{
          key: "AIzaSyAwtNyAOK8dMwMzAvd_PmS7xFTYkCY3pME",
          language: "en",
          types: "(cities)",
        }}
        suppressDefaultStyles
        renderRow={(item) => <SuggestionRow item={item} />}
      />
    </SafeAreaView>
  );
};

export default DestinationSearchScreen;
