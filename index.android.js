import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
var WeatherPage = require('./components/WeatherPage');

var WeatherApp = React.createClass({
  render: function() {
  return (
    <WeatherPage/>
  )
}
});
AppRegistry.registerComponent('WeatherApp', function() {
  return WeatherApp
});
