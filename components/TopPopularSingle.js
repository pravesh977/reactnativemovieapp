import React from 'react';
import { ListView, View, Text, Image, ScrollView } from 'react-native';
import homemoviespic from '../images/homemovies.jpg';
import athf from '../images/athf.jpg';
import brakshow from '../images/brakshow.jpg';
import squildbillies from '../images/squidbillies.jpg';

class TopPopularSingle extends React.Component {
  render() {
    return (
    <View style={{margin: 10, alignContent: 'center', alignItems: 'center'}}>
         {/* <Image source={{uri:"https://image.tmdb.org/t/p/w500" + this.props.singlePopData.poster_path}} style={{height: 150, width: 120}}/>
         <Text>{this.props.singlePopData.original_title}</Text> */}
    </View>

    



    );
  }
}


export default TopPopularSingle;
