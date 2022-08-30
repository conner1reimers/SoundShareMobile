import { useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { FC, ReactChild } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/reducers';
import AuthModal from './shared/Modal/Auth/AuthModal';
import MainModal from './shared/Modal/MainModal';
import GlobalPlayer from './shared/GlobalPlayer/GlobalPlayer';
import SideDrawer from './shared/SideDrawer';
import BottomNav from './shared/Nav/BottomNav';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AuthPopup from './shared/Modal/Auth/AuthPopup';
import { darkColor, darkColor2 } from '../util/style/variables';

interface Props {
  children: any;
}

const PageWrapper: React.FC<Props> = ({ children }) => {
  const authModalOpen = useSelector((state: RootState) => state.sideDrawer.authModalOpen);
  // const uploadModalOpen = useSelector((state: RootState) => state.u.authModalOpen);

  return (
    <SafeAreaView style={styles.app}>
      <StatusBar style="light" />
      <SideDrawer />

      {children}

      <GlobalPlayer />

      <AuthPopup />

      <BottomNav />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: darkColor,
    alignSelf: 'flex-start',
    width: '100%',
  },
});

export default PageWrapper;
