import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import PlayBtn from '../SoundListItem/PlayBtn'
import FFRewind from './FFRewind'
import { useRoute } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/store/reducers'
import { Audio } from 'expo-av';
import { Sound } from 'expo-av/build/Audio'
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import BasicText from '../../Text/BasicText'
import Close from '../../../assets/images/close.svg'
import { resetGlobalSound } from '../../../redux/store/actions'
import { openGlobalBackUp } from '../../../redux/store/actions/globalSound'
// import {useSharedValue} from 'react-native'

type Props = {}

const GlobalPlayer: FC = (props: Props) => {
  const route = useRoute();
  const dispatch = useDispatch();
  const path = useSelector((state: RootState) => state.globalSound.sound.path);
  const isOpen = useSelector((state: RootState) => state.globalSound.active);
  const [currentSound, setCurrentSound] = useState<any>(null);
  const [pressing, setpressing] = useState<any>(false);

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


  const loadSound = async () => {
    const { sound: playbackObject } = await Audio.Sound.createAsync(
        { uri: `https://soundshare-bucket.s3.us-east-2.amazonaws.com/${path}` },
        { shouldPlay: true }
    );
    setCurrentSound(playbackObject);

    // let playing = await playbackObject.playAsync();
    // console.log(playing)
  }

  const start = useSharedValue({ x: 0, y: 0 });
  const isPressed = useSharedValue(false);
  const isPinching = useSharedValue(false);
  const playerOpen = useSharedValue(false);
  const offset = useSharedValue({ x: 0, y: 0 });
  const scale = useSharedValue(1);
  const savedScale = useSharedValue(1);
  const rotation = useSharedValue(0);
  const savedRotation = useSharedValue(0);

  const startBackdropFinger = useSharedValue({ x: 0, y: 0 });
  
  const distance = useSharedValue(0);
  const pinchScale = useSharedValue(1);


  


  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: playerOpen.value ? [
        { translateX: offset.value.x },
        { translateY: offset.value.y},
        {
          scale: isPinching.value ? pinchScale.value
            : withSpring(
              (isPressed.value && (pinchScale.value === 1)) ? 1.05
                : (isPressed.value && (pinchScale.value !== 1)) ? pinchScale.value
                : (!isPressed.value && (pinchScale.value !== 1)) ? pinchScale.value
                : 1,
                {
                  damping: (playerOpen && !isPressed.value) ? 30 : isPressed.value ? 100 : 1,
                  mass: (playerOpen && !isPressed.value) ? .5 : isPressed.value ? 1 : .2,
                  stiffness: (playerOpen && !isPressed.value) ? 120 : 33
                }
          )
        },


      ] : [
        { translateX: withSpring(0, {damping: 100, mass: 5, stiffness: 100})},
        { translateY: withSpring(0, {damping: 100, mass: 5, stiffness: 100}) },
        {scale: withSpring(0, {damping: 100, mass: 5, stiffness: 100})}
      ],
      backgroundColor: isPressed.value ? '#23292ecb' : '#1d2225',
    };
  });

  const backdropGesturestyles = useAnimatedStyle(() => {
    return {
      display: isPressed.value ? "flex" : "none",
    }
  })

  const closePlayerAnimation = useAnimatedStyle(() => {
    return {
      display: isPressed.value ? "flex" : "none",
      transform: [
        {
          translateX: withSpring(isPressed.value ? -80 : 0,
            {
              damping: 100,
              mass: .15,
              stiffness: 50
            }
        )},
        {
          translateY: withSpring(isPressed.value ? -30 : 0,
            {
              damping: 100,
              mass: .15,
              stiffness: 50
            })
        }]
    }
  })

  const globalPlayerAnimation = useAnimatedStyle(() => {
    return {
      opacity: withSpring(playerOpen.value ? 1 : 0,
        {
          damping: 10,
          mass: 10.2,
          stiffness: 200
        }),
      
    }
  })



  const gesture = Gesture.Pan()
    .onBegin((e) => {
      isPressed.value = true;
    })
    .onUpdate((e) => {
      if(isPressed.value)
        offset.value = {
          x: e.translationX + start.value.x,
          y: e.translationY + start.value.y,
        };

    })
    .onEnd(() => {
      if(isPressed.value)
        start.value = {
          x: offset.value.x,
          y: offset.value.y,
        };
    })
    .onFinalize(() => {
      isPressed.value = false;
      // setpressing(false);
    })

  const zoomGesture = Gesture.Pinch()
    .onBegin(() => isPinching.value = true)
    .onUpdate((event) => {
      scale.value = savedScale.value * event.scale;
    })
    .onEnd(() => {
      isPinching.value = false;
      savedScale.value = scale.value;
  });

  const rotateGesture = Gesture.Rotation()
    .onUpdate((event) => {
      rotation.value = savedRotation.value + event.rotation;
    })
    .onEnd(() => {
      savedRotation.value = rotation.value;
  });



 


  const backdropGesture = Gesture.Pan()
    .onBegin((e) => {
      if (isPressed.value) {
        isPinching.value = true;
        startBackdropFinger.value = { x: e.absoluteX, y: e.absoluteY };
        distance.value = Math.hypot(offset.value.x - e.absoluteX, offset.value.y - e.absoluteY);
      }
      
    })
    .onUpdate((e) => {
      if (isPressed.value) {
        const updatedBackdropX = startBackdropFinger.value.x + e.translationX;
        const updatedBackdropY = startBackdropFinger.value.y + e.translationY;
        
        const updatedDistance = Math.hypot(offset.value.x - updatedBackdropX, offset.value.y - updatedBackdropY);
        const newScale = pinchScale.value * (distance.value / updatedDistance);
        
        if (newScale >= 1) {
          pinchScale.value = Math.min(newScale, 1.5);
        } else {
          pinchScale.value = Math.max(newScale, .7);
        }
      }
    })
    .onEnd(() => {
      
    }).onFinalize(() => {
      if (isPressed.value) {
        isPinching.value = false;
      }
    });


    useEffect(() => {
      if(path) loadSound();
    }, [path])
  
    useEffect(() => {
      if(currentSound) {
          // currentSound.playAsync(); 
      }
  
    }, [currentSound])

  
    const composed = Gesture.Simultaneous(
      gesture,
      Gesture.Simultaneous(zoomGesture, rotateGesture)
    );




  console.log(isOpen)

  useEffect(() => {
    if (isOpen && !playerOpen.value) {
      console.log("opening.")
      playerOpen.value = true;
    }
    else if (playerOpen.value) {
      console.log("closing.")
      playerOpen.value = false;
    }
  }, [isOpen]);




  const tapGest = Gesture.Tap().runOnJS(true).onBegin(() => {
    isPressed.value = false;
    isPinching.value = false;
    playerOpen.value = false;
    dispatch(resetGlobalSound());
    console.log("tapped")
  }).onFinalize(() => {
    offset.value = { x: 0, y: 0 };
    start.value = { x: 0, y: 0 };
    scale.value = 1;
    pinchScale.value = 1;
  })

  
  return (

    <>
    <GestureDetector gesture={composed}>
      <Animated.View style={[globalPlayerAnimation, styles.container, animatedStyles]}>

      
        <View style={styles.globalPlayerContainer}>

          {/* PLAYBTN CONTAINER */}
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

          {/* PROGRESSBAR CONTAINER */}
          <View style={styles.progressBarContainer}>
            
          </View>
          
            
          {/* CLOSE PLAYER CONTAINER */}
          
            <GestureDetector gesture={tapGest}>
              <Animated.View style={[styles.closePlayerContainer, closePlayerAnimation]}>
                {/* <Pressable onPress={closePlayer} style={styles.pressableClose}> */}
                  <View style={styles.pressableClose}>

                    <View style={{ height: "100%", justifyContent: "center", alignItems: "center" }}>
                      <BasicText>
                        <Text style={styles.closeText}>Close Player</Text>
                      </BasicText>
                    </View>
                  

                    <View style={styles.closeIcon}>
                      <Close height={10} width={10}/>
                    </View>
                  
                  </View>
                {/* </Pressable> */}
              </Animated.View>
            </GestureDetector>
        </View>
      
    
      

      
      </Animated.View>
    </GestureDetector>
    
    <GestureDetector gesture={backdropGesture}>
      <Animated.View style={[styles.backdrop, backdropGesturestyles]}>

      </Animated.View> 
    </GestureDetector>
    </>

      
  )
}

export default GlobalPlayer

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#1d2225",
        position: "absolute",
        bottom: 125,
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
        zIndex: 3
        
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
    },

    btnWrapper: {
        height: "50%",
        width: "30%",
        // backgroundColor: "#dbdbe7",
        justifyContent: "center",
        alignItems: "center"
    },

    backdrop: {
      position: "absolute",
      backgroundColor: '#00000000',
      height: "100%",
      width: "100%",
      zIndex: 2
    },
    

    pressableClose: {
      height: "100%",
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 10

    },
    
    
    closePlayerContainer: {
      position: "absolute",
      height: "50%",
      width: "50%",
      top: "-20%",
      right: "-20%",
      backgroundColor: "#cae0eddc",
      borderRadius: 10,
      transform: [{ translateX: 0 }, { translateY: 0 }],
      flexDirection: "row",
      alignItems: "center",
      paddingHorizontal: 10
      // justifyContent: "space-around",
      
  },
    
    closeText: {
      color: "#0f0f10"
    },

    closeIcon: {
      height: 20,
      width: 20,
      backgroundColor: "#1f313a",
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
      marginLeft: 10

    }
})