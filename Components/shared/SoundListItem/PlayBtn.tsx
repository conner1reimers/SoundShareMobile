import { FC } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import Play from '../../../assets/images/newplay.svg'
import { openGlobalBackUp } from '../../../redux/store/actions/globalSound'

type Props = {}

const PlayBtn: FC = (props: Props) => {
  const dispatch = useDispatch();
  const openGlobal = () => {
    dispatch(openGlobalBackUp());
  }
  return (
    <View style={styles.playbtnContain}>
      <Pressable android_ripple={{color: "#ccc"}} style={styles.playbtn} onPress={openGlobal}>
        <Play height={15} width={15} />
      </Pressable>
    </View>
  )
}

export default PlayBtn

const styles = StyleSheet.create({

    playbtnContain: {
        height: "100%",
        width: 30,
        justifyContent: "center",
        alignItems: "center",
      },
    
    playbtn: {
      height: 35,
      width: 35,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 30,
      backgroundColor: "#5b585836",
      padding: 2,
    },

})