import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function FormCadastro() {
    return (
        <View style={styles.container}>
            <View style={styles.texto}>
                <Text style={styles.texto}> Formulario de Cadastro de Movimentações</Text>
            </View>
            
            <View style={styles.viewInput}>
                <Text style={styles.textInput1}>Descrição</Text>
                <TextInput style={styles.input}/>
            </View>

            <View style={styles.viewInput}>
                <Text style={styles.textInput1}>Valor</Text>
                <TextInput style={styles.input2}/>
            </View>

            <View style={styles.containerButton}>
              <TouchableOpacity onPress={() => Alert.alert('oieoieoie')} 
                  style={styles.button}>
                   <Text style={styles.buttonText}>Cadastrar</Text>
               </TouchableOpacity>
          </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 8,
        backgroundColor:'#FFF',
        width: '100%',
        borderRadius:25,
        justifyContent: 'space-between',
    },
    input: {
        fontSize:17,
        backgroundColor: '#DCDCDC',
        borderRadius:25,
        width: '50%'
    },
    input2: {
        fontSize:17,
        backgroundColor: '#DCDCDC',
        borderRadius:25,
        width: '50%'
    },
    textInput1:{
       fontSize:15,
       width: '22%', 
       paddingLeft: 14,

    },
    viewInput:{
        flex:0.1,
        flexDirection: "row",
        //justifyContent: "center",
        
    },
    texto:{
        alignItems: "center",
        fontSize: 18,
        fontWeight: "bold",
        justifyContent: "center",
    },
    containerButton:{
        alignItems: "center",
    },
    button:{
        position: 'absolute',
        backgroundColor:'#2D4A22',
        borderRadius: 50,
        paddingVertical: 8,
        width: '50%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    },
});