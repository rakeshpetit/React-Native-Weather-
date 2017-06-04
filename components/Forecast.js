import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


var Forecast = React.createClass({

  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.big}>
          {this.props.main}
        </Text>
        <Text style={styles.mid}>
          {this.props.description}
        </Text>
        <Text style={styles.big}>
          {this.props.temp}
        </Text>
        </View>
    )
  }
});

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  big: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    color: '#FFFFFF'
  },
  mid: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    color: '#FFFFFF'
  }
})

module.exports = Forecast;
