import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import MainOptions from './Components/Homepage/MainOptions';
import MainTxt from './Components/Homepage/MainTxt';
import RecentSounds from './Components/RecentSounds/RecentSounds';

export default function App() {



  return (
    <SafeAreaView style={styles.app}>

      
      <ScrollView style={styles.scroll}>
        <View style={styles.mainContainer}>
          <MainTxt/>
        </View>

        <View style={styles.optionsContainer}>
          <MainOptions/>
        </View>
        
        <View style={styles.recentSoundsContainer}>
          <RecentSounds/>
        </View>

      </ScrollView>

      <StatusBar style="light" />
      
    </SafeAreaView>
  );



}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  scroll: {
    width: "100%",
    height: "100%",
    // margin: 200
  },
  
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 300,
    // marginTop: 24,
    padding: 32
  },

  optionsContainer: {
    width: "80%",
    minHeight: 190,
    maxHeight: 250,
    paddingHorizontal: 24
  },

  recentSoundsContainer: {
    width: "100%"
  }
});
