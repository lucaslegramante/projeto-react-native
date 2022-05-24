import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Saidas({detalhes}){
  const somaSaidas = () => {
    return detalhes.list.reduce((acc, cur) => {
      return acc + (cur.valor<0 ? cur.valor : 0);
    },0)
  }
    return (
        <View style={styles.saidas}>
          <Text style={styles.saidasText}>Saidas</Text>
          <Text style={styles.saidasTextValor}>{parseFloat(somaSaidas()).toFixed(2)}</Text>
        </View>
    )

    
}

const styles = StyleSheet.create({
    saidas: {
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
  saidasText: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    paddingLeft: 30,
  },
  saidasTextValor: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    color: '#B22222'
  }
})