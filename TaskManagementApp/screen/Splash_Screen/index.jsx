import { Image, StyleSheet, View } from 'react-native'
import React from 'react'

const Splash_Screen = () => {
  return (
    <View style={styles.View}>
      <Image style={styles.Image} source={{uri:'https://miro.medium.com/v2/resize:fit:828/format:webp/1*kQHcSyXJ4GqYCuba9wT2lw.jpeg'}} />
    </View>
  )
}

export default Splash_Screen

const styles = StyleSheet.create({
    View:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center', 
        backgroundColor: 'white',
         gap: 20
    },
    Image:{
        width: 250, 
        height: 250,
    }
})