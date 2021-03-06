import React from 'react'
import { ImageBackground, View, Text, Pressable, TouchableOpacity } from 'react-native';
import styles from './styles'
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';

import DestinationSearch from '../DestinationSearch'

const HomeScreen = ({ navigation }) => {
    // const navigation = useNavigation()

    return (
        <View>
<Text style={styles.title}>BizTrip</Text>
        <DestinationSearch />

        <ImageBackground 
        source={require('../../../assets/images/hotel.png')} 
        style={styles.image} 
        >
            

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
