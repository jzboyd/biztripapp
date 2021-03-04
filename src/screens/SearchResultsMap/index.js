import React, {useEffect, useState, useRef} from "react";
import { View, Text, FlatList, useWindowDimensions } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import CustomMarker from "../../components/CustomMarker";
import PostCarouselItem from "../../components/PostCarouselItem";

import { API, graphqlOperation } from 'aws-amplify';
import { listPosts } from '../../graphql/queries';

const SearchResultsMap = (props) => {

  const [selectedPlaceID, setSelectedPlaceId] = useState(null);
  const [posts, setPosts] = useState([]);

  const flatlist = useRef();

  const map = useRef();

  const viewConfig = useRef({itemVisiblePercentThreshold: 70})

  const onViewChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelectedPlaceId(selectedPlace.id)
    }
})

  const width = useWindowDimensions().width;

  useEffect(() => {
    const fetchPosts = async () => {
        try {

         const postsResult = await API.graphql(
             graphqlOperation(listPosts)
         )
         setPosts(postsResult.data.listPosts.items);
        } catch (e) {
            console.log(e);
        }
    }
    fetchPosts();
 });

  useEffect(() => {
    if(!selectedPlaceID || !flatlist) {
      return;
    }
    const index = posts.findIndex(place => place.id === selectedPlaceID)
  flatlist.current.scrollToIndex({index})

  const selectedPlace = posts[index];
  const region = {
    latitude: selectedPlace.latitude,
    longitude: selectedPlace.longitude,
    latitudeDelta: 0.8,
    longitudeDelta: 0.8,
  }
  map.current.animateToRegion(region);
  }, [selectedPlaceID])

  return (
    <View style={{ width: "100%", height: "100%" }}>
      <MapView
      ref={map}
        style={{ width: "100%", height: "100%" }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 32.779167,
          longitude: -96.808891,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}
      >
        {posts.map(place => (
          <CustomMarker 
          coordinate={{ latitude: place.latitude, longitude: place.longitude }} 
          price={place.newPrice} 
          isSelected={place.id === selectedPlaceID}
          onPress={() => setSelectedPlaceId(place.id)}
          />)
        )}
      </MapView>

      <View style={{position: 'absolute', bottom: 10}}>
        <FlatList 
        ref={flatlist}
        data={posts}
        renderItem={({item}) => <PostCarouselItem post={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width - 60}
        snapToAlignment={"center"}
        decelerationRate={"fast"}
        viewabilityConfig={viewConfig.current}
        onViewableItemsChanged={onViewChanged.current}
        />
      </View>
    </View>
  );
};

export default SearchResultsMap;
