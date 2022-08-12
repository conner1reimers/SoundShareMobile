import { useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, LogBox } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import Homepage from './Components/Homepage';
import MainOptions from './Components/Homepage/MainOptions';
import MainTxt from './Components/Homepage/MainTxt';
import MyStack from './Components/MyStack';
import RecentSounds from './Components/RecentSounds/RecentSounds';
import { store } from './redux/store';

export default function App() {


  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

  }, []);



  return (
    <Provider store={store}>
      {/* <SafeAreaView style={styles.app}>
        <MyStack />
      </SafeAreaView> */}
        <MyStack />

    </Provider>
  );



}