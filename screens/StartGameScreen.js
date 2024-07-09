import {TextInput, View, StyleSheet, Alert} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import {useState} from 'react';
import Colors from '../constants/colors';

function StartGameScreen({onPickNumber}){
    const [inputValue, setInputValue] = useState("");

    const handleChange = (text) => {
        const numericValue = text.replace(/[^0-9]/g, "");
        setInputValue(numericValue);
    };

    const resetInput = () => {
        setInputValue('')
    }

    const handleConfirm = ()=> {
        // console.log('confirm given')
        const chosenNumber = parseInt(inputValue);
        if (isNaN(chosenNumber) || chosenNumber<=0 || chosenNumber>99){
            // show alert ....
            console.log(isNaN(chosenNumber) , chosenNumber<=0 , chosenNumber>99)
            Alert.alert('Invalid Number','Number has to be a number between 1 and 99.',[{text:'Okay',style:'destructive',onPress:resetInput}])
            return;
        }else{
            onPickNumber(chosenNumber);
        }
    }

    return(
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} maxLength={2} value={inputValue} keyboardType='number-pad' onChangeText={handleChange}  autoCapitalize='none' autoCorrect={false} />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetInput}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    );
}

const styles = new StyleSheet.create({
    inputContainer:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        marginTop: 100,
        marginBottom: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.25,
    },
    numberInput: {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsContainer:{
        flexDirection: 'row',
        width: '100%',
    },
    buttonContainer:{
        flex: 1,
    }
})

export default StartGameScreen;