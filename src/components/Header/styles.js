import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 70,
        backgroundColor: '#20295F',
        borderBottomWidth: 5,
        borderBottomColor: '#EE6B26',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: '89%'
    },
    logo: {
        width: 100,
        height: 30
    },
    notification: {
        position: 'absolute',
        right: 20,
    },
    notificationImage: {
        width: 30,
        height: 35
    },
    circle: {
        width: 25,
        height: 25,
        backgroundColor: '#FFF',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 13,
        bottom: 13
    },
    leftIcons: {
        position: 'absolute',
        left: 20,
    },
    leftIconsImage: {
        width: 30,
        height: 30
    }
});

export default styles;