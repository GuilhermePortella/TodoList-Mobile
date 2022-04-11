import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

// COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';


export default function Home() {
    const [filter, serFilter] = useState('today');

    return (
        <View style={styles.container}>
            <Text>Bem vindo a tela Home</Text>
            <Header showNotification={true} showBack={false} />

            <View style={styles.filter}>

                <TouchableOpacity onPress={() => serFilter('all')}>
                    <Text style={filter == 'all' ? styles.filterTextActived : styles.filterTextInative}>
                        Todos
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => serFilter('today')}>
                    <Text style={filter == 'today' ? styles.filterTextActived : styles.filterTextInative}>
                        Hoje
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => serFilter('week')}>
                    <Text style={filter == 'week' ? styles.filterTextActived : styles.filterTextInative}>
                        Semana
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => serFilter('month')}>
                    <Text style={filter == 'month' ? styles.filterTextActived : styles.filterTextInative}>
                        Mes
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => serFilter('year')}>
                    <Text style={filter == 'year' ? styles.filterTextActived : styles.filterTextInative}>
                        Ano
                    </Text>
                </TouchableOpacity>
            </View>

            <Footer icon={'add'} />
        </View>
    )
}