import React from 'react'
import { View, FlatList } from 'react-native'
import Post from '../../components/Post'
import feed from '../../../assets/data/feed'
import { API, graphqlOperation } from 'aws-amplify';
import { listPosts } from '../../graphql/queries';
import { useEffect, useState } from 'react';



const SearchResultsScreen = (props) => {

    const { guests } = props;

    const [posts, setPosts] = useState([]);


    useEffect(() => {
       const fetchPosts = async () => {
           try {

            const postsRestult = await API.graphql(
                graphqlOperation(listPosts, {
                    filter: {
                        maxGuests: {
                            ge: guests
                        }
                    }
                })
            )
            setPosts(postsResult.data.listPosts.items);
           } catch (e) {
               console.log(e);
           }
       }
       fetchPosts();
    }, [])
    return (
        <View>
           <FlatList
           data={feed}
           renderItem={({item}) => <Post post={item} />}
           />
        </View>
    )
}

export default SearchResultsScreen
