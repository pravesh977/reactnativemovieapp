import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import TopPopularSingle from './TopPopularSingle';

class MapTopMovies extends React.Component {
  render() {
    return (
    <View>
        {/* <ScrollView horizontal={true}>
            <View style={styles.popularstyle}>
                {this.props.topPopularMovies.map((elem)=>{
                    return (            
                        <TopPopularSingle singlePopData={elem}/>
                    )
                })}
            </View>
        </ScrollView> */}
        
    </View>
    )
}
}

const styles = StyleSheet.create({
  popularstyle: {
    //   flex: 1,
      backgroundColor: 'pink',
      flexDirection: 'row'
  }
});



export default MapTopMovies;