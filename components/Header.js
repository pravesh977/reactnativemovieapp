import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Header extends React.Component {
  render() {
    return (
    <View>
      <Text style={headerstyle.container}>This is a header component</Text>
    </View>
    );
  }
}

const headerstyle = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30
  },
});

export default Header;