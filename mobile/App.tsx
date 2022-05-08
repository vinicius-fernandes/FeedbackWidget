import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from './src/theme';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Inter_400Regular,Inter_500Medium  } from '@expo-google-fonts/inter';
import { StatusBar } from 'expo-status-bar';
import Widget from './src/components/Widget';
export default function App() {
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = useFonts({
    Inter_400Regular,Inter_500Medium
  });



  if (!fontsLoaded) {
    return null;
  }

  SplashScreen.hideAsync();


  return (
    <View style={styles.container}>
      <StatusBar
      style="light"
      backgroundColor='transparent'
      translucent/>


      <Widget/> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,

  },
});
