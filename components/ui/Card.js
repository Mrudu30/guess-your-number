import { View, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function Card({children}){
    return(
        <View style={styles.card}>
            {children}
        </View>
    );
}

const styles = new StyleSheet.create({
    card:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
        marginTop: 36,
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
})

export default Card;