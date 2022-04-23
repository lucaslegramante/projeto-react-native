import React from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView} from 'react-native';

import logo from '../../../assets/logo2.png';
import Despesas from './despesas'
import despesas from '../../mocks/despesas';
import Entradas from './entradas'
import Saidas from './saidas'
import Total from './total'



export default function DevFinance(){

    return (
        <SafeAreaView style={styles.container}>

          <View style={styles.containerLogo}> 
               <Image style={{width: '100%', flex: 1}} source={logo} animation="flipInY"  resizeMode="contain" />
           </View>

          <View style={styles.containerData}>

            <Entradas {...despesas}/>

            <Saidas {...despesas}/>

            <Total {...despesas}/>

            <Despesas {...despesas}
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
})