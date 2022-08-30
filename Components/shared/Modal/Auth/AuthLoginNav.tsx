import { StyleSheet, Text, View, Pressable, Keyboard } from 'react-native';
import React from 'react';
import BasicText from '../../Text/BasicText';
import { textSecondary } from '../../../../util/style/variables';
import MainModal from '../MainModal';
import ModalHeader from './AuthHeader';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList, RootStackParamList } from '../../../../types/types';
import AuthForm from './AuthForm';

type Props = {
  type: 'Login' | 'Signup';
};

const AuthLoginNav: React.FC<Props> = ({ type }) => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();

  return (
    <Pressable onPress={() => navigation.navigate(type, {})}>
      <BasicText font="RobotoBlack">
        <Text>{type}</Text>
      </BasicText>
    </Pressable>
  );
};

export default AuthLoginNav;

const styles = StyleSheet.create({});
