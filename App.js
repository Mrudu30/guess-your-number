import StartGameScreen from './screens/StartGameScreen';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.rootScreen}>
      <StartGameScreen/>
    </View>
  );
}

const styles = new StyleSheet.create({
  rootScreen:{
    flex: 1,
    backgroundColor: '#ddb52f'
  }
})