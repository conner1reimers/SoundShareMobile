import React from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import Listening from "../../assets/images/listening-new.svg";
import Listening2 from "../../assets/images/listening-new3.svg";
import Listening3 from "../../assets/images/listening-new2.svg";


type Props = {}

const MainOptions = (props: Props) => {
  return (
    <View style={styles.boxContainer}>
      
      {/* <Pressable Box 1> */}
      <Pressable
        style={({ pressed }) => {
          const pressStyle = pressed && styles.pressed;
          return [pressStyle, styles.bigBoxContain];
        }}
        android_ripple={{ color: "#cccc" }}
      >
          <View style={styles.bigBox}>
            <View style={styles.txtContain}>
              <Text style={[styles.txt, styles.bigTxt]}>Upload/Add effects to a sound..</Text>
            </View>
            <View style={styles.imageContain}>
              <Listening height={100} width={100}/>
            </View>
          </View>
      </Pressable>

      {/* <Small Boxes> */}
      <View style={styles.smallBoxContainer}>
        {/* <Pressable Box 2> */}
        <Pressable
          style={({ pressed }) => {
            const pressStyle = pressed && styles.pressed;
            return [pressStyle, styles.smallbox];
          }}
          android_ripple={{ color: "#cccc" }}
        >
          <View style={styles.txtContain}>
            <Text style={styles.txt}>Upload/Add effects to a sound..</Text>
          </View>
          <View style={styles.imageContain}>
            <Listening2 height={50} width={50}/>
          </View>
        </Pressable>

        
        {/* <Pressable Box 3> */}
        <Pressable
          style={({ pressed }) => {
            const pressStyle = pressed && styles.pressed;
            return [pressStyle, styles.smallbox];
          }}
          android_ripple={{ color: "#cccc" }}
        >
          <View style={styles.txtContain}>
            <Text style={styles.txt}>Upload/Add effects to a sound..</Text>
          </View>
          <View style={styles.imageContain}>
            <Listening3 height={50} width={50}/>
          </View>
        </Pressable>

      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({

  boxContainer: {
    flexDirection: "row",
    width: "100%",
    height: "100%",
    alignItems: "center",
  },

  bigBoxContain: {
    backgroundColor: "rgba(68,74,70,.21176470588235294)", 
    shadowColor: "rgb(239 246 247)",
    shadowOffset: { width: 6, height: 6 },
    borderWidth: 1,
    borderColor: "rgba(16,18,19,.45098039215686275)",
    borderRadius: 10,
    width: "50%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5,
    marginVertical: 5

  },

  bigBox: {
    height: "100%",
    width: "100%"
  },

  smallBoxContainer: {
    width: "50%",
    marginLeft: 5,
  },

  smallbox: {
    backgroundColor: "rgba(68,74,70,.21176470588235294)", 
    shadowColor: "rgb(239 246 247)",
    shadowOffset: { width: 6, height: 6 },
    borderWidth: 1,
    borderColor: "rgba(16,18,19,.45098039215686275)",
    flex: 1,
    borderRadius: 10,
    marginVertical: 5

  },

  txt: {
    color: "#efede6",
    fontWeight: 'bold',
    fontSize: 15
  },

  bigTxt: {
    fontSize: 20
  },

  txtContain: {
    flex: 2,
    width: "100%",
    padding: 24,
    paddingLeft: 12
  },

  imageContain: {
    height: "50%",
    width: "100%",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flex: 1,
    paddingRight: 10
  },

  image: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    height: 50,
    width: 50,
    
  },

  pressed: {
    opacity: .7
  }

 

});



export default MainOptions