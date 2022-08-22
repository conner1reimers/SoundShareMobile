import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/reducers';
import AuthModal from './shared/Modal/AuthModal';
import MainModal from './shared/Modal/MainModal';


const PageWrapper: React.FC = ({ children }: any) => {
  const authModalOpen = useSelector((state: RootState) => state.sideDrawer.authModalOpen);
  // const uploadModalOpen = useSelector((state: RootState) => state.u.authModalOpen);


  return (
    
    <SafeAreaView style={styles.app}>
      {children}
      <StatusBar style="light" />
      
      <MainModal open={authModalOpen} type="AUTH">
        <AuthModal/>
      </MainModal>
      
      {/* <MainModal open={modalOpen}>
        <AuthModal/>
      </MainModal> */}

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#1b1f1f"
  },
});


export default PageWrapper;