import { Animated, Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import More from "../../../assets/images/pop.svg";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store/reducers';
import { closeSideDrawer, toggleSidedrawer } from '../../../redux/store/actions/uiActions';
import Animation from '../../Lottie/Lottie';


type Props = {}

const SideDrawer = (props: Props) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  const slideAnim = useRef(new Animated.Value(-300)).current;
  const dispatch = useDispatch();
  const open = useSelector((state: RootState) => state.sideDrawer.open);
  const scroll = useSelector((state: RootState) => state.ui.scroll);
  const [isScrolled, setIsScrolled] = useState<Boolean>(false);

  const openSideDrawer = () => {
    dispatch(toggleSidedrawer());
    Animated.timing(slideAnim, {
      toValue: open ? -300 : 0,
      duration: 150,
      useNativeDriver: true
    }).start();
  }


  useEffect(() => {
    if (scroll.y > 95) setIsScrolled(true);
    else if(isScrolled) setIsScrolled(false);
  }, [scroll])

  // console.log(isScrolled)


  return (
    <View pointerEvents="box-none" style={styles.container}>

      {!isScrolled && <View
        pointerEvents="auto"
        style={[styles.toggleSideDrawerContainer,
          {
            marginTop: Platform.OS === "android" ? 0 : 25,
            left: Platform.OS === "android" ? 8 : 15,

          }]}>
        <Pressable 
            onPress={openSideDrawer} 
            style={styles.toggleSideDrawer}
            pointerEvents="auto"
            >
          {/* <More height={30} width={30} /> */}
          <Animation/>
        </Pressable>
      </View>}

      
        
      <Animated.View pointerEvents={open ? "auto" : "none"} style={{
        ...styles.sideDrawerContainer,
        // display: open ? "flex" : "none",
        transform: [{translateX: slideAnim}]
        
        }}>
          <View style={styles.sideDrawer}>
              <View style={styles.actionList}>
                <Pressable onPress={() => navigation.navigate("Home", {})}>
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