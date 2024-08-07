import { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, Alert } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import NumberContainer from '../components/game/NumberContainer';
import Title from '../components/ui/Title';
import InstructionText from '../components/ui/InstructionText';
import Card from '../components/ui/Card';
import { FontAwesome } from '@expo/vector-icons';
import GuessLogItem from '../components/game/GuessLogItem';

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundry = 1;
let maxBoundry = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  const guessRoundsListLength = guessRounds.length;

  useEffect(()=>{
    if(currentGuess===userNumber){
        onGameOver(guessRounds.length);
    }
  },[currentGuess, userNumber, onGameOver])

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(direction){
    if((direction==='lower' && currentGuess < userNumber) || (direction==='greater' && currentGuess>userNumber)){
      Alert.alert("Don't lie!!","You Know it's wrong...",[{text:'Sorry!', style:'cancel'}]);
      return;
    }
    if((direction==='lower')){
      maxBoundry = currentGuess;
    }else{
      minBoundry = currentGuess + 1;
    }
    const newRandNumber = generateRandomBetween(minBoundry,maxBoundry,currentGuess);
    setCurrentGuess(newRandNumber);
    setGuessRounds((prevGuessRounds) => [newRandNumber, ...prevGuessRounds]);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.titleContainer}>
        <Title>Opponent's Guess</Title>
      </View>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText>Higher or lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this,'greater')}>
              <FontAwesome name="plus" size={24} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this,'lower' )}>
              <FontAwesome name="minus" size={24} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
        <FlatList data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    marginTop: 20,
  },
  buttonsContainer:{
    flexDirection: 'row',
    marginTop: 12,
    width: '100%',
  },
  buttonContainer:{
    flex: 1,
  },
  titleContainer:{
    paddingHorizontal: 30,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});