import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Entradas({detalhes}){
  const somaEntradas = () => {
    return detalhes.list.reduce((acc, cur) => {
      return acc + (cur.valor>0 ? cur.valor : 0);
    },0)
  }
  
    return (
        <View style={styles.entradas}>
          <Text style={styles.entradasText}>Entradas</Text>
          <Text style={styles.entradasTextValor}>{parseFloat(somaEntradas()).toFixed(2)}</Text>
        </View>
    )
}
//push or add na list quando for criar uma desespesas// legras do futuro

const styles = StyleSheet.create({
  entradas: {
    paddingVertical: 15,
    backgroundColor:'#FFF',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 20,
    flexDirection: "row",
    width: '100%',
    borderRadius:25,
  },
  entradasText: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    paddingLeft: 30,
  },
  entradasTextValor: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    color: 'green',
  }
})