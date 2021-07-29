import React from 'react';
import MarketPage from './assets/screens/market/Index.js';
import { useFonts } from 'expo-font'

export default function App() {
  const [loaded] = useFonts({
    Montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
    MontserratMedium: require('./assets/fonts/Montserrat-Medium.ttf'),
    MontserratSemiBold: require('./assets/fonts/Montserrat-SemiBold.ttf'),
    MontserratBold: require('./assets/fonts/Montserrat-Bold.ttf')
  })

  if(!loaded){
    return null
  }
  
  return (
    <MarketPage/>
  );
}