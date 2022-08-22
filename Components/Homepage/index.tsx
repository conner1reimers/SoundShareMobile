import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import PageWrapper from '../PageWrapper';
import RecentSounds from '../RecentSounds/RecentSounds';
import MainOptions from './MainOptions';
import MainTxt from './MainTxt';


const Homepage: React.FC = ({ navigation }: any) => {
  return (
    <PageWrapper nav={navigation} >
      <ScrollView style={styles.scroll}>
        <View style={styles.mainContainer}>
          <MainTxt/>
        </View>

        <View style={styles.optionsContainer}>
          <MainOptions navigation={navigation} />
        </View>
        
        <View style={styles.recentSoundsContainer}>
          <RecentSounds nav={navigation}/>
        </View>

      </ScrollView>
      
    </PageWrapper>
  )
}

const styles = StyleSheet.create({
  scroll: {
    width: "95%",
    height: "100%",
  },
  
  mainContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: 300,
    padding: 32,
  },

  optionsContainer: {
    width: "100%",
    minHeight: 190,
    maxHeight: 250,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  recentSoundsContainer: {
    width: "100%",
    marginTop: 36
  }
});


export default Homepage;