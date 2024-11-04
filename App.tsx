import 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
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
      <GestureHandlerRootView style={{flex: 1}}>
        { loaded ? 
          <Routes/> :
          <Loading/>
        }
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}