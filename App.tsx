import { ThemeProvider } from 'styled-components/native';

import { Routes } from './src/routes';

import { NunitoSans_400Regular, NunitoSans_700Bold, useFonts } from '@expo-google-fonts/nunito-sans';

import theme from './src/theme'
import { Loading } from '@components/Loading';

export default function App() {
  const [ loaded ] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold
  })

  return (
    <ThemeProvider theme={theme}>
      { loaded ? 
        <Routes/> :
        <Loading/>
      }
    </ThemeProvider>
  );
}