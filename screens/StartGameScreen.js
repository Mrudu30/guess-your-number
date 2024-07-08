import {TextInput, View, StyleSheet} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import {useState} from 'react';

function StartGameScreen(){
    const [inputValue, setInputValue] = useState("");

    const handleChange = (text) => {
        const numericValue = text.replace(/[^0-9]/g, "");
        setInputValue(numericValue);
    };

    return(
        <View style={styles.inputContainer}>
            <TextInput style={styles.numberInput} maxLength={2} value={inputValue} inputMode='number-pad' onChangeText={handleChange}  autoCapitalize='none' autoCorrect={false} />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Confirm</PrimaryButton>
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
        backgroundColor: '#4e0329',
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
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        color: 'ddb52f',
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