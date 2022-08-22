import { FC } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import FF from '../../../assets/images/FF.svg'

type Props = {
    ff?: boolean,
    rewind?: boolean
}

const FFRewind: FC<Props> = ({ff, rewind}) => {

  const ffStyles = {
    ...styles.FFRewind,
    transform: rewind ? [{rotate: "180deg"}] : []
  }

  const rewindFFSound = () => {

  }

  return (
    <View style={styles.FFRewindContain}>
      <Pressable android_ripple={{color: "#ccc"}} style={ffStyles} onPress={rewindFFSound}>
        <FF height={15} width={15} />
      </Pressable>
    </View>
  )
}

export default FFRewind

const styles = StyleSheet.create({

    FFRewindContain: {
        height: "100%",
        width: 30,
        justifyContent: "center",
        alignItems: "center",
      },
    
    FFRewind: {
      height: 35,
      width: 35,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 30,
      backgroundColor: "#5b585836",
      padding: 2,
    },

})