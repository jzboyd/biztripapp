import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    image: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
    justifyContent: 'center',
    marginVertical: 100,
    zIndex: 0,
    },
    title: {
        fontSize: 70,
        fontWeight: 'bold',
        color: '#3498DB',
        width: '70%',
        marginLeft: 20,
        marginTop: 250,
    
    },
    button: {
        borderColor: '#3498DB',
        borderWidth: 5,
        backgroundColor: '#3498DB',
        width: 200,
        height: 40,
        borderRadius: 30,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
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
        top: 60,
        zIndex: 100,
    },
    searchButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
})

export default styles