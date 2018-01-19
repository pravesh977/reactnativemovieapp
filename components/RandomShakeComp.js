import React from 'react';
import { StyleSheet, Text, View, Button, StackNavigator } from 'react-native';


// const MyProfileScreen = () => (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Details Screen</Text>
//     </View>
//   );
  class MyProfileScreen extends React.Component {
    render() {
      return (
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Random Shake Buddy</Text>
            </View>
      )
    }
  }

class RandomShakeComp extends React.Component {
    static navigationOptions = {
        title: 'Home',
      }
   
    render() {
      return (
        <Button
          onPress={() => this.props.navigation.navigate('Profile')}
          title="Details buddy"
        />
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