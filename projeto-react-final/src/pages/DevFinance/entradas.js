import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Entradas({detalhes}){
    return (
        <View style={styles.entradas}>
          <Text style={styles.entradasText}>Entradas</Text>
          <Text style={styles.entradasTextValor}>4600.00</Text>
        </View>
    )

    
}

const styles = StyleSheet.create({
  entradas: {
    paddingVertical: 15,
   // paddingHorizontal: 100,
    backgroundColor:'#FFF',
    //justifyContent: 'center',
    //alignItems: 'center',
    marginBottom: 10,
    marginTop: 20,
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 20,
    width: '100%',
    borderRadius:25
  },
  entradasText: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 100,
  },
  entradasTextValor: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 100,
    color: 'green'
  }
})