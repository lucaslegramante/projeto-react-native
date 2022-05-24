import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function Detalhes({ item: {descricao, valor} }) {
    return <View style={styles.topo}>
        <Text style={styles.texto}>{ descricao }</Text>
        <Text style={styles.texto2}>{ parseFloat(valor).toFixed(2) }</Text>
    </View>;
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
        fontSize:13,
        paddingLeft: 30,
    },
    texto2: {
        flex: 1,
        paddingVertical: 5,
        fontSize:13,
    }
});