import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { fetchRecentSounds } from '../../redux/store/actions'
import SoundList from './SoundList'
import SoundTypes from './SoundTypes'

const RecentSounds = (props: any) => {
  return (
    <View style={styles.recentSoundsContainer}>
    <View style={styles.recentSounds}>

      <View style={styles.soundTypes}>
        <SoundTypes/>
      </View>

      <View style={styles.soundList}>
        <SoundList navigation={props.navigation}/>
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