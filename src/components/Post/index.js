import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './styles'

const Post = (props) => {
    return (
        <View style={styles.container}>
           {/* Image */}
           <Image 
           style={styles.image}
           source={{ uri: 'https://img.freepik.com/free-vector/modern-city-skyline-background_77417-791.jpg?size=626&ext=jpg'}}
           />

           {/* Bed & Bedroom */}
           <Text style={styles.bedrooms}>1 bed 1bedroom</Text>

           {/* Type and Description */}
           <Text style={styles.description} numberOfLines={2}>
               laksjdflajweoifnqopwneo;nweioweinfo;iwne;oqasdfasdsfasdasfasdfasdfasdasdfasdfasdasdffafsdfas
           </Text>

           {/* old price & new price */}
           <Text style={styles.prices}>
               <Text style={styles.oldPrice}>$36 </Text>
               <Text style={styles.price}>  $30</Text>
               / Night
           </Text>

           {/* total price */}
           <Text style={styles.totalPrice}>$230 total</Text>
        </View>
    )
}

export default Post 





// 'https://media.istockphoto.com/vectors/hotel-room-or-bedroom-interior-flat-design-home-furniture-vector-id964970390?b=1&k=6&m=964970390&s=612x612&w=0&h=EHwAaZIENlvTkW5IlGntJ_E9XoUU8i2pCrKXQI9TGPI='