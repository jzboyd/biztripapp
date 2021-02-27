import React from 'react'
import { ImageBackground, View, Text, Pressable, } from 'react-native';
import styles from './styles'
import Fontisto from 'react-native-vector-icons/Fontisto'

const HomeScreen = (props) => {
    return (
        <View>
            <Pressable 
           style={styles.searchButton}
           onPress={() => console.log('Search Btn clicked')} 
           >
                <Fontisto name="search" size={25} color={'#187bcd'} />
               <Text style={styles.searchButtonText}>Where are you going</Text>
           </Pressable>
        <ImageBackground 
        source={require('../../../assets/images/hotel.png')} 
        style={styles.image} 
        >
            <Text style={styles.title}>Biz Go</Text>

           <Pressable 
           style={styles.button}
           onPress={() => console.log('Explore Btn clicked')} 
           >
               <Text style={styles.buttonText}>Explore nearby hotels</Text>
           </Pressable>
        </ImageBackground>
        </View>
    );
};

export default HomeScreen;
