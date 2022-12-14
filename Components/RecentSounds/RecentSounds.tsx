import { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SoundList from './SoundList'
import SoundTypes from '../shared/SoundTypes'

interface Props {
  nav: any
}


const RecentSounds: FC<Props> = () => {
  return (
    <View style={styles.recentSoundsContainer}>
    <View style={styles.recentSounds}>

      <View style={styles.soundTypes}>
        <SoundTypes/>
      </View>

      <View style={styles.soundList}>
        <SoundList />
      </View>

    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  recentSoundsContainer: {
    width: "100%",
    marginTop: 36
  },

  recentSounds: {
    width: "100%",
  },

  soundTypes: {
    
  },

  soundList: {

  }


});



export default RecentSounds