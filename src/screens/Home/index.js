import React from 'react'
import { ImageBackground, View, Text, Pressable, TouchableOpacity } from 'react-native';
import styles from './styles'
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';

import DestinationSearch from '../DestinationSearch'

const HomeScreen = (props) => {
    const navigation = useNavigation();

    return (
        <View>
            <DestinationSearch />

            {/* <TouchableOpacity 
            activeOpacity={0.8}
           style={styles.searchButton}
           onPress={() => navigation.navigate('Destination Search')}>
                <Fontisto name="search" size={25} color={'#3498DB'} />
               <Text style={styles.searchButtonText}>Where are you going?</Text>
           </TouchableOpacity> */}
        <ImageBackground 
        source={require('../../../assets/images/hotel.png')} 
        style={styles.image} 
        >
            <Text style={styles.title}>BizTrip</Text>

           <TouchableOpacity 
           activeOpacity={0.8}
           style={styles.button}
           onPress={() => console.log('Explore Btn clicked')} 
           >
               <Text style={styles.buttonText}>Explore nearby hotels</Text>
           </TouchableOpacity>
        </ImageBackground>
        </View>
    );
};

export default HomeScreen;
