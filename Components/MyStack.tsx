import { FC } from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator  } from "@react-navigation/native-stack";
import SingleSound from './SingleSound';
import Homepage from './Homepage';
import { Text } from 'react-native';


const Stack = createNativeStackNavigator();


const MyStack: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SingleSound">

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