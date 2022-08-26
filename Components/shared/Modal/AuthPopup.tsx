import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/store/reducers'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import BasicText from '../Text/BasicText'
import Bird from '../../../assets/images/bird.svg';
import { Platform } from 'expo-modules-core'
import { textPrimary } from '../../../util/style/variables'
import TapToCloseBackdrop from '../Backdrop/TapToCloseBackdrop'
import { openAuthModal, toggleAuthPopup } from '../../../redux/store/actions/uiActions'
import LoginWithBtn from './Shared/LoginWithBtn'


type Props = {}

const AuthPopup = (props: Props) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.ui.authPopup);
  const translation = useSharedValue(500);

  const animatedPopup = useAnimatedStyle(() => {
    return {
      transform: [
        { translateY: withSpring(translation.value, { damping: 60, mass: 2, stiffness: 600 }) }
      ]
    }
  })

  
  useEffect(() => {
    if (isOpen) {
      translation.value = 50;
    } else {
      translation.value = 500;
    }
  }, [isOpen]);


  return (
    <View style={styles.container} pointerEvents="box-none">
    
      <Animated.View pointerEvents="auto" style={[styles.popupContainer, animatedPopup]}>
        <View style={styles.authPopup}>
          
          <View style={styles.headerContainer}>
            <BasicText font="RobotoBlack">
              <Text style={styles.headerTxt}>Create an account to continue</Text>
            </BasicText>
          </View>

          <View style={styles.policyContainer}>
            <View style={styles.policy}>
              <BasicText font="RobotoLight" otherProps={{numberOfLines: 3}}>
                <>
                  <Text style={styles.normalTxt}>By continuing, you agree to our</Text>
                  <Text style={[styles.normalTxt, styles.linkTxt]}>{ " " }User Agreement{ " " }</Text>
                  <Text style={styles.normalTxt}>And agknowledge that you understand the</Text>
                  <Text style={[styles.normalTxt, styles.linkTxt]}>{ " " }Privacy Policy{ " " }</Text>
                </>
              </BasicText>
            </View>
          </View>

          

          <LoginWithBtn type="Google" />
          <LoginWithBtn type="Email" />
          

          <View style={[styles.policyContainer, { flex: 3 }]}>
            <View style={styles.loginPrompt}>
              <BasicText font="RobotoMedium">
                <>
                  <Text style={[styles.normalTxt, {fontSize: 17}]}>Already have an account?</Text>
                  <Text style={[styles.normalTxt, styles.linkTxt, {fontSize: 17}]}>{ " " }Login{ " " }</Text>
                </>
              </BasicText>
            </View>
          </View>


        </View>
      </Animated.View>
    
      {isOpen ? (
        <TapToCloseBackdrop onTap={() => dispatch(toggleAuthPopup())}/>
      ) : null}
    </View>
  )
}

export default AuthPopup

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
    zIndex: 2
  },

  popupContainer: {
    backgroundColor: "#2f323a",
    height: "50%",
    width: "100%",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 5
  },

  authPopup: {
    height: "90%",
    width: "90%",
  },

  headerContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1
  },
  headerTxt: {
    fontSize: Platform.OS === "ios" ? 26 : 20,
    color: textPrimary
  },

  policyContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 2,
    width: "100%",
    // backgroundColor: "red"
  },

  policy: {
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    flex: 1,
    // backgroundColor: "yellow"

  },

  normalTxt: {
    fontSize: 15,
    color: "#bfc5c790"
  },

  linkTxt: {
    color: "#3c88a7",
    textDecorationLine: "underline",
  },


  

  loginPrompt: {
    height: "50%",
    justifyContent: "flex-start"
  },

  innerButton: {

  },

  

})