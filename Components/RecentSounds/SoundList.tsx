import React, { useEffect } from 'react'
import { FlatList, ScrollView, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRecentSounds } from '../../redux/store/actions'
import SoundListItem from '../shared/SoundListItem'
// import {  } from 'react-native-gesture-handler';


type Props = {}

const SoundList = (props: any) => {
  const dispatch = useDispatch();
  const recentSounds = useSelector((state: any) => state.recentSounds.sounds);

  useEffect(() => {
    dispatch(fetchRecentSounds());
  }, [])

  return (
    <View style={styles.soundListContainer}>
      <View style={styles.recentSoundsTxt}>
        
        <Text style={styles.txt}>
          Sounds Uploaded Recently...
        </Text>
        <View style={{height: 10}}/>
      </View>


      <View style={styles.soundList}>
        
          {/* <ScrollView nestedScrollEnabled horizontal={true}> */}
          <FlatList
            data={recentSounds}
            nestedScrollEnabled
            renderItem={
              (itemData) => <SoundListItem navigation={props.navigation} sound={itemData.item} /> }

            keyExtractor={(item) => item.id}
            ListHeaderComponent={() => <View style={{ height: 10 }} />} 
            ListFooterComponent={()=><View style={{height: 10}}/>} 
          
          />
          {/* </ScrollView> */}
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  soundListContainer: {
    marginTop: 12  
  },

  soundList: {

  },

  recentSoundsTxt: {
    justifyContent: "flex-start",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#efede6"
  },

  txt: {
    fontWeight: "bold",
    color: "#efede6"
  }
});



export default SoundList;