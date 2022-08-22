import { useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { FC, ReactChild } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import GlobalPlayer from './shared/GlobalPlayer/GlobalPlayer';
import SideDrawer from './shared/SideDrawer';

interface Props {
  children: ReactChild,
  nav: any
}

const PageWrapper: FC<Props> = ({children, nav}) => {

  return (
    
    <SafeAreaView style={styles.app}>
      <SideDrawer/>
      {children}
      <StatusBar style="light" />
      <GlobalPlayer/>
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