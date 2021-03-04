import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'


const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        zIndex: 1,
        position: 'absolute',
        width: Dimensions.get('screen').width -20,
    },
    textInput: {
        fontSize: 20,
        marginBottom: 20,
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderRadius: 30,
        borderColor: '#3498DB',
        borderWidth: 5,
        zIndex: 0,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderColor: 'lightgrey'
    },
    iconContainer: {
        backgroundColor: '#e7e7e7',
        padding: 7,
        borderRadius: 10,
        marginRight: 15,
    },
    locationText: {

    },
})

export default styles
