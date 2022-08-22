import { StyleSheet, Text, View } from 'react-native'
import { FC } from 'react'
import SoundImage from './SoundImage'
import SoundNmae from './SoundName'

const SingleSoundHeader: FC = () => {
  return (
    <View style={styles.header}>
        <SoundImage/>
        <SoundNmae/>
    </View>
    
  )
}

export default SingleSoundHeader

const styles = StyleSheet.create({
    
  header: {
    minHeight: 140,
    maxHeight: 170,
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: "purple"
  }
})