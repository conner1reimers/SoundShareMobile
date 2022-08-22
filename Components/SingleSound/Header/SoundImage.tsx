import { StyleSheet, Image, View } from 'react-native'
import React, { FC } from 'react'
import { useSelector } from 'react-redux'


const SoundImage: FC = () => {

  const img_path = useSelector((state: any) => state.singleSound.sound.img_path);

  return (
    <View style={styles.imageContainer}>
      {img_path && (
        <Image 
          source={{uri: `https://soundshare-bucket.s3.us-east-2.amazonaws.com/${img_path}`}}
          style={styles.image}
        />)}
    </View>
  )
}

export default SoundImage

const styles = StyleSheet.create({

    imageContainer: {
        maxHeight: 140,
        minHeight: 190,
        maxWidth: 100,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
  
    image: {
      height: 75,
      width: 75,
      borderRadius: 20
    }
})