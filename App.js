import { useState } from 'react';
import { StyleSheet, View} from 'react-native';
import ButtonChange from './src/components/ButtonChange';
import TextInfo from './src/components/TextInfo'
 
export default function App() {
  const [color, setColor] = useState();

  return (
    <View style={styles.container}>
      <TextInfo color={color}/>
      <View style={styles.conteinerButtons}>
        <ButtonChange keyWord="rojo" setColor={setColor} />
        <ButtonChange keyWord="azul" setColor={setColor}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  conteinerButtons: {
    flexDirection: 'row',
  }
});
