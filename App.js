import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import homemoviespic from './images/homemovies.jpg';
import athf from './images/athf.jpg';
import { StyleSheet, Text, View, Image, ViewPagerAndroid, TextInput } from 'react-native';

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//        <Header/>
//        <Image source={homemoviespic} alt="mainpic" style={{flex: 1, width: '100%'}}/>
//        <Footer/>
//       </View>
//     );
//   }
// }



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
// });

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <ViewPagerAndroid
            style={styles.viewPager}
            initialPage={0}>
        <View style={styles.pageStyle} key="1">
        <Text>First Random Page</Text>
          <Image source={homemoviespic} alt="mainpic" style={{flex: 1, width: '100%'}}/>
        </View>
        <View style={styles.pageStyle} key="2">
          <Text>Search Page</Text>
          <TextInput placeholder="Enter Movie Name" style={{height: 40, width: '100%', textAlign: 'center', borderWidth: 0.5, borderColor: '#d6d7da',}}/>
          <Image source={athf} alt="mainpic" style={{flex: 1, width: '100%'}}/>
        </View>
        </ViewPagerAndroid>
        <Footer/>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center', this somehow makes everything disappear
    justifyContent: 'center'
  },
  viewPager: {
    flex: 1
  },
  pageStyle: {
    alignItems: 'center',
    //padding: 20,
  }
});
