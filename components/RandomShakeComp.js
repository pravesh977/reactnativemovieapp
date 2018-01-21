import React from 'react';
import { StyleSheet, Text, View, Button, StackNavigator, WebView, Platform } from 'react-native';


// const MyProfileScreen = () => (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//     </View>
//   );
  // class MyProfileScreen extends React.Component {
  //   render() {
  //     return (
  //           <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
  //               <Text>Random Shake Buddy</Text>
  //           </View>
  //     )
  //   }
  // }

class RandomShakeComp extends React.Component {
    // static navigationOptions = {
    //     title: 'Home',
    //   }
   
    render() {
      return (
        <View style={{ height: 300, width: '100%' }}>
        <Text>HEYHEY</Text>
          <WebView
                    style={ styles.WebViewContainer }
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{uri: 'https://www.youtube.com/embed/cOXnYNgqf5Q' }}
            />
        </View>
      );
    }
  }
//   const ModalStack = StackNavigator({
//     Home: {
//       screen: RandomShakeComp,
//     },
//     Profile: {
//       screen: MyProfileScreen,
//     },
//   });

  

export default RandomShakeComp;

const styles = StyleSheet.create({
 
  WebViewContainer: {
   
      marginTop: (Platform.OS == 'ios') ? 20 : 0,
   
    }
    
  });