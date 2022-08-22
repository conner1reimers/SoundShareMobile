import React, { memo, useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { useDispatch } from 'react-redux'
import Repost from '../../../assets/images/item-repost.svg';
import Fav from '../../../assets/images/item-heart.svg';
import Download from '../../../assets/images/item-download.svg';


type Props = {
  likes: number,
  downloads: number,
  reposts: number,
  singleSound: boolean

}

const ActionCounter: React.FC<Props> = ({ likes, downloads, reposts,singleSound}) => {
  
  const heightWidth = singleSound ? 12 : 5;

  const smallTextStyles = {
    ...styles.smalltxt,
    fontSize: singleSound ? 13 : 8,
    paddingHorizontal: singleSound ? 8 : 4,

  }

  const iconContainerStyles = {
    ...styles.repostIconContainer,
    height: singleSound ? 21 : 10,
    width: singleSound ? 21 : 10,
  }

  const btnContainerStyles = {
    ...styles.btnContainer,
    width: singleSound ? "97%" : "50%"
  }

  const btnSecStyles = {
    ...styles.btnContainer,
    height: singleSound ? 25 : 15
  }

  return (
  

  <View style={btnSecStyles}>
    <View style={btnContainerStyles}>

      <View style={styles.counterContain}>
        <View style={iconContainerStyles}>
          <Repost height={heightWidth} width={heightWidth} />
        </View>
        <Text style={smallTextStyles}>{reposts} reposts</Text>
      </View>

      <View style={styles.counterContain}>
        <View style={iconContainerStyles}>
          <Fav height={heightWidth} width={heightWidth} />
        </View>
        <Text style={smallTextStyles}>{likes} favorites</Text>
      </View>

      <View style={styles.counterContain}>

        <View style={iconContainerStyles}>
          <Download height={heightWidth} width={heightWidth} />
        </View>
        <View style={styles.usernameContain}>
          <Text style={smallTextStyles}>{downloads} downloads</Text>
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  repostIconContainer: {
    backgroundColor: "#f3eeee1c",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,

  },

  smalltxt: {
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


export default memo(ActionCounter);