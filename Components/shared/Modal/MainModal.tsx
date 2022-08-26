import { Animated, Image, Modal, Platform, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Close from "../../../assets/images/close.svg";
import { textPrimary } from '../../../util/style/variables';
import { setLogoOff, setLogoOn } from '../../../redux/store/actions/uiActions';
import BasicText from '../Text/BasicText';
import Animation from '../../Lottie/Lottie';

type Props = {
  open: boolean,
  children: any,
  type: string,
  rightCorner?: any
}

const MainModal = (props: Props) => {
  const dispatch = useDispatch();

  const close = () => {
    dispatch({ type: `CLOSE_${props.type}_MODAL` })
    
  };

  useEffect(() => {
    props.open && dispatch(setLogoOff());
    return (() => {
      dispatch(setLogoOn());
    })
  }, [])

  return (
    <View style={styles.centeredView}>
      <Modal animationType='slide' visible={props.open} onRequestClose={close}>
        <View style={styles.modal}>
          
          <View style={styles.closeContainer}>

            <View style={styles.press2CloseContainer}>
              <Pressable style={styles.close} onPress={close}>
                <Close fill={textPrimary} fillOpacity={.7} height={15} width={15}/>
              </Pressable>
            </View>

            <View style={styles.modalLogoFullContainer}>
              <View style={styles.modalLogoContainer}>
                
                <View style={styles.logoTextContainer}>
                  <BasicText font="RobotoBlack">
                    <Text style={{fontSize: Platform.OS === "ios" ? 24 : 18}}>SoundShare</Text>
                  </BasicText>
                </View>

                <View style={styles.logoContainer}>
                  <View style={styles.logo}>
                    <Animation modal/>
                  </View>
                </View>

              </View>
            </View>

            <View style={styles.optionalRightCorner}>
              <BasicText font="RobotoBlack">
                <Text>Login</Text>
              </BasicText>
              { props.rightCorner }
            </View>

          
          </View>
        

          <View style={styles.modalContent}>
            {props.children}
          </View>
          
          
        </View>
      </Modal>
    </View>
  )
}

export default MainModal

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },
  

  modal: {
    height: "100%",
    width: "100%",
    backgroundColor: "#202424",
  },

  closeContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: .5,
    paddingHorizontal: 24,
    position: "relative",
    marginTop: Platform.OS === "ios" ? 50 : 20,
    borderBottomWidth: .3,
    borderBottomColor: "#cdd6d923"
  },

  press2CloseContainer: {
    flex: 1,
    height: "100%",
    justifyContent: "center"

  },

  close: {
    backgroundColor: "#5a6d6d67",
    padding: Platform.OS === "ios" ? 3 : 3,
    borderRadius: 7,
    maxWidth: 25,
    justifyContent: "center",
    alignItems: "center",

  },

  modalLogoFullContainer: {
    flex: 4,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red"
  },

  modalLogoContainer: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    
  },

  optionalRightCorner: {
    // backgroundColor: "purple",
    flex: 1
  },


  logoTextContainer: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "purple"
    
  },

  logoContainer: {
    flex: 1,
    height: "100%",
    justifyContent: "center",
    alignItems: "flex-start",
    maxWidth: 60,
    right: "30%",
    top: -4,
    // backgroundColor:"pink"
  },

  logo: {
    // maxHeight: 30,
    maxWidth: 30
  },

  modalContent: {
    flex: 5,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    paddingHorizontal: 24,

    // backgroundColor: "red"
  }
})