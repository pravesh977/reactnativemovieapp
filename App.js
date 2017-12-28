import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import homemoviespic from './images/homemovies.jpg';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       <Header/>
       <Image source={homemoviespic} alt="mainpic" style={{flex: 1, width: '100%'}}/>
       <Footer/>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
