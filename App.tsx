import { useEffect } from 'react';
import { Home } from './src/screens/Home';
import * as SplashScreen from 'expo-splash-screen';
import { NunitoSans_400Regular, NunitoSans_700Bold, useFonts } from '@expo-google-fonts/nunito-sans';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/theme';

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
      <Home/>
    </ThemeProvider>
  );
}

