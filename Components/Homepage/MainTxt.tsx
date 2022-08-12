import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput } from 'react-native'

type Props = {}

const MainTxt = (props: Props) => {
  const [serachInput, setSearch] = useState<string>("");

  const onChangeText = (txt: string) => setSearch(txt);
  

  return (
    <>
      
      <View style={styles.titleContainer}>
        <Text style={styles.title}>SoundShare</Text>
        <Image style={styles.image} source={require('../../assets/images/goal.png')} />
      </View>

      <View style={styles.mainTxtContainer}>
        <Text style={styles.mainTxt}>
          Share / Download sounds, sound effects, loops, stock audio and more,
          all for free! Download new sounds for your music, movies, games and more.
          Add effects to any sound. All quick, easy and free through SoundShare!
        </Text>
        <View style={styles.mainInputContainer}>
          <TextInput
            placeholder='Search Sounds...'
            placeholderTextColor="#efede6"
            style={styles.mainInput}
            onChangeText={onChangeText}
          />
        </View>
      </View>

      
    </>
  )
}

const styles = StyleSheet.create({


  titleContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    overflow: 'visible',
    height: "50%",
    // backgroundColor: "yellow"
  }, 

  image: {
    height: 25,
    width: 25,
    marginLeft: 10
  },

  title: {
    fontSize: 54,
    color: '#efede6',
  },

  mainTxtContainer: {
    flexDirection: "row",
    padding: 8,
    width: "98%",
    height: "50%",
    position: 'relative',
    alignItems: "flex-start",
    justifyContent: "center",
    // backgroundColor: "blue"
  },

  mainTxt: {
    color: '#efede6',
    fontSize: 12,
    width: "90%",
    // backgroundColor: "red",
    bottom: 39
  },

  mainInputContainer: {
    maxHeight: 64,
    position: 'absolute',
    bottom: 24,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  mainInput: {
    maxWidth: 250,
    minWidth: 180,
    maxHeight: 35,
    padding: 6,
    color: '#efede6',
    borderWidth: 1,
    borderColor: "#efede6",
    borderRadius: 10,
    fontSize: 12

  }

 

});


export default MainTxt;