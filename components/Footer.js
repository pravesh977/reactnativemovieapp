import React from 'react';
import { Text, View, TouchableOpacity, Alert, StyleSheet } from 'react-native';

class Footer extends React.Component {


    _onPressButton() {
        Alert.alert('You tapped the button!')
      }
    
  render() {
    return (
    <View style={styles.container}>

        <TouchableOpacity onPress={this._onPressButton} underlayColor="white" style={styles.button}>
          <View>
            <Text style={styles.buttonText}>New</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this._onPressButton} underlayColor="white" style={styles.button}>
          <View>
            <Text style={styles.buttonText}>Search</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this._onPressButton} underlayColor="white" style={styles.button}>
          <View>
            <Text style={styles.buttonText}>Favorites</Text>
          </View>
        </TouchableOpacity>
    </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      backgroundColor: 'pink',
    },
    button: {
      flex: 1,
      borderRadius: 4,
      borderWidth: 0.5,
      borderColor: '#d6d7da',
      backgroundColor: '#2196F3'
    },
    buttonText: {
      textAlign: 'center',
      padding: 20,
      color: 'white'
    }
  })

export default Footer;