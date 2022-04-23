import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

export default function Topo({ titulo, titulo2, titulo3 }) {
    return <View style={styles.topo}>
        <Text style={styles.texto}>{titulo}</Text>
        <Text style={styles.texto}>{titulo2}</Text>
    </View>;
}

const styles = StyleSheet.create({
    topo: {
        flexDirection: "row",
        paddingVertical: 10,
        backgroundColor:'#FFF',
        alignItems: "center",
        justifyContent: 'center',
        marginBottom: 10,
        marginTop: 20,
        width: '100%',
        borderRadius:25
    },
    texto: {
        marginLeft: 50,
        paddingVertical: 8,
        paddingHorizontal:20,
        fontSize:17,
        alignItems: "center",
        justifyContent: 'center',
    }
});