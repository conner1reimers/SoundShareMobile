import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import PageWrapper from '../PageWrapper'
import {fetchSingleSound} from '../../redux/store/actions';
import SingleSoundHeader from './Header';
import Description from './Description';
import SSButtons from './Buttons';
import SSTags from './Tags';


type Props = {
  nav: any
}

const SingleSound = (props: Props) => {
  const dispatch = useDispatch();
  const sound = useSelector((state: any) => state.singleSound.sound);

  // useEffect(() => {
  //   // dispatch(fetchSingleSound(253));
  //   dispatch(fetchSingleSound(248));
  //   // dispatch(fetchSingleSound(380));

  // }, []);


  


  return (
    <PageWrapper>
      <View style={styles.singleSound}>

        <ScrollView style={styles.container}>
          
          <SingleSoundHeader/>
          <Description/>

          {/* <View style={styles.tagBtnContainer}> */}
            <SSTags/>
            <SSButtons/>
          {/* </View> */}

        </ScrollView>


      </View>
    </PageWrapper>
  )
}

const styles = StyleSheet.create({
  singleSound: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },


  container: {
    width: "95%",
    height: "100%",
    marginTop: 28,
  },


  tagBtnContainer: {
    // alignSelf: 'flex-start',
  }
  


});



export default SingleSound