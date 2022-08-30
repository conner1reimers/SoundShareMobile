import { useReducer, useCallback } from 'react';

enum InputActionKind {
  CHANGE = 'INPUT_CHANGE',
  SET = 'SET_DATA',
  CHECK = 'MATCH_CHECK',
  FOCUS = 'FOCUS',
}

interface InputAction {
  type: InputActionKind;
  value?: string;
  inputId?: string;
  isValid?: boolean;
  form?: any;
  isFocused?: boolean;
}
const formReducer = (state: any, action: any) => {
  switch (action.type) {
    case InputActionKind.CHANGE:
      let formIsValid: boolean | undefined = true;
      for (let inputId in state.inputs) {
        if (!state.inputs[inputId]) continue;
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      if (action.inputId) {
        return {
          ...state,
          inputs: {
            ...state.inputs,
            [action.inputId]: { ...[action.inputId], value: action.value, isValid: action.isValid },
          },
          isValid: formIsValid,
        };
      }
      break;
    case InputActionKind.SET:
      return action.form;
    case InputActionKind.CHECK:
      return {
        ...state,
        isMatchedPass: state.inputs.password.value === state.inputs.passwordConfirm.value,
      };
    case InputActionKind.FOCUS:
      return {
        ...state,
        isFocused: action.isFocused,
      };

    default:
      return state;
  }
};

export const useForm = (
  initialInputs: any,
  initialValidity: boolean
): [
  any,
  (id: string, value: string, isValid: boolean) => void,
  (id: string, isFocused: boolean) => void,
  (form: any) => void
] => {
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: initialInputs,
    isValid: initialValidity,
    isMatchedPass: false,
    isFocused: false,
  });

  const inputChangeHandler = useCallback((id: string, value: string, isValid: boolean): void => {
    dispatch({
      type: InputActionKind.CHANGE,
      inputId: id,
      value: value,
      isValid: isValid,
    });
  }, []);

  const formFocus = useCallback((id: string, isFocused: boolean): void => {
    dispatch({
      type: InputActionKind.FOCUS,
      inputId: id,
      isFocused,
    });
  }, []);

  const setData = useCallback((form: any) => {
    dispatch({
      type: InputActionKind.SET,
      form: form,
    });
  }, []);

  return [formState, inputChangeHandler, formFocus, setData];
};
