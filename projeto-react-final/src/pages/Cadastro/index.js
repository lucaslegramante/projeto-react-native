import React from 'react';
import {View, Text, StyleSheet, Image, SafeAreaView,TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import logo from '../../../assets/logo2.png';
import FormCadastro from './componentes/formCadastro'


export default function Cadastro(){
  const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.container}>

          <View style={styles.containerLogo}> 
               <Image style={{width: '100%', flex: 1}} source={logo} animation="flipInY"  resizeMode="contain" />
          </View>

          <FormCadastro />

          <View style={styles.containerButton}>
              <TouchableOpacity onPress={() => navigation.navigate('DevFinance')} 
                  style={styles.button}>
                   <Text style={styles.buttonText}>Voltar</Text>
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
  button:{
    backgroundColor: '#DCDCDC',
    borderRadius:25
  },
  containerButton:{
    flex:0.2,
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