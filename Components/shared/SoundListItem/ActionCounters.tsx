import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { useDispatch } from 'react-redux'
import Play from '../../../assets/images/newplay.svg'
import Loop from '../../../assets/images/loop-background.svg';
import Game from '../../../assets/images/game-background.svg';
import Repost from '../../../assets/images/item-repost.svg';
import Fav from '../../../assets/images/item-heart.svg';
import Download from '../../../assets/images/item-download.svg';


type Props = {
  likes: number,
  downloads: number,
  reposts: number,

}

const ActionCounter: React.FC<Props> = ({ likes, downloads, reposts}) => {
  
  return (
  

  <View style={styles.btnSection}>
    <View style={styles.btnContainer}>

      <View style={styles.counterContain}>
        <View style={styles.repostIconContainer}>
          <Repost height={5} width={5} />
        </View>
        <Text style={styles.smalltxt}>{reposts} reposts</Text>
      </View>

      <View style={styles.counterContain}>
        <View style={styles.repostIconContainer}>
          <Fav height={5} width={5} />
        </View>
        <Text style={styles.smalltxt}>{likes} favorites</Text>
      </View>

      <View style={styles.counterContain}>

        <View style={styles.repostIconContainer}>
          <Download height={5} width={5} />
        </View>
        <View style={styles.usernameContain}>
          <Text style={styles.smalltxt}>{downloads} downloads</Text>
        </View>
      </View>
      
    </View>
    
  </View>
      
  )
}

const styles = StyleSheet.create({
  btnSection: {
    width: "100%",
    height: 15,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },

  btnContainer: {
    width: "50%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start"
  },

  repostIconContainer: {
    backgroundColor: "#f3eeee1c",
    height: 10,
    width: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,

  },

  smalltxt: {
    fontSize: 8,
    paddingHorizontal: 4,
    justifyContent: "center",
    alignItems: "center",
    color: '#f3eeee83'
  },

  counterContain: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    top: 3
  },

  usernameContain: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
});


export default ActionCounter