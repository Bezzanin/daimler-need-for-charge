import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar
} from 'react-native';
import { MapView } from 'expo';

import { restaurantMarkers} from '../data/markers';
import mapStyles from '../data/mapstyles'
import MarkersList from '../components/MarkersList';

export default class ChargersScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerTintColor: '#00acf2',
    headerStyle: {
      backgroundColor: '#000',
      color: '#fff'
    },
  };

  constructor() {
    super();
    this.state = {
      AllMarkers: [],
      CategoryMarkers: restaurantMarkers,
      option: '',
      slug: '',
      initialPosition: 'unknown',
      lastPosition: 'unknown',
      longi: '',
      lati: '',
      venueName: '',
      venueAbout: ''
    };
  }


  render() {
    return (
      <View style={styles.container}>
      <StatusBar barStyle="light-content"/>
      <MapView
          provider="google"
          style={{flex: 1}}
          initialRegion={{
            latitude: 48.780847,
            longitude: 9.166338,
            latitudeDelta: 0.0222,
            longitudeDelta: 0.0121,
          }}
          showUserLocation={true}
          customMapStyle={mapStyles}
        >
        {this.state.CategoryMarkers.map((marker, i) => (
        <MapView.Marker
            key={i}
            coordinate = {{
                latitude: marker.latlng.latitude,
                longitude: marker.latlng.longitude
            }}
            title={marker.title}
            description={marker.description}
            image={marker.image}
          />
        ))}
        <MapView.Marker
          coordinate = {{
            latitude: 48.780847,
            longitude: 9.166338,
          }}
          title={"AMG"}
          image={require('../assets/amg.png')}

        />
      </MapView>
      <MarkersList 
        markers={this.state.CategoryMarkers}
      />
    </View>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
