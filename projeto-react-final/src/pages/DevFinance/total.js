import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Total({detalhes}){
  const somaTotal = () => {
    return detalhes.list.reduce((acc, cur) => {
      return acc + cur.valor;
    },0)
  }

    return (
        <View style={styles.total}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalTextValor}>{parseFloat(somaTotal()).toFixed(2)}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    total: {
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
  totalText: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    paddingLeft: 30,
  },
  totalTextValor: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    color: '#4169E1'
  }
})