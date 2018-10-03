import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class BookMarks extends React.Component {

    static navigationOptions = {
        title: 'Bookmarks',
      };

    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={styles.container}>
                <TouchableOpacity
                style={styles.addButton}
                onPress={() => navigate('SearchScreen')}>
                    <Text style={{ color: 'white', fontSize: 20 }}>Add New Place</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default BookMarks;

const styles = StyleSheet.create({
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
    }
});