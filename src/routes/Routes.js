import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomTabStack, AuthStack} from '../navigation';
import NavigationName from '../contants/NavigationName';
import {
  Provider as PaperProvider,
  DefaultTheme,
  configureFonts,
} from 'react-native-paper';

const Stack = createStackNavigator();
const Routes = () => {
  const fontsConfig = {
    ios: {
      regular: {
        fontFamily: 'Electrolux Sans',
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: 'Electrolux Sans Semibold',
        fontWeight: 'normal',
      },
      light: {
        fontFamily: 'Electrolux Sans Light',
        fontWeight: 'normal',
      },
      thin: {
        fontFamily: 'Electrolux Sans Thin',
        fontWeight: 'normal',
      },
    },
    android: {
      regular: {
        fontFamily: 'Electrolux Sans',
        fontWeight: 'normal',
      },
      medium: {
        fontFamily: 'Electrolux Sans Semibold',
        fontWeight: 'normal',
      },
      light: {
        fontFamily: 'Electrolux Sans Light',
        fontWeight: 'normal',
      },
      thin: {
        fontFamily: 'Electrolux Sans Thin',
        fontWeight: 'normal',
      },
    },
  };
  const theme = {
    ...DefaultTheme,
    colors: {...DefaultTheme.colors, primary: 'rgba(254, 138, 12, 1)'},
    fonts: configureFonts({config: fontsConfig}),
  };
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen
            name={NavigationName.BOTTOM_TAB}
            component={BottomTabStack}
          />
          <Stack.Screen
            name={NavigationName.AUTH_STACK}
            component={AuthStack}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default Routes;
