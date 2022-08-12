import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'


const PageWrapper: React.FC = ({children}: any) => {
  return (
    
    <SafeAreaView style={styles.app}>
      {children}
      <StatusBar style="light" />
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