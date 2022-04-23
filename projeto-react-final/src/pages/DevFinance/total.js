import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Total({detalhes}){
    return (
        <View style={styles.total}>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalTextValor}>3777.00</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    total: {
    paddingVertical: 15,
   // paddingHorizontal: 100,
    backgroundColor:'#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 20,
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 20,
    width: '100%',
    borderRadius:25
  },
  totalText: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 100,
  },
  totalTextValor: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 100,
    color: 'blue'
  }
})