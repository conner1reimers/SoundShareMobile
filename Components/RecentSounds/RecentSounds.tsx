import { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SoundList from './SoundList'
import SoundTypes from './SoundTypes'

interface Props {
  nav: any
}


const RecentSounds: FC<Props> = ({nav}: any) => {
  return (
    <View style={styles.recentSounds}>

      <View style={styles.soundTypes}>
        <SoundTypes/>
      </View>

      <View style={styles.soundList}>
        <SoundList navigation={nav}/>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  recentSounds: {
    width: "100%",
  },

  soundTypes: {
    
  },

  soundList: {

  }


});



export default RecentSounds