import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import ActionCounter from '../../shared/SoundListItem/ActionCounters'

type Props = {
    download?: boolean,
    repost?: boolean,
    like?: boolean
}

const SSButton: FC<Props> = ({download, repost, like}) => {

  const pressBtn = () => {

  }


  return (
    <View style={styles.container}>
      {/* <Pressable style={styles.pressableContainer} onPress={pressBtn}> */}

        <ActionCounter singleSound likes={4} reposts={4} downloads={34}/>

      {/* </Pressable> */}

    </View>
  )
}

export default SSButton

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        bottom: 5,
    }

    
})