import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const days = 3;

const Post = (props) => {
  const post = props.post;

  const navigation = useNavigation();

  const goToPostPage = () => {
    navigation.navigate("Post", { postId: post.id });
  };

  return (
    <Pressable onPress={goToPostPage} style={styles.container}>
      {/* Image */}
      <Image style={styles.image} source={{ uri: post.image }} />

      {/* Bed & Bedroom */}
      <Text style={styles.bedrooms}>
        {post.bed} bed {post.bedroom} bedroom
      </Text>

      {/* Type and Description */}
      <Text style={styles.description} numberOfLines={2}>
        {post.type}. {post.title}
      </Text>

      {/* old price & new price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice} </Text>
        <Text style={styles.newPrice}> ${post.newPrice} </Text>/ Night
      </Text>

      {/* total price */}
      <Text style={styles.totalPrice}>${post.newPrice * days} total</Text>
    </Pressable>
  );
};

export default Post;

// 'https://media.istockphoto.com/vectors/hotel-room-or-bedroom-interior-flat-design-home-furniture-vector-id964970390?b=1&k=6&m=964970390&s=612x612&w=0&h=EHwAaZIENlvTkW5IlGntJ_E9XoUU8i2pCrKXQI9TGPI='
