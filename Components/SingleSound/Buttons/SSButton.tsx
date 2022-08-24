import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { FC } from 'react'
import ActionCounter from '../../shared/SoundListItem/ActionCounters'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store/reducers'

type Props = {
    download?: boolean,
    repost?: boolean,
    like?: boolean
}

const SSButton: FC<Props> = ({download, repost, like}) => {

  const pressBtn = () => {

  }

  const likes = useSelector((state: RootState) => state.singleSound.sound.favs.length);
  const downloads = useSelector((state: RootState) => state.singleSound.sound.downloads);
  const reposts = useSelector((state: RootState) => state.singleSound.sound.reposts.length);
  


  return (
    <View style={styles.container}>
        <ActionCounter singleSound likes={likes} reposts={reposts} downloads={downloads}/>
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