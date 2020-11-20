import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {Provider} from 'react-native-sdr';

import ScreenOne from './Components/ScreenOne';
import ScreenTwo from './Components/ScreenTwo';

const Stack = createStackNavigator();

export default function App() {
  const ApiClient = {
    method: 'get',
    baseUrl: 'http://192.168.1.19:3000',
    sdrTypes: {
      Text: Text,
      View: View,
      Image: Image,
      Button: TouchableOpacity,
    },
  };

  return (
    <Provider client={ApiClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'SCREENONE'}>
          <Stack.Screen
            name="SCREENONE"
            options={{
              headerShown: false,
              ...TransitionPresets.SlideFromRightIOS,
            }}
            component={ScreenOne}
          />
          <Stack.Screen
            name="SCREENTWO"
            options={{
              headerShown: false,
              ...TransitionPresets.SlideFromRightIOS,
            }}
            component={ScreenTwo}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
