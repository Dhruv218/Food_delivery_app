// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/dashboaard';
import Foodcart_description from './src/screens/Foodcart_detail';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="foodcart_description" component={Foodcart_description} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;