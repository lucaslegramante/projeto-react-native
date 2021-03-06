import React from 'react';
import {
    View, 
    Text, 
    StyleSheet,
    Image, 
    TouchableOpacity
} from 'react-native';
import logo from '../../../assets/logo2.png'
import * as Animatable from 'react-native-animatable'
import {useNavigation} from '@react-navigation/native'

export default function Welcome(){
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
           <View style={styles.containerLogo}> 
               <Image style={{width: '100%', flex:2}} source={logo}  resizeMode="contain" />
           </View>
           <Animatable.View delay={600} animation ="fadeInUp" style={styles.containerForm}>
               <Text style={styles.title}>Seja bem vindo!</Text>
               <Text style={styles.text}>Clique no botão e organize suas finanças</Text>
               
               <TouchableOpacity onPress={() => navigation.navigate('DevFinance')} 
               style={styles.button}>
                   <Text style={styles.buttonText}>Acessar</Text>
               </TouchableOpacity>
            </Animatable.View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#2D4A22'
    },
    containerLogo: {
        flex:2,
        backgroundColor:'#2D4A22',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm: {
        flex:1,
        backgroundColor:'#FFF',
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title: {
        fontSize:30,
        fontWeight:'bold',
        marginTop:28,
        marginBottom:12
    },
    text: {
        color: '#a1a1a1',
        fontSize:18,
    },
    button:{
        position: 'absolute',
        backgroundColor:'#2D4A22',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    }
})