import React from 'react';
import { View, Alert, Text, StyleSheet, TouchableOpacity } from 'react-native';

class Location extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    handlePress = async () => {
        const res = await this.props.fetchDetails(this.props.place_id)

        Alert.alert(JSON.stringify(res));
    }

    render() { 
        return ( 
            <TouchableOpacity onPress={this.handlePress}>
                <Text>{this.props.description}</Text>
                </TouchableOpacity>
         );
    }
}
 
export default Location;