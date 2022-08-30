import { StyleSheet, Text, View, Pressable, Keyboard } from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import BasicText from '../../Text/BasicText';
import { textPrimary, textSecondary } from '../../../../util/style/variables';
import LoginWithBtn from '../Shared/LoginWithBtn';
import MainModal from '../MainModal';
import ModalHeader from './AuthHeader';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList, RootStackParamList } from '../../../../types/types';
import Input from '../Shared/Input';
import { useForm } from '../../../../util/hooks/useForm';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { scrollToAuth } from '../../../../redux/store/actions/uiActions';
import {
  validate,
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from '../../../../util/functions/validators';
import { useHttpClient } from '../../../../util/hooks/http-hook';

type Props = {
  type: string;
};

const AuthForm: React.FC<Props> = ({ type }) => {
  const { sendRequest, isLoading } = useHttpClient();
  const dispatch = useDispatch();
  const [inputFocus, setInputFocus] = useState<any>(null);
  const [keyboardIsOpen, setKeyboardStatus] = useState<boolean>(false);

  const [formState, inputChangeHandler, formFocus] = useForm(
    {
      email: {
        value: '',
        isValid: false,
        isFocused: false,
      },
      username: {
        value: '',
        isValid: false,
        isFocused: false,
      },
      password: {
        value: '',
        isValid: false,
        isFocused: false,
      },
    },
    false
  );

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardWillHide', () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const blurInput = (id?: string) => {
    if (!keyboardIsOpen) {
      dispatch(scrollToAuth(1));
      setTimeout(() => {
        setInputFocus(null);
      }, 400);
    }
  };

  const focusInput = (id: string) => {
    setInputFocus(true);
    setTimeout(() => {
      dispatch(scrollToAuth(id === 'email' ? 100 : id === 'username' ? 200 : 300));
    }, 200);
  };

  const inputStyles = {
    backgroundColor: '#030405',
    paddingVertical: 15,
    borderColor: '#0c1113',
    height: '100%',
  };

  const inputViewStyles = {
    backgroundColor: '#15191c',
    borderColor: '#0c121561',
    maxHeight: 60,
    paddingVertical: -15,
    width: '100%',
    justifyContent: 'center',
  };

  const inputProps = {
    onInput: inputChangeHandler,
    formFocus: formFocus,
    onFocus: focusInput,
    onBlur: blurInput,
    inputStyles,
    inputViewStyles,
  };

  const isOnSignup = type === 'Signup';

  const validateUsername = async (val: string) => {
    const response = await sendRequest(`/users/isUsernameTaken/${val}`);
    return !response.found;
  };

  const asyncValidationCondition = (val: string) => {
    return validate(val, VALIDATOR_MINLENGTH(6));
  };

  return (
    <>
      <View style={styles.formSection}>
        <View style={styles.formContainer}>
          {isOnSignup && (
            <Input
              id="email"
              placeholder="Email"
              keyboardType="email-address"
              validators={VALIDATOR_EMAIL()}
              {...inputProps}
            />
          )}
          <Input
            id="username"
            placeholder="Username"
            {...inputProps}
            asyncValidation={validateUsername}
            asyncValidationCondition={asyncValidationCondition}
            validationLoading={isLoading}
          />
          <Input {...inputProps} id="password" placeholder="Password" />
        </View>
      </View>
      {inputFocus != null && <View style={{ height: 400, width: '100%' }}></View>}
    </>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  formSection: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    minHeight: 250,
    width: '100%',
    overflow: 'visible',
    paddingHorizontal: 18,
  },

  formContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    overflow: 'visible',
  },
});
