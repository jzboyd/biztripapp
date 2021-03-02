import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResults from '../screens/SearchResults';
import SearchResultsMap from '../screens/SearchResultsMap';

const Tab = createMaterialTopTabNavigator()

const SearchResultsTabNavigator = (props) => {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#3498DB',
            indicatorStyle: {
                backgroundColor: '#3498DB',
            }
        }}>
            <Tab.Screen name={"list"} component={SearchResults} />
            <Tab.Screen name={"map"} component={SearchResultsMap} />
        </Tab.Navigator>
    )
}

export default SearchResultsTabNavigator
