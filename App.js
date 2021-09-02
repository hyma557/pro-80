import 'react-native-gesture-handler';
import React from 'react';
import SpaceCraft  from './screens/SpaceCrafts';
import DailyPic from './screens/DailyPic';
import StarMap from './screens/StarMap';
import Home from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false}}>
        <Stack.Screen name="SpaceCraft" component={SpaceCraft} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DailyPic" component={DailyPic} />
        <Stack.Screen name="StarMap" component={StarMap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
