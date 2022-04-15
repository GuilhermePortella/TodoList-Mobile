import react from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

import styles from './styles'

import iconDefault from '../../assets/default.png'

export default function TaskCard({done, title, when}){
    return (
        <TouchableOpacity style={[styles.card, done && styles.done]}>
            <View style={styles.cardLeft}>
                <Image source={iconDefault} style={styles.typeActive}/>
                <Text style={styles.cardTitle}>
                    {title}
                </Text>
            </View>

            <View style={styles.cardRight}>
                <Text style={styles.cardDate}>
                    {when}
                </Text>

                <Text style={styles.cardTime}>
                    {when}
                </Text>
                
            </View>
        </TouchableOpacity>
    )
}