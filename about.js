import React, { Component } from 'react';
import {
  TabBarIOS, 
  StatusBar,
  Button, 
  StyleSheet, 
  Text, 
  View } from 'react-native';

class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"/>
        <Text style={styles.welcomeText}>{this.props.text}</Text>
        <Button
          onPress={()=> this.props.navigator.pop()}
          title="Back to Homepage"
          color="#FFF"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    color: 'white'
  }
});

export default About