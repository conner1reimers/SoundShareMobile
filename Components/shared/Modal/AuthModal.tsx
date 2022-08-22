import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const AuthModal = (props: Props) => {
  return (
    <View style={styles.authmodalContainer}>
      <View style={styles.header}>
        <Text>AuthModal</Text>
      </View>
      
    </View>
  )
}

export default AuthModal

const styles = StyleSheet.create({
  authmodalContainer: {

  }
})