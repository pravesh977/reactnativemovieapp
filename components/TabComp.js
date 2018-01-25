
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, Alert, Modal, ViewPagerAndroid } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SearchPageComp from './SearchPageComp';
import RandomShakeComp from './RandomShakeComp';
import TopMovies from './TopMovies';
import homemoviespic from '../images/homemovies.jpg';


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
    <View style={{alignItems: 'center', flex:1}}>
  <ScrollView>
    <Text>This is the random Top page</Text>
    <Image source={homemoviespic} style={{width: '100%'}}/>
    {/* <Image source={homemoviespic}/>
    <Image source={homemoviespic}/>
    <Image source={homemoviespic}/> */}
    <TopMovies />
    {/* <Image source={homemoviespic} style={{width: '100%'}}/> */}
    </ScrollView>
  </View>
  )
  
//   const SearchPage = () => (
    class SearchPage extends React.Component {
        render() {
          return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <SearchPageComp 
        // newalerter={this.props.newalerter}
        // openModalFunc={this.openModalFunc}
        // closeModalFunc={this.closeModalFunc}
        // newalerter={this.props.screenProps.newalerter}
        newalerter={this.props.screenProps.newalerter}
        openModalFunc={this.props.screenProps.openModalFunc}
        closeModalFunc={this.props.screenProps.closeModalFunc}
        modalrender={this.props.screenProps.modalrender}
        modalitems={this.props.screenProps.modalitems}
        modalstuffshown={this.props.screenProps.modalstuffshown}
        passingstates={this.props.screenProps.passingstates}
      />
    </View>
//   )
          )
        }}
        
  
  
  
        class RandomShakePage extends React.Component {
            render() {
              return (
                    <RandomShakeComp
                        openModalFunc={this.props.screenProps.openModalFunc}
                        modalrender={this.props.screenProps.modalrender}
                        passingstates={this.props.screenProps.passingstates}
                    />
                    )
                }
            }
  
  const FavoritePage = props => (
    <View>
      <Text style={{textAlign: 'center'}}>This is the Favorite Page... Coming soon</Text>
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
        </ViewPagerAndroid>
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
      swipeEnabled: true,
      animationEnabled: true,
    })
    

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