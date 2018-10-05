import React, { Component } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

class Search extends Component {
  state = {}

  setToPlaceScreen = (data, details) => {
    console.log(data);

    var imageTitleAddress = {};
    imageTitleAddress.title = data.structured_formatting.main_text;
    imageTitleAddress.address = data.description;
    imageTitleAddress.photo = data.description.place_id
    console.log(imageTitleAddress)
    let refresh = this.props.navigation.getParam('refresh', () => alert("REFRESH FUNCTION WAS NOT PROVIDED: LINE 17 Search.js"))
    this.props.navigation.navigate("PlaceScreen", {
      imageTitleAddress,
      refresh
    });
  }

  render() {
    return (

      <GooglePlacesAutocomplete

        placeholder='Search'
        minLength={2}
        autoFocus={false}
        returnKeyType={'search'}
        listViewDisplayed='auto'
        fetchDetails={true}
        renderDescription={row => row.description}
        onPress={this.setToPlaceScreen}


        getDefaultValue={() => ''}

        query={{
          key: 'AIzaSyBo7Y0e5_ZkSjcSf24qEt95_dNWj74pNOc',
          language: 'en'
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


        nearbyPlacesAPI='GooglePlacesSearch'
        GooglePlacesSearchQuery={{
          rankby: 'distance',
          types: 'food'
        }}

        filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}

        debounce={200}
      />

    );
  }
}

export default Search;
