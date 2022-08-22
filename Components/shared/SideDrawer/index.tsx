import { Animated, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import More from "../../../assets/images/pop.svg";


type Props = {}

const SideDrawer = (props: Props) => {
  const [open, setOpen] = useState(false);

  const slideAnim = useRef(new Animated.Value(-300)).current;
  
  const openSideDrawer = () => {
    setOpen((prev) => !prev);
    Animated.timing(slideAnim, {
      toValue: open ? -300 : 0,
      duration: 150,
      useNativeDriver: true
    }).start();
  }


  return (
    <View pointerEvents="box-none" style={styles.container}>

      <View pointerEvents="auto" style={styles.toggleSideDrawerContainer}>
        <Pressable 
            onPress={openSideDrawer} 
            style={styles.toggleSideDrawer}
            pointerEvents="auto"
            >
          <More height={30} width={30}/>
        </Pressable>
      </View>

      
        
      <Animated.View pointerEvents={open ? "auto" : "none"} style={{
        ...styles.sideDrawerContainer,
        transform: [{translateX: slideAnim}]
        
        }}>
          <View style={styles.sideDrawer}>
              <View style={styles.actionList}>
                <Text>Home</Text>
                <Text>Home</Text>
                <Text>Home</Text>
                <Text>Home</Text>
                <Text>Home</Text>
              </View>
          </View>
      </Animated.View>


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
    }
})