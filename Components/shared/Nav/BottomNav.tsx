import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ipod from "../../../assets/images/ipod.svg";
import Frame from "../../../assets/images/frame.svg";
import Followers from "../../../assets/images/followers.svg";
import Fx from "../../../assets/images/fx.svg";


type Props = {}

const BottomNav = (props: Props) => {
  return (
    <View pointerEvents="box-none" style={styles.container}>
      <View style={styles.bottomNavContainer}>
        
        <View style={styles.navItemContain}>
          <View style={styles.navItem}>
            <Ipod height={22} width={22}/>
          </View>
        </View>

        <View style={styles.navItemContain}>
          <View style={styles.navItem}>
            <Frame height={22} width={22}/>
          </View>
        </View>

        <View style={styles.navItemContain}>
          <View style={styles.navItem}>
            <Followers height={22} width={22}/>
          </View>
        </View>

        <View style={styles.navItemContain}>
          <View style={styles.navItem}>
            <Fx height={22} width={22}/>
          </View>
        </View>

      </View>
    </View>
  )
}

export default BottomNav

const styles = StyleSheet.create({

  container: {
    width: "100%",
    height: "100%",
    position: "absolute",
    bottom: 0,
    justifyContent: "flex-end"
  },

  bottomNavContainer: {
    backgroundColor: "#13161a",
    bottom: 0,
    minHeight: 85,
    flexDirection: "row",
    alignItems: "flex-start",
    borderTopColor: "#252b2eab",
    borderTopWidth: 1
  },

  navItemContain: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 10
  },

  navItem: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  }
})