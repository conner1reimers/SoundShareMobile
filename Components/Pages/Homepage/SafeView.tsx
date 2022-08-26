import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'

type Props = {
  component: any,
  navigation: any
}

const SafeView = (props: Props) => {
  return (
    <View>
      <props.component {...props} />
    </View>
  )
}

export default memo(SafeView);

const styles = StyleSheet.create({})