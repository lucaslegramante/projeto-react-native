import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Saidas({detalhes}){
    return (
        <View style={styles.saidas}>
          <Text style={styles.saidasText}>Saidas</Text>
          <Text style={styles.saidasTextValor}>-823.00</Text>
        </View>
    )

    
}

const styles = StyleSheet.create({
    saidas: {
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
  saidasText: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 100,
  },
  saidasTextValor: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 100,
    color: 'red'
  }
})