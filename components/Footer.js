import React from 'react';
import { Text, View, TouchableHighlight, Alert, StyleSheet } from 'react-native';

class Footer extends React.Component {


    _onPressButton() {
        Alert.alert('You tapped the button!')
      }
    
  render() {
    return (
    <View style={styles.container}>

        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>New</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Search</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
          <View style={styles.button}>
            <Text style={styles.buttonText}>Favorites</Text>
          </View>
        </TouchableHighlight>
    </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'stretch',
      justifyContent: 'space-around',
      backgroundColor: 'pink',
    },
    button: {
      alignItems: 'stretch',
      backgroundColor: '#2196F3'
    },
    buttonText: {
      padding: 20,
      color: 'white'
    }
  })

export default Footer;