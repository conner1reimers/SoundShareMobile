import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import More from "../../../assets/images/pop.svg";
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store/reducers';
import { closeSideDrawer, toggleSidedrawer } from '../../../redux/store/actions/uiActions';
import Animation from '../../Lottie/Lottie';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';


type Props = {}

const SideDrawer = (props: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  // const slideAnim = useRef(new Animated.Value(-300)).current;
  // const open = useSelector((state: RootState) => state.sideDrawer.open);
  const [open, setOpen] = useState<Boolean>(false);
  const scroll = useSelector((state: RootState) => state.ui.scroll);
  const [isScrolled, setIsScrolled] = useState<Boolean>(false);
  // const [display, setDisplay] = useState<Boolean>(false);
  const dispatch = useDispatch();

  const route = useRoute();

  // console.log(route.name)

  const isOpen = useSharedValue(false);
  const sliding = useSharedValue(-300);
  const display = useSharedValue(false);

  const logoIsOn = useSelector((state:RootState) => state.ui.logoIsOn)


  // const openSideDrawer = () => {
  //   if (!open) setDisplay(true);
  //   setOpen((prev) => !prev);
  //   Animated.timing(slideAnim, {
  //     toValue: open ? -300 : 0,
  //     duration: 150,
  //     useNativeDriver: true
  //   }).start(() => {
  //     if (open) {
  //       setTimeout(() => {
  //         setDisplay(false);
  //       }, 150)
  //     }
  //   });
  // }


  const openSideDrawer = (event: any, goingHome?: boolean) => {
    setOpen((prev) => !prev);
    isOpen.value = !isOpen.value;
    if (!isOpen.value) {
      sliding.value = 0;
      display.value = !display.value;
    } else {
      sliding.value = -300;
      if (goingHome) display.value = !display.value;
      else {
        setTimeout(() => {
          display.value = !display.value;
        }, 300)
      }
      
    }

    

  }

  const slideAnim = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: withSpring(sliding.value, {damping: 100, mass: .2}) }],
      display: display.value ? "flex" : "none"
      
    }
  })

  useEffect(() => {
    if (scroll.y > 95) setIsScrolled(true);
    else if(isScrolled) setIsScrolled(false);
  }, [scroll])

  console.log(logoIsOn)


  return (
    <View pointerEvents="box-none" style={styles.container}>

      {!isScrolled && logoIsOn && (
        <View
          pointerEvents="auto"
          style={[styles.toggleSideDrawerContainer,
            {
              marginTop: Platform.OS === "android" ? 0 : 25,
              left: Platform.OS === "android" ? 8 : 15,

            }]}
        >
            <Pressable 
                onPress={(e) => openSideDrawer(e)} 
                style={styles.toggleSideDrawer}
                pointerEvents="auto"
            >
            <Animation />
            
          </Pressable>
        </View>
      )}

      
        
      <Animated.View pointerEvents={open ? "auto" : "none"} style={[styles.sideDrawerContainer, slideAnim]}>
          <View style={styles.sideDrawer}>
              <View style={styles.actionList}>
                
            <Pressable
              onPress={(e) => {
                navigation.navigate("Home", {});
                openSideDrawer(e, true);
              }}
            >
                  <Text>Home</Text>
                  <Text>Home</Text>
                  <Text>Home</Text>
                  <Text>Home</Text>
                  <Text>Home</Text>
                  
                </Pressable>
              </View>
        </View>
        
        
      </Animated.View>


      {open ? (
        <Pressable style={styles.pressBackdrop} onPress={openSideDrawer}>
          {/* <View style={styles.backDrop}/> */}
        </Pressable>
        
      ) : null}


    </View>
  )
}

export default SideDrawer

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 2,
        zIndex: 3,
    },

    toggleSideDrawerContainer: {
        height: 80,
        maxWidth: 80,
        justifyContent: "center",
        alignItems: "flex-start",
        left: 8,
        zIndex: 2
    },

    toggleSideDrawer: {
      maxHeight: 30,
      maxWidth: 30
    },

    sideDrawerContainer: {
      height: "100%",
      width: "60%",
      backgroundColor: "#304147",
      position: "absolute",
      left: 0,
      zIndex: 1,
      alignSelf: "flex-start",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      borderRadius: 9
    },

    sideDrawer: {
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center"
    },

    actionList: {
      backgroundColor: "yellow",
      width: "80%",
      height: "50%",
      justifyContent: "center",
      alignItems: "center"
    },
    pressBackdrop: {
      width: "100%",
      height: "100%",
      backgroundColor: "#0c0d0fa1",
      position: "absolute"
    }
})