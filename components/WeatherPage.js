import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image
} from 'react-native';
var Forecast = require('./Forecast');
var OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=b2b4e0ec139ddf6d5f270ebae36ca5f5&units=metric';

var WeatherPage = React.createClass({
  getInitialState: function () {
    return {
      zip: '',
      forecast: {
        main: 'Weather',
        description: 'Weather description',
        temp: 0.0
      }
    }
  },
  handleTextInput(event){
    var zip = event.nativeEvent.text;
    var url = OPEN_WEATHER_MAP_URL +'&q='+ zip;
    var description = '';
    var temp = '';
    this.setState({zip: zip});
    //console.warn(zip);
    //console.error(url);
    fetch(url)
    .then((response) => response.json())
    .then((responseJSON) => {
      //console.error(responseJSON);
      description = responseJSON.weather[0].description+' at '+responseJSON.name;
      temp = responseJSON.main.temp+' degrees right now'
      this.setState({
      forecast: {
        main: responseJSON.weather[0].main,
        description: description,
        temp: temp
      }

    });
    })
    .catch((error) => {
    console.warn(error);
    });
},
  render: function() {
    var content = null;
      if (this.state.forecast !== null) {
      content = <Forecast
      main={this.state.forecast.main}
      description={this.state.forecast.description}
      temp={this.state.forecast.temp}/>;
      }
    return (
        <Image source={require('../images/cloudy.png')}
          style={styles.backdrop}>
            <View style={styles.container}>
              <Text style={styles.welcome}>
                Your location is {this.state.zip}
              </Text>

            <TextInput style={styles.input} onSubmitEditing={this.handleTextInput}/>
            </View>
        {content}
      </Image>


    );
  }
});


const styles = StyleSheet.create({
  overlay: {


  },
  row: {

  },
  container: {



  },
  input: {
    fontSize: 20,
    height: 40,
    width: 150
  },
  welcome: {

    fontSize: 20,
  },
  backdrop: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: null,
    height: null,
    resizeMode:'cover',
    flexDirection: 'column',

  },
  instructions: {

    color: '#333333',
    marginBottom: 5,
  },
});

module.exports = WeatherPage;
