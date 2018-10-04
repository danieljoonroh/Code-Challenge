import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import { MainStyle } from '../styles';

// var checkmark = require('../../design/assets/Icon Checkmark@2x.png');

class PlaceScreen extends React.Component {
    state = {
        bookmarkValue: false,
        bookmarks: []
    }


    bookmark = ({title, address}) => {
        let newArr = [...this.state.bookmarks];
        newArr.push({title, address});
        this.setState({
            bookmarks: newArr,
            bookmarkValue: true
        })
    }

    render() {
        let { title, address } = this.props.navigation.getParam('imageTitleAddress', { title: "Default" })
    
        return (
            <View style={MainStyle.container}>
                <Text style={{ fontSize: 25, marginBottom: 10 }}>{title}</Text>
                <Text style={{ fontSize: 15, textAlign: 'center' }}>{address}</Text>
                {
                    this.state.bookmarkValue === false ?
                        <TouchableOpacity
                            style={MainStyle.bookmark}
                            onPress={this.bookmark.bind(this, {title, address})}
                        >

                            <Text style={{ color: 'white', fontSize: 20 }}>BookMark</Text>
                        </TouchableOpacity>

                        :

                        <TouchableOpacity
                            style={MainStyle.bookmarked}
                        >
                            {/* <Image source={checkmark} /> */}
                            <Text style={{ color: 'white', fontSize: 20 }}>
                                Bookmarked
                        </Text>
                        </TouchableOpacity>
                }

            </View>
        );
    }
}

export default PlaceScreen;
