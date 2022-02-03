import React from "react";
import { } from 'react-native';
import { useFonts } from 'expo-font';
import LoginScreen from './screens/auth/LoginScreen';

export default function App() {

  const [loaded] = useFonts({
                OpenSans: require('./assets/fonts/OpenSans-Regular.ttf'),
                OpenSansBold: require('./assets/fonts/OpenSans-Bold.ttf'),
                OpenSansLight: require('./assets/fonts/OpenSans-Light.ttf'),
                OpenSansMedium: require('./assets/fonts/OpenSans-Medium.ttf'),
                OpenSansSemiBold: require('./assets/fonts/OpenSans-SemiBold.ttf'),
                OpenSansExtraBold: require('./assets/fonts/OpenSans-ExtraBold.ttf'),
            });

  if (!loaded) {
      return null;
  }

  return (
    <>
        <LoginScreen/>
    </>
  );
}

