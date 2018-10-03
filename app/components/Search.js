// import React from 'react';
// import { StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { GoogleAutoComplete } from 'react-native-google-autocomplete';


// const apikey = 'AIzaSyBo7Y0e5_ZkSjcSf24qEt95_dNWj74pNOc';

// class Search extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {}
//     }

//     static navigationOptions = {
//         title: 'Search',
//       };


//     render() {
//         return (
//             <View style={styles.container}>
//                 <Icon style={styles.searchIcon} name="ios-search" size={25} />
//                 {/* <GoogleAutoComplete apiKey={apikey} debounce={300}>
//                     {({ handleTextChange, locationResults }) => (
//                         <React.Fragment>
//                             {console.log('locationResults', locationResults)} */}
//                             <TextInput
//                                 style={styles.textInput}
//                                 underlineColorAndroid="transparent"
//                                 placeholder='Enter location...'
//                                 placeholderTextColor='black'
//                                 // onChangeText={handleTextChange}
//                             />
//                             {/* <ScrollView>
//                                 {locationResults.map(location => {
//                                     {...location}

//                                 })}
//                             </ScrollView>
//                         </React.Fragment>
//                     )}

//                 </GoogleAutoComplete> */}
//             </View>
//         );
//     }
// }

// export default Search;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     textInput: {
//         width: 320,
//         height: 40,
//         borderRadius: 10,
//         textAlign: 'center',
//         position: 'absolute',
//         top: 10,
//         color: 'black',
//         borderColor: 'black',
//         borderWidth: 1
//     },
//     searchIcon: {
//         position: 'absolute',
//         top: 18,
//         left: 65
//     }
// })

import React from 'react';
import { View, Image, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

// const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
// const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};

const GooglePlacesInput = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      minLength={2} // minimum length of text to search
      autoFocus={false}
      returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
      listViewDisplayed='auto'    // true/false/undefined
      fetchDetails={true}
      renderDescription={row => row.description} // custom description render
      onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      
      getDefaultValue={() => ''}
      
      query={{
        // available options: https://developers.google.com/places/web-service/autocomplete
        key: 'AIzaSyBo7Y0e5_ZkSjcSf24qEt95_dNWj74pNOc',
        language: 'en', // language of the results
        types: '(cities)' // default: 'geocode'
      }}
      
      styles={{
        textInputContainer: {
          width: '100%'
        },
        description: {
          fontWeight: 'bold'
        },
        predefinedPlacesDescription: {
          color: '#1faadb'
        }
      }}
      
      currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
      currentLocationLabel="Current location"
      nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
      GoogleReverseGeocodingQuery={{
        // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
      }}
      GooglePlacesSearchQuery={{
        // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
        rankby: 'distance',
        types: 'food'
      }}

      filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
    //   predefinedPlaces={[homePlace, workPlace]}

      debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
    //   renderLeftButton={()  => <Image source={require('path/custom/left-icon')} />}
    //   renderRightButton={() => <Text>Custom text after the input</Text>}
    />
  );
}

export default GooglePlacesInput;