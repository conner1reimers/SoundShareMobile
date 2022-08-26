import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BasicText from '../Text/BasicText'
import { textPrimary, textSecondary } from '../../../util/style/variables'
import LoginWithBtn from './Shared/LoginWithBtn'

type Props = {}

const AuthModal = (props: Props) => {
  return (
    <View style={styles.authmodalContainer}>
      
      <View style={styles.headContainer}>

        <View style={styles.header}>
          <BasicText font="RobotoBlack">
            <Text style={{fontSize: 38}}>Welcome to SoundShare</Text>
          </BasicText>
        </View>

        <View style={styles.policy}>
          <BasicText font="RobotoMedium" otherProps={{numberOfLines: 3}}>
            <>
              <Text style={styles.normalTxt}>By continuing, you agree to our</Text>
              <Text style={[styles.normalTxt, styles.linkTxt]}>{ " " }User Agreement{ " " }</Text>
              <Text style={styles.normalTxt}>And agknowledge that you understand the</Text>
              <Text style={[styles.normalTxt, styles.linkTxt]}>{ " " }Privacy Policy{ " " }</Text>
            </>
          </BasicText>
        </View>
      </View>

      <View style={styles.buttons}>
        <View style={{width: "100%", alignItems: "flex-start"}}>
          <LoginWithBtn modal type="Google" />
          <LoginWithBtn modal type="Email"/>
        </View>
      </View>

      <View style={styles.borderSection}>
        <View style={{ borderTopWidth: 1, borderTopColor: "#ebf9faa8", flex: 2 }} />
        
        <View style={{flex: 1, justifyContent: "flex-start", top: -5, alignItems: "center"}}>
          <BasicText>
            <Text>OR</Text>
          </BasicText>
        </View>
        <View style={{borderTopWidth: 1, borderTopColor: "#ebf9faa8", flex: 2}}/>

      </View>

      <View style={styles.formSection}>

      </View>
      
    </View>
  )
}

export default AuthModal

const styles = StyleSheet.create({
  authmodalContainer: {
    flex: 1,
    width: "100%"
  },

  header: {
    flex: 1
  },

  buttons: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "row",
    alignSelf: "flex-start",
  },

  headContainer: {
    flex: 1,
    paddingTop: 20
  },

  policy: {
    width: "90%",
    paddingHorizontal: 8,
    flex: 3
  },

  normalTxt: {
    fontSize: 17,
    color: textSecondary
  },

  linkTxt: {
    color: "#3c88a7",
    textDecorationLine: "underline",
  },

  borderSection: {
    flex: .2,
    flexDirection: "row",
    width: "100%",
    // backgroundColor:"red"
  },

  formSection: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  }
})