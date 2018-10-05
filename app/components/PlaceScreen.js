import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import axios from 'axios';

import { MainStyle } from '../styles';

class PlaceScreen extends React.Component {

    state = {
        bookmarkValue: false,
        bookmarks: []
    }

    bookmark = async (title, address) => {
        await axios.post('http://localhost:5000/', { title, address })

        this.setState({
            bookmarkValue: true
        }, () => setTimeout(() => {
            let refresh = this.props.navigation.getParam('refresh', () => console.log('error'))
            refresh();
            this.props.navigation.popToTop()
        }, 1000))
    }

    render() {
        let { title, address } = this.props.navigation.getParam('imageTitleAddress', { title: "Default" })
        console.log("LINE 34:", title, address)
        return (
            <View style={MainStyle.container}>
                <Text style={{ fontSize: 25, marginBottom: 10 }}>{title}</Text>
                <Text style={{ fontSize: 15, textAlign: 'center' }}>{address}</Text>
                {
                    this.state.bookmarkValue === false ?
                        <TouchableOpacity
                            style={MainStyle.bookmark}
                            onPress={() => this.bookmark(title, address)}
                        >

                            <Text style={{ color: 'white', fontSize: 20 }}>BookMark</Text>
                        </TouchableOpacity>

                        :

                        <TouchableOpacity
                            style={MainStyle.bookmarked}
                        >
                            <Image source={require("../design/assets/Icon-Checkmark.png")} style={MainStyle.checkmark}/>
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
