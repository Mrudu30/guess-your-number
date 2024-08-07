import StartGameScreen from './screens/StartGameScreen';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState, useEffect } from 'react';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [useNumber, setUseNumber] = useState()
  const [gameIsOver,setGameIsOver] = useState(false);
  const [gameRound,setGameRound] = useState(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded){
    return null
  }

  function pickedNumberHandler(pickedNumber){
    setUseNumber(pickedNumber)
  }

  function startNewGameHandler(){
    setUseNumber(null);
    setGameRound(0);
  }

  function gameOverHandler(){
    setGameIsOver(true);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>
  if (useNumber){
    screen = <GameScreen userNumber={useNumber} onGameOver={gameOverHandler}/>
  }
  if (gameIsOver && useNumber){
    screen = <GameOverScreen onStartNewGame={startNewGameHandler} roundsNumber={gameRound} userNumber={useNumber} />
  }

  return (
    <LinearGradient colors={[Colors.primary700,Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground source={require('./assets/images/background.png')} resizeMode='cover' style={styles.rootScreen} imageStyle={styles.backgroundImage}>
      <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = new StyleSheet.create({
  rootScreen:{
    flex: 1,
  },
  backgroundImage:{
    opacity: 0.30 ,
  }
})