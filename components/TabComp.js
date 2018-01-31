
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, Alert, Modal, ViewPagerAndroid, ImageBackground } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchPageComp from './SearchPageComp';
import RandomShakeComp from './RandomShakeComp';
import TopMovies from './TopMovies';
import homemoviespic from '../images/homemovies.jpg';
import plaindark from '../images/plaindark.jpg';
import retroback from '../images/retroback.jpg';
import beachart from '../images/beachart.jpg'


// export const Tabs = TabNavigator({
//     Feed: {
//       screen: Feed,
//       navigationOptions: {
//         tabBarLabel: 'Feed',
//         tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
//       },
//     },
//     Me: {
//       screen: Me,
//       navigationOptions: {
//         tabBarLabel: 'Me',
//         tabBarIcon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
//       },
//     },
//   });

  const MainScreenPage = () => (
    <ImageBackground source={plaindark} style={{flex: 1, width: '100%'}}> 
      <View style={{alignItems: 'center', flex:1}}>
        <ScrollView>
          <Text>This is the random Top page</Text>
          <Image source={homemoviespic} style={{width: '100%'}}/>
          <TopMovies />
        </ScrollView>
      </View>
    </ImageBackground>
  )
  
//   const SearchPage = () => (
    class SearchPage extends React.Component {
        render() {
          return (
            <ImageBackground source={retroback} style={{flex: 1, width: '100%'}}>
              <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
                <SearchPageComp
                  newalerter={this.props.screenProps.newalerter}
                  openModalFunc={this.props.screenProps.openModalFunc}
                  closeModalFunc={this.props.screenProps.closeModalFunc}
                  modalrender={this.props.screenProps.modalrender}
                  modalitems={this.props.screenProps.modalitems}
                  modalstuffshown={this.props.screenProps.modalstuffshown}
                  passingstates={this.props.screenProps.passingstates}
                />
              </View>
            </ImageBackground>
          )
        }
      }
        
  
  
  
        class RandomShakePage extends React.Component {
            render() {
              return (
                  <ImageBackground source={beachart} style={{width: '100%', flex: 1}}>
                    <RandomShakeComp
                        openModalFunc={this.props.screenProps.openModalFunc}
                        modalrender={this.props.screenProps.modalrender}
                        passingstates={this.props.screenProps.passingstates}
                    />
                  </ImageBackground>
                    )
                }
            }
  
  const FavoritePage = props => (
    <View style={{flex: 1}}>
      {/* <Text style={{textAlign: 'center'}}>This is the Favorite Page... Coming soon</Text>
      <ViewPagerAndroid
            style={styles.viewPager}
            initialPage={0}>
        <View style={styles.pageStyle} key="1">
        <Text>Random Movies Page</Text>
        <ScrollView>
          <View>
          <Image source={homemoviespic} style={{width: '100%'}}/>
        </View>
        </ScrollView>
        </View>
        <View style={styles.pageStyle} key="2">
          <Text>Search Page</Text>
          <Image source={homemoviespic} style={{width: '100%'}}/>
        </View>
        </ViewPagerAndroid> */}
       <Image source={homemoviespic} style={{flex: 1, width: '100%'}}/>
        <View style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center'}}>
            <Text>HEYER</Text>
        </View>
    </View>
  )

  
  const DetailsPage = () => (
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Your Details</Text>
      
    </View>
  )
  
  
  
    export const TabComp = TabNavigator({
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
            tabBarLabel: 'Random',
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
      swipeEnabled: true,
      animationEnabled: true,
      tabBarOptions: {
        labelStyle: {
          fontSize: 13,
          fontWeight: 'bold',
        },
        style: {
          backgroundColor: '#2FC8FF',
        },
      },
    }
  )
    

    const styles = StyleSheet.create({
        viewPager: {
          flex: 1
        },
        pageStyle: {
          alignItems: 'center',
          padding: 20,
          height: 50,
        }
      });
  
  //export default RootTabs;
  const RootTabs = TabNavigator({
    MSPage: {
    screen: MainScreenPage,
    },
  SPage: {
    screen: SearchPage,
    },
  })