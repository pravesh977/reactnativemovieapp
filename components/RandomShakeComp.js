import React from 'react';
import { StyleSheet, Text, View, Button, WebView, Platform, TouchableHighlight, Animated, Image } from 'react-native';
// import RNShakeEvent from 'react-native-shake-event';


class RandomShakeComp extends React.Component {
  constructor() {
    super()
    this.state = {
      randomLoaded: false,
      randomFilm: [],
      transitionheight: 5,
    }
    this.searchRandom = this.searchRandom.bind(this);
    this.conditionalRandomRender = this.conditionalRandomRender.bind(this);
  }


searchRandom() {
  // for latest id https://api.themoviedb.org/3/movie/latest?api_key=<<api_key>>&language=en-US
  let randomnum = Math.floor(Math.random() * 500535+1)
  fetch(`https://api.themoviedb.org/3/movie/${randomnum}?api_key=96c990ebfd368655c66e6d831b4e42fb&append_to_response=videos`)
    .then((response) => {
      response.json()
        .then((randomResponse) => {
          this.setState({
            randomLoaded: true,
            randomFilm: randomResponse,
          })
      })
    })
  }

// transformdiv() {
//   return(
//     <Animated.View style={{width: '50%', backgroundColor: 'pink',height: this.state.transitionheight}}
//     />      
//   )
// }

conditionalRandomRender() {
  if(this.state.randomLoaded===true) {
    return (
      <View>
         <TouchableHighlight onPress={() => {
            this.props.openModalFunc()
            this.props.passingstates(this.state.randomFilm)
            }
          }>
          <View style={{alignItems: 'center'}}>
          <Image source={{uri:"https://image.tmdb.org/t/p/w500" + this.state.randomFilm.poster_path}} style={{height: 300, width: 250}}/>
          <Text style={{fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}>{this.state.randomFilm.original_title}</Text>
          </View>
        </TouchableHighlight>
        
      </View>
    )
  }
  else {
    return (
      <Text>Search for Random</Text>
    )
  }
}

  render() {
    return (
      <View style={{ alignItems: "center", flex: 1}}>
         <TouchableHighlight style={{marginTop: 50}}onPress={() => {
        // this.props.openModalFunc()
        // this.props.passingstates(this.state.randomFilm)
        // this.props.modalrender()
      this.searchRandom()
      }
    }>
      <Text style={{fontSize:40, color: 'cyan'}}>RANDOMIZE</Text>
    </TouchableHighlight>
         {/* <Button onPress={()=>{this.props.openModalFunc()}} title="modalyo"/> */}
         
          {/* {this.transformdiv()} */}
          {/* I dont know why the code breaks and modal doesnt show if I dont use the following line, only supposed to render if i click on the button? */}
          {this.conditionalRandomRender()}
         {this.props.modalrender()}

        </View>
      );
    }
  }


export default RandomShakeComp;

const styles = StyleSheet.create({
  randomStyler: {
    height: 250, 
    width: 220,
    marginBottom: 3,
  },
 
  WebViewContainer: {
   
      marginTop: (Platform.OS == 'ios') ? 20 : 0,
   
    }
    
  });