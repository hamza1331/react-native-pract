import React, { Component } from 'react';
import MapView from 'react-native-maps'
import {Marker} from 'react-native-maps'
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      region:{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
      markers:[
        {
          latlng:{
            latitude: 37.78825,
            longitude: -122.4324
          },
          title: 'Foo Place',
          subtitle: '1234 Foo Drive'
        }
      ],
      error: null,
    };
    this.onRegionChange=this.onRegionChange.bind(this)
  }
  onRegionChange(){
    this.watchId = navigator.geolocation.watchPosition(
      (position) => {
        let newRegion = {
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
        }
        newRegion.latitude = position.coords.latitude
        newRegion.longitude=position.coords.longitude
        let newMarker = {
          latitude:position.coords.latitude,
          longitude:position.coords.longitude
        }
        
        let oldMarks = this.state.markers
        oldMarks[0].latlng = newMarker
        this.setState({
          region:newRegion,
          error: null,
          markers:oldMarks
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 },
    );
  }
  componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
  }

  render() {
    return (
            <MapView
        style={{ flex: 1 }}
      region={this.state.region}
      onRegionChange = {this.onRegionChange}
      >
      {this.state.markers.map(marker => (
    <Marker
    key={Math.round(Math.random()*10000)}
      coordinate={marker.latlng}
      title={marker.title}
      description={marker.description}
    />
  ))}
      </MapView>
    );
  }
}

export default App;