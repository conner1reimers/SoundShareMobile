import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { fetchRecentSounds } from '../../redux/store/actions'
import PageWrapper from '../PageWrapper'


type Props = {}

const SingleSound = (props: Props) => {
  return (
    <PageWrapper>
      <View style={styles.singleSound}>
        <View style={styles.container}>
          
        </View>
      </View>
    </PageWrapper>
  )
}

const styles = StyleSheet.create({
  singleSound: {
    width: "100%",
  },


  container: {

  }


});



export default SingleSound