import React from 'react'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import ExploreNavigator from './ExploreNavigator';
import HomeScreen from '../screens/Home';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import SearchResultsMap from '../screens/SearchResultsMap';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = (props) => {
    return (
        <Tab.Navigator 
        tabBarOptions={{
            activeTintColor: '#3498DB',
        }}>
            <Tab.Screen 
            name={"Explore"}
            // component={ExploreNavigator}
            component={SearchResultsMap}
            options={{
                tabBarIcon: ({color}) => (
                    <Fontisto name="search" size={25} color={color} />
                )
            }}
            />  
            <Tab.Screen 
            name={"Saved"}
            component={HomeScreen}
            options={{
                tabBarIcon: ({color}) => (
                    <FontAwesome name="star-o" size={25} color={color} />
                )
            }}
            /> 
            <Tab.Screen 
            name={"BizTrip"}
            component={HomeScreen}
            options={{
                tabBarIcon: ({color}) => (
                    <FontAwesome5 name="suitcase" size={25} color={color} />
                )
            }}
            /> 
            <Tab.Screen 
            name={"Message"}
            component={HomeScreen}
            options={{
                tabBarIcon: ({color}) => (
                    <Feather name="message-square" size={25} color={color} />
                )
            }}
            />    
            <Tab.Screen 
            name={"profile"}
            component={HomeScreen}
            options={{
                tabBarIcon: ({color}) => (
                    <EvilIcons name="user" size={25} color={color} />
                )
            }}
            />  
        </Tab.Navigator>
    )
}

export default HomeTabNavigator
