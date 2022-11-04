import { StyleSheet, Text} from 'react-native';

const TextInfo = ({color}) => {

    return (
        <Text style={[styles.textInfo, {color: color}]}>Prueba basica</Text>
    )
}

export default TextInfo

const styles = StyleSheet.create({
    textInfo:{
        margin: 20, 
        fontSize: 30
    },
});