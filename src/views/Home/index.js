import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';

import styles from './styles';

// COMPONENTES
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TaskCard from '../../components/TaskCard';

//API
import api from '../../services/api';

export default function Home() {
    const [filter, serFilter] = useState('today');
    const [tasks, setTasks] = useState([]);
    const [load, setLoad] = useState(false);

    async function loadTasks() {
        setLoad(true)
        await api.get('/task/filter/all/11:11:11:11:11:11').then(response => {
            setTasks(response.data)
            setLoad(false);
        });
    }

    useEffect(() => {
        loadTasks();
    }, [])

    return (
        <View style={styles.container}>
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

            <View style={styles.title}>
                <Text style={styles.titleText}>
                    TAREFAS
                </Text>
            </View>

            <ScrollView style={styles.content} contentContainerStyle={{ alignItems: 'center' }}>
                {
                    load 
                    ? 
                    <ActivityIndicator color='#EE6B26' size={50}/>
                    : 
                    tasks.map(t => (
                        <TaskCard done={false} title={t.title} when={t.when} type={t.type}/>
                    ))
                }
            </ScrollView>
            <Footer icon={'add'} />
        </View>
    )

}