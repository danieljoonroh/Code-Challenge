import { StyleSheet } from 'react-native';

export const MainStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    addButton: {
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
        height: 55,
        borderRadius: 20,
        position: 'absolute',
        bottom: 20
    },
    bookmark: {
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
        height: 55,
        borderRadius: 20,
        position: 'absolute',
        bottom: 200
    },
    bookmarked: {
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
        height: 55,
        borderRadius: 20,
        position: 'absolute',
        bottom: 200
    },
    checkmark: {
        position: 'absolute',
        bottom: 23,
        left: 100
    }
})