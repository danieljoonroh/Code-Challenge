import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class PlaceScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <View style={styles.container}>
                <Text>Place Screen</Text>
            </View>
          );
    }
}
 
export default PlaceScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
})