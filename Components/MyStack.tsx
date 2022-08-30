import { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SingleSound from './Pages/SingleSound';
import Homepage from './Pages/Homepage';
import { Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Auth from './Pages/Auth/Auth';
import Upload from './Pages/Upload/Upload';
import AuthModal from './shared/Modal/Auth/AuthModal';
// import AuthModal from './shared/Modal/Auth/Login';

const Stack = createNativeStackNavigator();

const horizontalAnimation = {
  cardStyleInterpolator: ({ current, layouts }: any) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  },
};

const MyStack: FC = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Homepage}
            options={{
              header: () => null,
              animation: 'none',
            }}
          />

          <Stack.Screen
            name="SingleSound"
            component={SingleSound}
            options={{ header: () => null }}
          />

          <Stack.Screen
            name="Auth"
            component={AuthModal}
            options={{ header: () => null, animation: 'slide_from_bottom' }}
          />

          <Stack.Screen name="UploadSound" component={Upload} options={{ header: () => null }} />

          {/* <Stack.Screen
            name="Auth"
            component={Upload}
            options={{header: () => null}}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default MyStack;
