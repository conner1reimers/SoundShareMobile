import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { useDispatch } from 'react-redux'
import Loop from '../../../assets/images/loop-background.svg';
import Game from '../../../assets/images/game-background.svg';
import ActionCounter from './ActionCounters';
import PlayBtn from './PlayBtn';


type Props = {
  sound: any,
  navigation: any
}

const SoundListItem: React.FC<Props> = ({ sound, navigation }) => {

  const goToSound = () => {
    navigation.navigate("SingleSound", sound.id);
  };

  
  return (
    <View style={styles.item}>

      <Pressable android_ripple={{color: "#ccc"}} style={styles.container} onPress={goToSound}>

        <PlayBtn/>

        <View style={styles.spacing}/>

        <View style={styles.nameImgBox}>

          <View style={styles.imgContainer}>
            <View style={styles.imgBackground}>
              {sound.img_path ? (
                <Image
                  style={styles.img}
                  source={{ uri: `https://soundshare-bucket.s3.us-east-2.amazonaws.com/${sound.img_path}` }}
                />)
                : sound.category === 'fx' ? <Game height={35} width={35} />
                : <Loop height={35} width={35} />}
            </View>  
          </View>
          

          <View style={styles.nametextContainer}>

            <Text numberOfLines={1} style={styles.nametext}>{sound.name}</Text>

            <View style={styles.usernameContain}>
              <Text style={styles.usernametext}>Uploaded by {sound.username}</Text>
            </View>

            <ActionCounter
              likes={sound.favs.length}
              downloads={sound.downloads}
              reposts={sound.reposts.length}
            />
            
          </View>
          

          
        </View>

        
      
      </Pressable>


    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    maxHeight: 75,
    minHeight: 70,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: " rgba(108,121,124,.14)",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },

  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
    alignItems: "flex-start",
    marginLeft: 7,
    height: "100%"
  },

  

  nametextContainer: {
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    paddingHorizontal: 10
  },

  nametext: {
    color: '#efede6',
    fontWeight: "bold",
    fontSize: 16,
    width: 240

  },

  usernametext: {
    fontWeight: "300",
    color: '#f3eeee83',
    fontSize: 10,
    paddingTop: 3,
    width: 200
  },

  nameImgBox: {
    flexDirection: "row",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },

  imgContainer: {
    height: "100%",
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  img: {
    height: 35,
    width: 35
  },

  spacing: {
    width: 15
  },

  imgBackground: {
    height: 35,
    width: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: " #9ae2f397",
    borderRadius: 7,
    overflow: "hidden",
  },

  
  usernameContain: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
  



});


export default SoundListItem