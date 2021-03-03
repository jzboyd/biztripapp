import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

const GuestsScreen = (props) => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const navigation = useNavigation();

  return (
    <View style={{ justifyContent: "space-between", height: "100%" }}>
      <View>
        {/* Row 1: Adults */}
        <View style={styles.row}>
          {/* Titles */}
          <View>
            <Text style={{ fontWeight: "bold" }}>Adults</Text>
            <Text style={{ color: "#8d8d8d" }}>Ages 13 or above</Text>
          </View>
          {/* Buttons with value */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {/* - */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setAdults(Math.max(0, adults - 1))}
              style={styles.button}
            >
              <Text style={{ fontSize: 20, color: "#474747" }}>-</Text>
            </TouchableOpacity>

            <Text style={{ marginHorizontal: 20, fontSize: 16 }}>{adults}</Text>

            {/* + */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setAdults(Math.max(0, adults + 1))}
              style={styles.button}
            >
              <Text style={{ fontSize: 20, color: "#474747" }}>+</Text>
            </TouchableOpacity>
            {/* value */}
          </View>
        </View>
        {/* Row 2: Children */}
        <View style={styles.row}>
          {/* Titles */}
          <View>
            <Text style={{ fontWeight: "bold" }}>Children</Text>
            <Text style={{ color: "#8d8d8d" }}>Ages 2-12</Text>
          </View>
          {/* Buttons with value */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {/* - */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setChildren(Math.max(0, children - 1))}
              style={styles.button}
            >
              <Text style={{ fontSize: 20, color: "#474747" }}>-</Text>
            </TouchableOpacity>

            <Text style={{ marginHorizontal: 20, fontSize: 16 }}>
              {children}
            </Text>

            {/* + */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setChildren(Math.max(0, children + 1))}
              style={styles.button}
            >
              <Text style={{ fontSize: 20, color: "#474747" }}>+</Text>
            </TouchableOpacity>
            {/* value */}
          </View>
        </View>
        {/* Row 3: Infants */}
        <View style={styles.row}>
          {/* Titles */}
          <View>
            <Text style={{ fontWeight: "bold" }}>Infants</Text>
            <Text style={{ color: "#8d8d8d" }}>Under 2</Text>
          </View>
          {/* Buttons with value */}
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {/* - */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setInfants(Math.max(0, infants - 1))}
              style={styles.button}
            >
              <Text style={{ fontSize: 20, color: "#474747" }}>-</Text>
            </TouchableOpacity>

            <Text style={{ marginHorizontal: 20, fontSize: 16 }}>
              {infants}
            </Text>

            {/* + */}
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setInfants(Math.max(0, infants + 1))}
              style={styles.button}
            >
              <Text style={{ fontSize: 20, color: "#474747" }}>+</Text>
            </TouchableOpacity>
            {/* value */}
          </View>
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate("Home", {
            screen: "Explore",
            params: {
              screen: "SearchResults",
            },
          })
        }
        style={{
          marginBottom: 30,
          backgroundColor: "#3498DB",
          alignItems: "center",
          justifyContent: "center",
          height: 60,
          marginHorizontal: 20,
          borderRadius: 10,
        }}
      >
        <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
          Search
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default GuestsScreen;
