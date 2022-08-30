import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import BasicText from '../../Text/BasicText';
import { textPrimary, textSecondary } from '../../../../util/style/variables';
import LoginWithBtn from '../Shared/LoginWithBtn';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthLogin from './AuthLogin';

const Tab = createNativeStackNavigator();

const AuthModal = () => {
  return (
    <Tab.Navigator initialRouteName="Signup">
      <Tab.Screen name="Login" component={AuthLogin} options={{ header: () => null }} />
      <Tab.Screen name="Signup" component={AuthLogin} options={{ header: () => null }} />
    </Tab.Navigator>
  );
};

export default AuthModal;
