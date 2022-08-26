import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import PageWrapper from '../../PageWrapper';
import RecentSounds from '../../RecentSounds/RecentSounds';
import MainOptions from './MainOptions';
import MainTxt from './MainTxt';
import SafeView from './SafeView';
import useScroll from '../../../util/hooks/useScroll';


const data = [
  
  {
    component: MainTxt,
    key: "txt"
  },
  {
    component: MainOptions,
    nav: true,
    key: "options"
  },
  {
    component: RecentSounds,
    key: "sounds"
  },

]

const Homepage: React.FC = ({ navigation }: any) => {

  const scrollHandler = useScroll();
  
  return (
    <PageWrapper >
      <FlatList
        data={data}
        renderItem={({ item, index }) => <SafeView navigation={item.nav ? navigation : null} component={item.component} />}
        keyExtractor={item => item.key}
        nestedScrollEnabled
        onScroll={scrollHandler}
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