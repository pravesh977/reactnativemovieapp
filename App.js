import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TopMovies from './components/TopMovies';
import homemoviespic from './images/homemovies.jpg';
// import athf from './images/athf.jpg';
// import brakshow from './images/brakshow.jpg';
// import squildbillies from './images/squidbillies.jpg';
import { StyleSheet, Text, View, Image, ViewPagerAndroid, TextInput, ScrollView, Button } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TopPopularSingle from './components/TopPopularSingle';

  



// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Header/>



        {/* <ViewPagerAndroid
            style={styles.viewPager}
            initialPage={0}>
        <View style={styles.pageStyle} key="1">
        <Text>Random Movies Page</Text>
        <ScrollView>
          <View>
          <Image source={homemoviespic} style={{width: '100%'}}/>
          <Image source={brakshow}/>
          <Image source={squildbillies}/>
        </View>
        </ScrollView>
        </View>
        <View style={styles.pageStyle} key="2">
          <Text>Search Page</Text>
          <TextInput placeholder="Enter Movie Name" style={{height: 40, width: '100%', textAlign: 'center', borderWidth: 0.5, borderColor: '#d6d7da',}}/>
          <Image source={athf} alt="mainpic" style={{flex: 1, width: '100%'}}/>
        </View>
        </ViewPagerAndroid> */}



//         <Footer/>
//       </View>
//     );
//   }
// }



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     //alignItems: 'center', this somehow makes everything disappear
//     justifyContent: 'center'
//   },
//   viewPager: {
//     flex: 1
//   },
//   pageStyle: {
//     alignItems: 'center',
//     //padding: 20,
//   }
// });




const MainScreenPage = () => (
  <View style={{alignItems: 'center', flex:1}}>
  <ScrollView>
    <Text>This is the random Top page</Text>
    <Image source={homemoviespic}/>
    <Image source={homemoviespic}/>
    <Image source={homemoviespic}/>
    <Image source={homemoviespic}/>
    <TopMovies />
    <Image source={homemoviespic}/>
    </ScrollView>
  </View>
)

const SearchPage = () => (
  <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>This is the Search page</Text>
  </View>
)

const RandomShakePage = () => (
  <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>This is the Random Shake</Text>
  </View>
)

const FavoritePage = () => (
  <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
    <Text>This is the Favorite Page</Text>
  </View>
)

  const RootTabs = TabNavigator({
      MSPage: {
        screen: MainScreenPage,
        navigationOptions: {
          tabBarLabel: 'Top Movies',
          tabBarIcon: ({ tintColor, focused } )=>(
            <Ionicons
            name={focused ? 'ios-home' : 'ios-home-outline'}
            size={26}
            style={{ color: tintColor }}
          />
          ),
        },
      },
      SPage: {
        screen: SearchPage,
        navigationOptions: {
          tabBarLabel: 'Search',
          tabBarIcon: ({ tintColor, focused } )=>(
            <Ionicons
            name={focused ? 'ios-home' : 'ios-home-outline'}
            size={26}
            style={{ color: tintColor }}
          />
          ),
        },
      },
      ShakePage: {
        screen: RandomShakePage,
        navigationOptions: {
          tabBarLabel: 'Shake',
          tabBarIcon: ({ tintColor, focused } )=>(
            <Ionicons
            name={focused ? 'ios-home' : 'ios-home-outline'}
            size={26}
            style={{ color: tintColor }}
          />
          ),
        },
      },
      FavPage: {
        screen: FavoritePage,
        navigationOptions: {
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ tintColor, focused } )=>(
            <Ionicons
            name={focused ? 'ios-home' : 'ios-home-outline'}
            size={26}
            style={{ color: tintColor }}
          />
          ),
        },
      }, 
      
   },
  {
    tabBarPosition: 'bottom',
  })
  

export default RootTabs;