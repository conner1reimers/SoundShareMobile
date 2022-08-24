import { useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, LogBox } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import MyStack from './Components/MyStack';
import { store } from './redux/store';
import 'react-native-gesture-handler';

const App = () => {



  return (
    <Provider store={store}>
        <MyStack />
    </Provider>
  );

}


export default App;