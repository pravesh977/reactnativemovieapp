import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <Header/>
       <Footer/>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
