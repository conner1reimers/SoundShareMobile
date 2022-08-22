import { StyleSheet, Text, View } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import PlayBtn from '../SoundListItem/PlayBtn'
import FFRewind from './FFRewind'
import { useRoute } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store/reducers'
import { Audio } from 'expo-av';
import { Sound } from 'expo-av/build/Audio'
type Props = {}

const GlobalPlayer: FC = (props: Props) => {
  const route = useRoute();
  const path = useSelector((state: RootState) => state.globalSound.sound.path);
  const [currentSound, setCurrentSound] = useState<any>(null);

//   const audio = new Sound(
//     `https://soundshare-bucket.s3.us-east-2.amazonaws.com/${path}`,
//     undefined,
//     (error) => {
//       if (error) {
//         console.log('failed to load the sound', error);
//         return;
//       }
//       // if loaded successfully
//       console.log(
//         'duration in seconds: ' +
//           audio.getDuration() +
//           'number of channels: ' +
//           audio.getNumberOfChannels(),
//       );
//     },
//   );

  console.log(path)

  const loadSound = async () => {
    const { sound: playbackObject } = await Audio.Sound.createAsync(
        { uri: `https://soundshare-bucket.s3.us-east-2.amazonaws.com/${path}` },
        { shouldPlay: true }
    );
    setCurrentSound(playbackObject);

    // let playing = await playbackObject.playAsync();
    // console.log(playing)
  }





  useEffect(() => {
    if(path) loadSound();
  }, [path])

  useEffect(() => {
    if(currentSound) {
        console.log(currentSound)
        // currentSound.playAsync(); 
    }

  }, [currentSound])


//   const globalSound = useSelector((state: RootState) => state.globalSound);
//   console.log(globalSound)

  return (
    <View style={styles.container}>
      <View style={styles.globalPlayerContainer}>

        <View style={styles.playContainer}>

            <View style={styles.btnWrapper}>
                <FFRewind rewind/>
            </View>

            <View style={styles.btnWrapper}>
                <PlayBtn/>
            </View>
            <View style={styles.btnWrapper}>
                <FFRewind ff/>
            </View>

        </View>

        <View style={styles.progressBarContainer}>

        </View>

      </View>
    
    
      

      
    </View>
  )
}

export default GlobalPlayer

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1d2225",
        position: "absolute",
        bottom: 25,
        width: "90%",
        minHeight: 75,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 18,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowColor: "#000000ff",
        shadowOpacity: 1,
        shadowRadius: 4.84,
        elevation: 4,
    },
    
    globalPlayerContainer: {
        width: "95%",
        height: "90%",
        // backgroundColor: "yellow",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },

    
    playContainer: {
        height: "100%",
        flex: 1.25,
        // backgroundColor: "blue",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"

    },

    progressBarContainer: {
        height: "100%",
        flex: 2.5,
        // backgroundColor: "purple"

    },

    btnWrapper: {
        height: "50%",
        width: "30%",
        // backgroundColor: "#dbdbe7",
        justifyContent: "center",
        alignItems: "center"
    }
})