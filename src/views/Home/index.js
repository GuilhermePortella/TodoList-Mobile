import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function Home(){
    return(
        <View style={styles.container}>
           <Text>Bem vindo a tela Home</Text> 
        </View>
    )
}