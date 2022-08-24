import { useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { FC, ReactChild } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/reducers';
import AuthModal from './shared/Modal/AuthModal';
import MainModal from './shared/Modal/MainModal';
import GlobalPlayer from './shared/GlobalPlayer/GlobalPlayer';
import SideDrawer from './shared/SideDrawer';
import BottomNav from './shared/Nav/BottomNav';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

interface Props {
  children: any,
}


const PageWrapper: React.FC<Props> = ({ children }) => {
  const authModalOpen = useSelector((state: RootState) => state.sideDrawer.authModalOpen);
  // const uploadModalOpen = useSelector((state: RootState) => state.u.authModalOpen);


  return (
    <SafeAreaView style={styles.app}>
      <SideDrawer />
      
      {children}
      <StatusBar style="light" />
      
      <GlobalPlayer/>

      <MainModal open={authModalOpen} type="AUTH">
        <AuthModal/>
      </MainModal>

      <BottomNav/>


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#1b1f1f",
    alignSelf: "flex-start",
    width: "100%"
  },
});


export default PageWrapper;