import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Ipod from "../../../assets/images/ipod.svg";
import Frame from "../../../assets/images/frame.svg";
import Followers from "../../../assets/images/followers.svg";
import Fx from "../../../assets/images/fx.svg";
import Bird from "../../../assets/images/bird.svg";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store/reducers';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../types/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { toggleAuthPopup } from '../../../redux/store/actions/uiActions';



type Props = {}

const BottomNav = (props: Props) => {
  const isLoggedIn = useSelector((state: RootState) => state.user.isLoggedIn);
  const userId = useSelector((state: RootState) => state.user.userId);
  const dispatch = useDispatch();

  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const uploadSound = () => {
    if (isLoggedIn) navigation.navigate("UploadSound", {});
    else dispatch(toggleAuthPopup());
  }

  const goToUser = () => {
    if (isLoggedIn) navigation.navigate("UserPage", {id: userId});
    else dispatch(toggleAuthPopup());
  }

  return (
    <View pointerEvents="box-none" style={styles.container}>
      <View style={styles.bottomNavContainer}>
        
        <Pressable style={styles.navItemContain} onPress={goToUser}>
          <View style={styles.navItem}>
            <Ipod height={22} width={22}/>
          </View>
        </Pressable>

        <Pressable style={styles.navItemContain} onPress={goToUser}>
          <View style={styles.navItem}>
            <Frame height={22} width={22}/>
          </View>
        </Pressable>

        <Pressable style={styles.navItemContain} onPress={uploadSound}>
            <View style={styles.navItem}>
              <Bird height={22} width={22}/>
            </View>
        </Pressable>

        <Pressable style={styles.navItemContain} onPress={goToUser}>
            <View style={styles.navItem}>
              <Followers height={22} width={22}/>
            </View>
        </Pressable>

        <Pressable style={styles.navItemContain} onPress={goToUser}>
          <View style={styles.navItem}>
            <Fx height={22} width={22}/>
          </View>
        </Pressable>

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
    justifyContent: "flex-end",
    zIndex: 1

  },

  bottomNavContainer: {
    backgroundColor: "#13161a",
    bottom: 0,
    minHeight: 85,
    flexDirection: "row",
    alignItems: "flex-start",
    borderTopColor: "#252b2eab",
    borderTopWidth: 1,
    zIndex: 3
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