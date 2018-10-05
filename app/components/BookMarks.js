import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import axios from 'axios';

import { MainStyle } from '../styles';



class BookMarks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookmarks: []
        }
    }
    static navigationOptions = {
        title: 'Bookmarks',
    };

    componentDidMount() {
        this.refresh();
    }

    refresh = async () => {
        let response = await axios.get('http://localhost:5000/')

        console.log(response.data)
        let bookmarks = response.data
        this.setState({ bookmarks })
    }

    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={MainStyle.container}>
                <FlatList
                    extraData={this.state}
                    data={this.state.bookmarks}
                    renderItem={({ item }) =>
                        <View>
                            <Text style={{textAlign: 'center', fontSize: 20, marginTop: 20}}>{item.title}</Text>
                            <Text style={{textAlign: 'center', marginBottom: 30}}>{item.address}</Text>
                        </View>
                    }
                    keyExtractor={(item, index) => index + ""}
                />
                <TouchableOpacity
                    style={MainStyle.addButton}
                    onPress={() => navigate('SearchScreen', { refresh: this.refresh })}>
                    <Text style={{ color: 'white', fontSize: 20 }}>Add New Place</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default BookMarks;

