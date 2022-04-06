import React from 'react';
import {StyleSheet, Text, FlatList, View } from 'react-native';

import Detalhes from './componentes/detalhes';
import Topo from './componentes/topo';

export default function Despesas({ topo, detalhes}) {
    return <>
        <FlatList
          data={detalhes.list}
          keyExtractor={({descricao}) =>descricao}
          renderItem={ Detalhes }
          ListHeaderComponent={() => {
            return <>
                <Topo {...topo} />
            </>
        }}

        />

    </>;
}