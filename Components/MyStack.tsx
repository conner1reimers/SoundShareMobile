import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator  } from "@react-navigation/native-stack";
import SingleSound from './SingleSound';
import Homepage from './Homepage';
import { Text } from 'react-native';

type Props = {}

const Stack = createNativeStackNavigator();


const MyStack = (props: Props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen
          name="Home"
          component={Homepage}
          options={{header: () => null}}

        />

        <Stack.Screen
          name="SingleSound"
          component={SingleSound}
          options={{header: () => null}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default MyStack;