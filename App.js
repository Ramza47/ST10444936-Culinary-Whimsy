import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from "./screens/HomePage";
import LoginPage  from "./screens/LoginPage";
import MenuScreen from "./screens/MenuScreen";


// Create a Stack Navigator

  const Stack = createNativeStackNavigator();

  export default function App () {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginPage">
        <Stack.Screen
        name="LoginPage"
        component={LoginPage} 
        options={{ headerShown: false }}
      />

        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{ title: 'Home page' }}
        />

        <Stack.Screen
          name="MenuScreen"
          component={MenuScreen}
          options={{ title: 'Menu' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// https://chatgpt.com/c/66f5e74b-eb2c-8013-ab03-a380f0ef6f1e