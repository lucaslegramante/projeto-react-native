import React from 'react';
import {View, Text, StyleSheet, Image, FlatList, SafeAreaView} from 'react-native';

import logo from '../../../assets/logo2.png';
import Despesas from './despesas'
import despesas from '../../mocks/despesas';


export default function DevFinance(){

    return (
        <SafeAreaView style={styles.container}>

          <View style={styles.containerLogo}> 
               <Image style={{width: '100%', flex: 1}} source={logo} animation="flipInY"  resizeMode="contain" />
           </View>

          <View style={styles.containerData}>

            <View style={styles.entradas}>
              <Text style={{fontWeight: 'bold'}}>Entradas</Text>
            </View>

            <View style={styles.saidas}>
              <Text style={{fontWeight: 'bold'}}>Saidas</Text>
            </View>

            <View
             style={styles.total}>
              <Text style={{fontWeight: 'bold'}}>Total</Text>
            </View>

            <Despesas {...despesas}
            style={styles.despesas}
            />

          </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#2D4A22'
  },
  containerLogo:{
    flex:1,
    backgroundColor:'#2D4A22'
  },
  containerData:{
    flex:4,
    backgroundColor:'#2D4A22'
  },
  entradas: {
    paddingVertical: 15,
    paddingLeft: 140,
    backgroundColor:'#FFF',
    //justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 20,
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 20,
    width: '100%',
    borderRadius:25

  },
  saidas: {
    paddingVertical: 15,
    paddingLeft: 140,
    backgroundColor:'#FFF',
    //justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 20,
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 20,
    width: '100%',
    borderRadius:25
  },
  total: {
    paddingVertical: 15,
    paddingLeft: 140,
    backgroundColor:'#FFF',
    //justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 20,
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 20,
    width: '100%',
    borderRadius:25,
    marginBottom: 10,
    marginTop: 20,
  },
  detail:{
    paddingVertical: 10,
    backgroundColor:'#FFF',
    justifyContent: 'center',
    display: 'grid',
    gridTemplateAreas: "'header' 'content' 'footer'",
    marginBottom: 10,
    marginTop: 20
  },
  despesas:{
    paddingVertical: 10,
    backgroundColor:'#FFF',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 20
  },

})