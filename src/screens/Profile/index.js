import { Auth } from 'aws-amplify';
import React from 'react'
import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';


const ProfileScreen = (props) => {

    const logout = () => {
        Auth.signOut();
    }
    return (
        <View style={{height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity 
            activeOpacity={0.8}
            onPress={logout}
           style={{ 
            width: '100%', 
            height: 40, 
            backgroundColor: '#c3c3c3',
            justifyContent: 'center', 
            alignItems: 'center',
            }}>
               <Text>Log Out</Text>
           </TouchableOpacity>
        </View>
    )
}

export default ProfileScreen
