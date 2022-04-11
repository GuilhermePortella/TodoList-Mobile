import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF7',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    filter:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        height: 250,
        alignItems: 'center'
    },
    filterTextActived: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#EE6B26'
    },
    filterTextInative: {
        color: '#20295f',
        fontWeight: 'bold',
        fontSize: 18,
        opacity: 0.5
    }
});

export default styles;