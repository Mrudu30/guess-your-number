import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Title({children}){
    return(
        <Text style={styles.title}>{children}</Text>
    )
}

const styles = new StyleSheet.create({
    title:{
        fontSize: 18,
        fontFamily: 'open-sans-bold',
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
    }
})

export default Title;