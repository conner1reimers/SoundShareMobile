import { FC } from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator  } from "@react-navigation/native-stack";
import SingleSound from './Pages/SingleSound';
import Homepage from './Pages/Homepage';
import { Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Auth from './Pages/Auth/Auth';
import Upload from './Pages/Upload/Upload';


const Stack = createNativeStackNavigator();


const MyStack: FC = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">

          <Stack.Screen
            name="Home"
            component={Homepage}
            options={{
              header: () => null,
              animation: "none"
            }}

          />

          <Stack.Screen
            name="SingleSound"
            component={SingleSound}
            options={{header: () => null}}
          />

          <Stack.Screen
            name="Auth"
            component={Auth}
            options={{header: () => null}}
          />


          <Stack.Screen
            name="UploadSound"
            component={Upload}
            options={{header: () => null}}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}


export default MyStack;