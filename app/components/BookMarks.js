import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';

import { MainStyle } from '../styles';

// import checkmark from '../../design/assets/Icon Checkmark@2x.png'

class BookMarks extends React.Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        title: 'Bookmarks',
      };

    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={MainStyle.container}>
            {/* <Image source={checkmark} /> */}
                <FlatList
                    data={this.props.bookmarks}
                    renderItem={({ item }) =>
                    <View>
                        <Text>{item.title}</Text>
                        <Text>{item.address}</Text>

                    </View>
                }
                keyExtractor={(item) => item.title}
                />
                <TouchableOpacity
                style={MainStyle.addButton}
                onPress={() => navigate('SearchScreen')}>
                    <Text style={{ color: 'white', fontSize: 20 }}>Add New Place</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default BookMarks;

