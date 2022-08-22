import { useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, LogBox } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import MyStack from './Components/MyStack';
import { store } from './redux/store';

export default function App() {


  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

  }, []);



  return (
    <Provider store={store}>
        <MyStack />
    </Provider>
  );



}