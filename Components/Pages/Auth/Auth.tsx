import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import PageWrapper from '../../PageWrapper'
import { useDispatch } from 'react-redux'
import { setLogoOff, setLogoOn } from '../../../redux/store/actions/uiActions'

type Props = {}

const Auth = (props: Props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLogoOff());
    return (() => {
      dispatch(setLogoOn());
    })
  }, [])
  return (
    <PageWrapper>
      <View style={styles.authContainer}>
        
      </View>
    </PageWrapper>
  )
}

export default Auth

const styles = StyleSheet.create({
  authContainer: {
    height: "90%",
    width: "95%",
    backgroundColor: "yellow"
  }
})
