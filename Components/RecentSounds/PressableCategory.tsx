import React, { FC } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

type Props = {
  label: string,
  active: boolean,
  press: any
}

const PressableCategory:FC<Props> = ({label, active, press}) => {
  return (
    <Pressable
          onPress={press}
          style={({ pressed }) => [pressed && styles.pressed, styles.typeContainer, active && styles.active]}
          android_ripple={{ color: "#cccc" }}
    >
        <View style={styles.txtContainer}>
          <Text numberOfLines={1} style={[styles.txt, active && styles.activetxt]}>{label}</Text>
        </View>
        
      </Pressable>
      
  )
}

const styles = StyleSheet.create({
  typeContainer: {
    // backgroundColor: "#282e35",
    borderRadius: 5,
    padding: 6,
    width: 80,
    marginLeft: 12,
    height: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#444a46fa", 
    shadowColor: "rgb(239 246 247)",
    shadowOffset: { width: 6, height: 6 },
    borderWidth: 1,
    borderColor: "rgba(16,18,19,.45098039215686275)",
    
  },

  pressed: {
    opacity: .8
  },

  active: {
    transform: [{scale: 1.2}]

  },

  txt: {
    fontSize: 10,
    flexShrink: 1,
    color: '#efede6',
    flex: 1
  },

  activetxt: {
    color: "#53c9cc"
  },

  txtContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    flex: 1
  }

});



export default PressableCategory;