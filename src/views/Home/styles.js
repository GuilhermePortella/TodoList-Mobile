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
        height: 70,
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
    },
    content: {
        width: '100%',
        marginBottom: 70
    },
    title: {
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#20295f',
        alignItems: 'center',
        marginBottom: 8
    },
    titleText: {
        color: '#20295f',
        fontSize: 18,
        position: 'relative',
        top: 11,
        backgroundColor: '#FFF',
        paddingHorizontal: 10
    }
});

export default styles;