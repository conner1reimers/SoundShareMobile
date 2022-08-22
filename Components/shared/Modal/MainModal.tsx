import { Animated, Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import Close from "../../../assets/images/close.svg";

type Props = {
  open: boolean,
  children: any,
  type: string
}

const MainModal = (props: Props) => {
  const dispatch = useDispatch();

  const close = () => {
    dispatch({type: `CLOSE_${props.type}_MODAL`})
  };


  return (
    <View style={styles.centeredView}>
      <Modal animationType='slide' visible={props.open} onRequestClose={close}>
        <View style={styles.modal}>
          
          <View style={styles.closeContainer}>
            <Pressable style={styles.close} onPress={close}>
              <Close height={16} width={16}/>
            </Pressable>
          </View>
        

          {props.children}
          
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
    marginTop: 22
  },
  

  modal: {
    height: "100%",
    width: "100%",
    backgroundColor: "#202424"
  },

  closeContainer: {
    width: "100%",
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    height: 34,
    paddingHorizontal: 24,
    position: "relative"
  },

  close: {
    backgroundColor: "#282e2e",
    padding: 6,
    borderRadius: 7,
    position: "absolute",
    top: 10,
    right: 10
  }
})