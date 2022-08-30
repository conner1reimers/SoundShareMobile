import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Bird from '../../../../assets/images/bird.svg';
import BasicText from '../../Text/BasicText';
import { useDispatch } from 'react-redux';
import { openAuthModal } from '../../../../redux/store/actions/uiActions';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../types/types';
import { darkColor, darkColor2, greenColor } from '../../../../util/style/variables';

type Props = {
  type: string;
  modal?: boolean;
};

const LoginWithBtn: React.FC<Props> = ({ type, modal }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.buttons}>
      <View style={[styles.buttonContainer, { width: modal ? '95%' : '80%' }]}>
        <Pressable
          style={styles.singleButton}
          onPress={() => {
            navigation.navigate('Auth', { screen: 'Signup' });
            // dispatch(openAuthModal());
          }}
        >
          <View style={styles.iconContainer}>
            <Bird height={20} width={20} />
          </View>

          <BasicText font="RobotoMedium">
            <Text>Continue with {type}</Text>
          </BasicText>
        </Pressable>
      </View>
    </View>
  );
};

export default LoginWithBtn;

const styles = StyleSheet.create({
  buttons: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
    maxHeight: 80,
    width: '100%',
  },

  buttonContainer: {
    flex: 1,
    backgroundColor: darkColor,
    marginTop: 10,
    maxHeight: 50,
    justifyContent: 'center',
    borderRadius: 100,
    borderWidth: 2,
    borderTopColor: darkColor2,
    borderBottomColor: darkColor2,
    borderLeftColor: darkColor2,
    borderRightColor: darkColor2,

    shadowOffset: {
      width: 4,
      height: 2,
    },
    shadowRadius: 10,
    shadowOpacity: 0.6,
    elevation: 10,
  },

  singleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '70%',
    paddingHorizontal: 20,
  },

  iconContainer: {
    backgroundColor: greenColor,
    padding: 6,
    borderRadius: 10,
    marginRight: 20,
  },
});
