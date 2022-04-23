import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

class SomaEntradas extends React.Component {
    static protoTypes = {
        valor: PropTypes.number.isRequired,

    };
    valor = Array
    .from({ length: 5 })
    .map(() => 1 + Math.floor(10 * Math.random()));
    target = this.numerosAleatorios
    .slice(0, this.props.valor - 2)
    .reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual, 0);
    render() {
        return (
            <Text>{this.valor}</Text>
        );
    }
}  

export default SomaEntradas;