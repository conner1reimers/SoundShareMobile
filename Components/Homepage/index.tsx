import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import PageWrapper from '../PageWrapper';
import RecentSounds from '../RecentSounds/RecentSounds';
import MainOptions from './MainOptions';
import MainTxt from './MainTxt';
import SafeView from './SafeView';

const data = [
  
  {
    component: MainTxt,
    nav: false,
    key: "txt"
  },
  {
    component: MainOptions,
    nav: true,
    key: "options"
  },
  {
    component: RecentSounds,
    nav: true,
    key: "sounds"
  },

]

const Homepage: React.FC = ({ navigation }: any) => {

  
  return (
    <PageWrapper >
      <FlatList
        data={data}
        renderItem={({ item, index }) => <SafeView navigation={item.nav ? navigation : null} component={item.component} />}
        keyExtractor={item => item.key}
        nestedScrollEnabled
        style={styles.scroll}>
      </FlatList>
      
    </PageWrapper>
  )
}

const styles = StyleSheet.create({
  scroll: {
    width: "95%",
    height: "100%",
  },
  
});


export default Homepage;