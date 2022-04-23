import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default function Detalhes({ item: {descricao, valor} }) {
    return <View style={styles.topo}>
        <Text style={styles.texto}>{ descricao }</Text>
        <Text style={styles.texto}>{ valor }</Text>
    </View>;
}

const styles = StyleSheet.create({
    topo: {
        flexDirection: "row",
        backgroundColor:'#FFF',
        marginBottom: 10,
        marginTop: 20, 
        borderRadius:25,
        alignItems: "center",
        justifyContent: 'center',
    },
    texto: {
        flexDirection: "row",
        marginLeft: 50,
        paddingVertical: 5,
        borderRadius:25,
        fontSize: 15,
        alignItems: "center",
        justifyContent: 'center',
    }
});