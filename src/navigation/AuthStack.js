import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationName from '../contants/NavigationName';
import {ForgetPassword, Login, Singup} from '../screens';
const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={NavigationName.LOGIN} component={Login} />
      <Stack.Screen name={NavigationName.SIGNUP} component={Singup} />
      <Stack.Screen
        name={NavigationName.FORGET_PASSWORD}
        component={ForgetPassword}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
