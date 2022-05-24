import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

export default function Topo({titulo,titulo2}) {
    return (
        <View style={styles.topo}>
            <Text style={styles.texto}>{titulo}</Text>
            <Text style={styles.texto2}>{titulo2}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    topo: {
        flexDirection: "row",
        paddingVertical: 8,
        backgroundColor:'#FFF',
        marginTop: 10,
        width: '100%',
        borderRadius:25,
        alignItems: 'center',
    },
    texto: {
        flex: 1,
        paddingVertical: 5,
        fontSize:17,
        paddingLeft: 30,
        fontWeight: 'bold'
    },
    texto2: {
        flex: 1,
        paddingVertical: 5,
        fontSize:17,
        fontWeight: 'bold'
    }
});