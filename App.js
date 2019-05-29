/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE , Marker, Polyline} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';



export default class App extends Component {
  state={
    markers:[{
      title: 'Foo Place',
      subtitle: '1234 Foo Drive',
      coordinates: {
        latitude: 21.17,
        longitude: 72.83
      },
    },
   {
    title: 'Foo Place',
    subtitle: '1234 Foo Drive',
    coordinates: {
      latitude: 23.022,
      longitude: 72.57,
    }, 
   },
  ]
}

  render() {
    const origin = {latitude: 21.17,longitude: 72.83};
    const destination = {latitude: 23.022,longitude: 72.57,}
    const GOOGLE_MAPS_APIKEY = 'AIzaSyCcrWOETOwx83g3XsrxluOhhwBWxN26DLA';
    return (
      <View style={styles.container}>
        <MapView provider={PROVIDER_GOOGLE} annotations={this.state.markers}  style={{ height:300, width:300 }} region={{ latitude: 21.170240, longitude: 72.831062, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }} showsUserLocation={true}>
        {/* {this.state.markers.map(marker => (
            <Marker 
              coordinate={marker.coordinates}
              title="My Location"
              description="Here i am."
            />
           ))} */}
              {/* Following is that you can add your own marker as image */}
              {/* <Image source={{uri:'https://oneheartchurch.com.au/wp-content/uploads/2016/04/youth-5.png'}} style={{height: 35, width:35, }} /> */}
              {/* </Marker> */}
    <Polyline
		coordinates={[
			{  latitude: 21.17,
        longitude: 72.83},
			{  latitude: 23.022,
        longitude: 72.57, },

		]}
		strokeColor="green" // fallback for when `strokeColors` is not supported by the map-provider
		strokeColors={[
			'gray',
			'red', // no color, creates a "long" gradient between the previous and next coordinate

		]}
    strokeWidth={6}
    tappable={true}
  />
          </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
