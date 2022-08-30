import { StyleSheet, Text, Image, View } from 'react-native';
import React, { useEffect, useReducer, useState } from 'react';
import { TextInput } from 'react-native-gesture-handler';
import { actionChannel } from 'redux-saga/effects';
import { textPrimary, textSecondary } from '../../../../util/style/variables';
import { validate } from '../../../../util/functions/validators';
import SmallSpinner from '../../../Lottie/SmallSpinner';

type Props = {
  placeholder?: string;
  ititValue?: string;
  onInput: (id: string, value: string, isValid: boolean) => void;
  id: string;
  onFocus?: (id: string) => void;
  onBlur?: (id?: string) => void;
  onChange?: (value: string) => void;
  formFocus?: (id: string, isFocused: boolean) => void;

  otherProps?: any;
  inputStyles?: any;
  validators?: any;
  keyboardType?: string;
  inputViewStyles?: any;
  asyncValidation?: any;
  validationLoading?: boolean;
  asyncValidationCondition?: any;
};

interface InputState {
  value: string;
  isValid: boolean;
  isFocused: boolean;
  touched: boolean;
}

enum ActionKinds {
  CHANGE = 'CHANGE_INPUT',
  TOUCH = 'TOUCH_INPUT',
  BLUR = 'BLUR_INPUT',
  FOCUS = 'FOCUS_INPUT',
  SET_VALID = 'SET_VALID',
  SET_TEXT = 'SET_TEXT',
  SET_TEXT_W_VALIDITY = 'SET_TEXT_W_VALIDITY',
}

interface InputActions {
  type: ActionKinds;
  value?: string;
}

const inputReducer = (state: InputState, action: any) => {
  switch (action.type) {
    case ActionKinds.CHANGE:
      return {
        ...state,
        value: action.value,
        touched: action.value.length > 0,
        isValid: action.validators ? validate(action.value, action.validators) : true,
      };
    case ActionKinds.FOCUS:
      return {
        ...state,
        isFocused: true,
      };
    case ActionKinds.BLUR:
      return {
        ...state,
        isFocused: false,
      };
    case ActionKinds.SET_VALID:
      return {
        ...state,
        isValid: action.valid,
      };
    case ActionKinds.SET_TEXT:
      return {
        ...state,
        touched: action.value.length > 0,
      };
    case ActionKinds.SET_TEXT_W_VALIDITY:
      return {
        ...state,
        value: action.value,
        isValid: action.valid,
        touched: action.value.length > 0,
      };
    default:
      return state;
  }
};

const Input: React.FC<Props> = ({
  placeholder,
  ititValue,
  onInput,
  id,
  onFocus,
  onBlur,
  formFocus,
  onChange,
  otherProps,
  inputStyles,
  keyboardType,
  inputViewStyles,
  validators,
  asyncValidation,
  asyncValidationCondition,
  validationLoading = false,
}) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: ititValue || '',
    isValid: false,
    isFocused: false,
    touched: false,
  });

  const asyncValidationHandler = async (text: string) => {
    let isValid = false;
    if (asyncValidationCondition) {
      if (asyncValidationCondition(text)) {
        isValid = await asyncValidation(text);
      }
      dispatch({
        type: ActionKinds.SET_TEXT_W_VALIDITY,
        valid: isValid,
        value: text,
      });
    } else {
      isValid = await asyncValidation(text);
      dispatch({
        type: ActionKinds.SET_TEXT_W_VALIDITY,
        valid: isValid,
        value: text,
      });
    }
  };

  const changeTextHandler = async (text: string) => {
    if (asyncValidation) {
      asyncValidationHandler(text);
    } else {
      dispatch({
        type: ActionKinds.CHANGE,
        value: text,
        validators,
      });
    }

    onChange && onChange(text);
  };

  const blurHandler = (e: any) => {
    formFocus && formFocus(id, false);
    dispatch({ type: ActionKinds.BLUR });
    onBlur && onBlur(id);
  };

  const focusHandler = (e: any) => {
    onFocus && onFocus(id);
    formFocus && formFocus(id, true);
    dispatch({ type: ActionKinds.FOCUS });
  };

  useEffect(() => {
    onInput(id, inputState.value, inputState.isValid);
  }, [inputState.value, inputState.isValid, id]);

  const style = inputStyles
    ? {
        ...styles.input,
        ...inputStyles,
      }
    : { ...styles.input };

  const viewStyle = inputViewStyles
    ? {
        ...styles.inputContainer,
        ...inputViewStyles,
      }
    : { ...styles.inputContainer };

  const keyboard = keyboardType ? keyboardType : 'default';

  const props = otherProps
    ? { ...otherProps, style, keyboardType: keyboard }
    : { style, keyboardType: keyboard };

  return (
    <View style={viewStyle}>
      <TextInput
        placeholderTextColor={textPrimary}
        placeholder={placeholder}
        onChangeText={changeTextHandler}
        onBlur={blurHandler}
        onFocus={focusHandler}
        {...props}
      />
      <View style={styles.invalidInputContainer}>
        <View style={styles.invalidInput}>
          {inputState.touched && validationLoading ? (
            <SmallSpinner />
          ) : inputState.touched && !inputState.isValid ? (
            <Image style={styles.img} source={require('../../../../assets/images/remove.png')} />
          ) : inputState.touched && inputState.isValid ? (
            <Image style={styles.img} source={require('../../../../assets/images/checkmark.png')} />
          ) : null}
        </View>
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    paddingVertical: 5,
    overflow: 'visible',
    shadowColor: '#000',
    flex: 1,
    marginVertical: 5,

    shadowOffset: {
      width: 0,
      height: 3,
    },

    zIndex: 10,
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
  },

  input: {
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 10,
    color: textPrimary,
  },

  invalidInputContainer: {
    position: 'absolute',
    right: 0,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '15%',
  },

  invalidInput: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },

  img: {
    height: 15,
    width: 15,
  },
});
