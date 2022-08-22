import { FC } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SSButton from './SSButton'

type Props = {}

const SSButtons: FC = (props: Props) => {
  return (
    <View style={styles.container}>

      <View style={styles.buttonContainer}>
        {/* <SSButton repost/>
        <SSButton like/> */}
        <SSButton download/>

      </View>
      
    </View>
  )
}

export default SSButtons

const styles = StyleSheet.create({
    container: {
        marginTop: 24,
        height: "100%",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        alignSelf: 'flex-start',
    },
    buttonContainer: {
        width: "90%",
        justifyContent: "flex-start",
        flexDirection: "row"

    }
})