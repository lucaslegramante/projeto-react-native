import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function Detalhes({ item: {descricao, valor,data} }) {
    return <View style={styles.topo}>
        <Text style={styles.texto}>{ descricao }</Text>
        <Text style={styles.texto}>{ valor }</Text>
        <Text style={styles.texto}>{ data }</Text>
    </View>;
}

const styles = StyleSheet.create({
    topo: {
        flexDirection: "row",
        paddingVertical: '80',
        backgroundColor:'#FFF',
        alignItems: "center",
        justifyContent: 'center',
        marginBottom: 10,
        marginTop: 20, 
        borderRadius:25,
    },
    texto: {
        flexDirection: "row",
        marginLeft: 100,
        paddingVertical: 10,
        borderRadius:25
    }
});