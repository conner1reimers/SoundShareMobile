import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

type Props = {}

const RecentSounds = (props: Props) => {
  return (
    <View style={styles.recentSounds}>
      <Text>
        hi
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  recentSounds: {
    height: 600,
    width: "100%",
    backgroundColor: "red"
  }
});



export default RecentSounds