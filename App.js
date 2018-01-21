import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TopMovies from './components/TopMovies';
import SearchPageComp from './components/SearchPageComp';
import RandomShakeComp from './components/RandomShakeComp';
import homemoviespic from './images/homemovies.jpg';
// import athf from './images/athf.jpg';
// import brakshow from './images/brakshow.jpg';
// import squildbillies from './images/squidbillies.jpg';
import { StyleSheet, Text, View, Image, ViewPagerAndroid, TextInput, ScrollView, Button, Alert, Modal } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TopPopularSingle from './components/TopPopularSingle';
import {TabComp} from './components/TabComp';

export default class App extends React.Component {
    constructor() {
      super()
      this.state= {
        modalstuffshown: false,
        modalitems: null,
        modalShown: false,
      }
      this.openModalFunc = this.openModalFunc.bind(this);
      this.closeModalFunc = this.closeModalFunc.bind(this);
      this.modalrender = this.modalrender.bind(this);
      this.finconditional = this.finconditional.bind(this);
      this.newalerter = this.newalerter.bind(this);
      this.passingstates = this.passingstates.bind(this);
    }

    finconditional() {
      if(this.state.modalstuffshown===true) {
          return (
              <View>
                  <ScrollView>
                    {/* {console.log("modaaal", this.state.modalstuffshown)} */}
                      <Text>{this.state.modalitems.original_title}</Text>
                      <Image source={{uri:"https://image.tmdb.org/t/p/w500" + this.state.modalitems.poster_path}} style={styles.topImages}/>           
                      <Text>{this.state.modalitems.overview}</Text>
                      <Text>Released Date: {this.state.modalitems.release_date}</Text>
                      <Text>Average Vote: {this.state.modalitems.vote_average}</Text>
                      <Image source={{uri:"https://image.tmdb.org/t/p/w500" + this.state.modalitems.backdrop_path}} style={styles.topImages}/>
                      
                  </ScrollView>
              </View>
          )
      }
  }

  passingstates(item) {
    this.setState ({
      modalstuffshown: true,
      modalitems: item,
    })
  }


  modalrender() {
    return (
        <Modal
            visible={this.state.modalShown}
            animationType={'slide'}
            onRequestClose={() => this.closeModalFunc()}
        >
            <View>
                <View>         
                  {console.log(this.state.modalstuffshown)}
           
                    <Button
                        onPress={() => this.closeModalFunc()}
                        title="Close"
                    >   
                    </Button>
                    {this.finconditional()}
                </View>
            </View>
        </Modal>
    )
}
openModalFunc() {
  this.setState({modalShown: true})
  // console.log("statemodal", this.state.modalShown)
};

closeModalFunc() {
  this.setState({modalShown: false})
}

newalerter(thisparam) {
  Alert.alert(thisparam);
}
render() {
  return(
    <TabComp 
      newalerter={this.newalerter}
      screenProps={{
        myname: "pravesh",
        yourname: "assman",
        newalerter: this.newalerter,
        openModalFunc: this.openModalFunc,
        closeModalFunc: this.closeModalFunc,
        modalrender: this.modalrender,
        modalstuffshown: this.state.modalstuffshown,
        modalitems: this.state.modalitems,
        passingstates: this.passingstates,
      }}
      />
    )
  }

  }
  const styles = StyleSheet.create({
    originalTitle: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        fontStyle: 'italic',
    },
    topText: {
        fontSize: 20,
        marginLeft: 5,
        fontWeight: 'bold',
    },
    topContainer: {
        marginTop: 20,
        marginBottom: 20,
    },
    topImages :{
        height: 250, 
        width: 220,
        marginBottom: 3,
    }
  });


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

// export class App extends React.Component {

//   onpictureclick() {
//     Alert.alert("hello")
//     }
// }

// const onpictureclick = () => {
//   Alert.alert("hello")
// }

// const showDetailsFunc = () => {

// }


// const MainScreenPage = () => (
//   <View style={{alignItems: 'center', flex:1}}>
//   <ScrollView>
//     <Text>This is the random Top page</Text>
//     <Image source={homemoviespic} style={{width: '100%'}}/>
//     {/* <Image source={homemoviespic}/>
//     <Image source={homemoviespic}/>
//     <Image source={homemoviespic}/> */}
//     <TopMovies />
//     <Image source={homemoviespic}  style={{width: '100%'}}/>
//     </ScrollView>
//   </View>
// )

// const SearchPage = () => (
//   <View style={{alignItems: 'center', justifyContent: 'center'}}>
//     <SearchPageComp 
//       onpictureclick={onpictureclick} 
//       openModalFunc={this.openModalFunc}
//       closeModalFunc={this.closeModalFunc}
//       newalerter={this.newalerter}
//       modalrender={this.modalrender}
//     />
//   </View>
// )


// class RandomShakePage extends React.Component {
//   render() {
//     return (
//           <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
//               <Text>Random Shake Buddy</Text>
//               <RandomShakeComp />
//           </View>
//     )
//   }
// }

// const FavoritePage = () => (
//   <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
//     <Text>This is the Favorite Page</Text>
//   </View>
// )

// const DetailsPage = () => (
//   <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
//     <Text>Your Details</Text>
//   </View>
// )



//   const RootTabs = TabNavigator({
//       MSPage: {
//         screen: MainScreenPage,
//         navigationOptions: {
//           tabBarLabel: 'Top Movies',
//           tabBarIcon: ({ tintColor, focused } )=>(
//             <Ionicons
//             name={focused ? 'ios-home' : 'ios-home-outline'}
//             size={26}
//             style={{ color: tintColor }}
//           />
//           ),
//         },
//       },
//       SPage: {
//         screen: SearchPage,
//         navigationOptions: {
//           tabBarLabel: 'Search',
//           tabBarIcon: ({ tintColor, focused } )=>(
//             <Ionicons
//             name={focused ? 'ios-home' : 'ios-home-outline'}
//             size={26}
//             style={{ color: tintColor }}
//           />
//           ),
//         },
//       },
//       ShakePage: {
//         screen: RandomShakePage,
//         navigationOptions: {
//           tabBarLabel: 'Shake',
//           tabBarIcon: ({ tintColor, focused } )=>(
//             <Ionicons
//             name={focused ? 'ios-home' : 'ios-home-outline'}
//             size={26}
//             style={{ color: tintColor }}
//           />
//           ),
//         },
//       },
//       FavPage: {
//         screen: FavoritePage,
//         navigationOptions: {
//           tabBarLabel: 'Favorites',
//           tabBarIcon: ({ tintColor, focused } )=>(
//             <Ionicons
//             name={focused ? 'ios-home' : 'ios-home-outline'}
//             size={26}
//             style={{ color: tintColor }}
//           />
//           ),
//         },
//       }, 

//    },
//   {
//     tabBarPosition: 'bottom',
//     swipeEnabled: true,
//     animationEnabled: true,
//   })
  

//export default RootTabs;