import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';

import * as SplashScreen from 'expo-splash-screen';
import { NunitoSans_400Regular, NunitoSans_700Bold, useFonts } from '@expo-google-fonts/nunito-sans';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/theme';

import { Home } from './src/screens/Home';
import { Statistics } from './src/screens/Statistics';
import { CreateMeal } from './src/screens/CreateMeal';
import { CreateMealFeedback } from './src/screens/CreateMealFeedback';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [loaded, error] = useFonts({
    NunitoSans_400Regular, NunitoSans_700Bold
  })

  useEffect(()=>{
    if(loaded || error) {
      SplashScreen.hideAsync()
    }
  },[loaded, error]);

  if(!loaded && !error){
    return null;
  };

  return (
    <ThemeProvider theme={theme}>
        <StatusBar/>
        <CreateMealFeedback/>
    </ThemeProvider>
  );
}

