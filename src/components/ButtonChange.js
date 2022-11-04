import { StyleSheet, TouchableHighlight, Text} from 'react-native';
import colors from '../data/info';
import showAlertText from '../utils/showAlertText'

const ButtonChange = ({ keyWord, setColor}) => {
    const {name, background} = colors[keyWord]

    return (
        <TouchableHighlight 
            style={{backgroundColor: background, margin: 10}} 
            onPress={() => { setColor(background); showAlertText(name)}}
        >
            <Text style={[styles.buttonView]} color="white">{name}</Text>
        </TouchableHighlight>
    )
}

export default ButtonChange

const styles = StyleSheet.create({
    buttonView:{
        margin: 5, 
        paddingVertical: 5, 
        paddingHorizontal: 30,
        fontSize: 20,
        color: 'white'
    },
});