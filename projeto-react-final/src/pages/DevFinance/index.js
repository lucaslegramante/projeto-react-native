import React from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView,TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'

import logo from '../../../assets/logo2.png';
import Despesas from './despesas'
import despesas from '../../mocks/despesas';
import Entradas from './entradas'
import Saidas from './saidas'
import Total from './total'
import Topo from './componentes/topo'



export default function DevFinance(){
  const navigation = useNavigation()

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

          <View style={styles.containerButton}>
              <TouchableOpacity onPress={() => navigation.navigate('Welcome')} 
                  style={styles.button}>
                   <Text style={styles.buttonText}>Voltar</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={() => navigation.navigate('Cadastro')} 
                  style={styles.button}>
                   <Text style={styles.buttonText}>Cadastrar nova movimentação</Text>
               </TouchableOpacity>
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
  button:{
    backgroundColor: '#FFF',
    borderRadius:25,
    borderWidth: 1,
  },
  containerButton:{
    flex:0.3,
    flexDirection: "row",
    width:"100%",
    alignItems: "center",
    justifyContent: 'space-between',
  },
  buttonText: {
    fontSize: 15,
    padding:7,
  }
})