import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    image: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
    justifyContent: 'center',
    },
    title: {
        fontSize: 80,
        fontWeight: 'bold',
        color: 'white',
        width: '70%',
        marginLeft: 25,
    },
    button: {
        backgroundColor: '#fff',
        width: 200,
        height: 30,
        borderRadius: 10,
        marginLeft: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    searchButton: {
        borderColor: '#3498DB',
        borderWidth: 5,
        backgroundColor: '#fff',
        height: 60,
        width: Dimensions.get('screen').width -20,
        borderRadius: 30,
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 20,
        zIndex: 100,
    },
    searchButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
})

export default styles