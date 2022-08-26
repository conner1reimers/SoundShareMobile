import { GestureResponderEvent, Pressable, StyleSheet } from 'react-native'
import React from 'react'

type Props = {
  onTap: (event: GestureResponderEvent) => void
}

const TapToCloseBackdrop: React.FC<Props> = ({onTap}) => {
  return (
    <Pressable style={styles.pressBackdrop} onPress={onTap}>
          
    </Pressable>
  )
}

export default TapToCloseBackdrop

const styles = StyleSheet.create({
  pressBackdrop: {
    width: "100%",
    height: "100%",
    backgroundColor: "#0c0d0fa1",
    position: "absolute"
  }
})