import React from 'react';
import { StyleSheet, Text, View, Button, WebView, Platform, TouchableHighlight, Animated, Image } from 'react-native';
import noimagepic from '../images/noimage.jpeg';
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
    this.noImageFunc = this.noImageFunc.bind(this);
    this.noTitleFunc = this.noTitleFunc.bind(this);
  }


searchRandom() {
  // for latest id https://api.themoviedb.org/3/movie/latest?api_key=<<api_key>>&language=en-US
  let randomnum = Math.floor(Math.random() * 500535+1)
  fetch(`https://api.themoviedb.org/3/movie/${randomnum}?api_key=96c990ebfd368655c66e6d831b4e42fb&append_to_response=videos`)
    .then((response) => {
      response.json()
        .then((randomResponse) => {
          // console.log(randomResponse)
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
      <View style={styles.randomSearched}>
         <TouchableHighlight onPress={() => {
            this.props.openModalFunc()
            this.props.passingstates(this.state.randomFilm)
            }
          }>
          <View style={{alignItems: 'center'}}>
          {/* <Image source={{uri:"https://image.tmdb.org/t/p/w500" + this.state.randomFilm.poster_path}} style={{height: 300, width: 250}}/> */}
          {this.noImageFunc()}
          {this.noTitleFunc()}
          {/* <Text style={{fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}>{this.state.randomFilm.original_title}</Text> */}
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

noImageFunc() {
  
  if(this.state.randomFilm.poster_path==null) {
    return(
    <Image source={noimagepic} style={{height: 300, width: 250}}/>
    )
  }
  else 
  return (
    <Image source={{uri:"https://image.tmdb.org/t/p/w500" + this.state.randomFilm.poster_path}} style={{height: 320, width: 280, borderColor: 'black', borderWidth: 10}}/>
  )
}

noTitleFunc() {
  if(this.state.randomFilm.original_title==null) {
    return(
    <Text style={{textAlign:'center', fontSize: 35, fontWeight: 'bold', backgroundColor: 'black', opacity: 0.7, color: 'white'}}>No Title Available... Please try again</Text>
    )
  }
  else 
  return (
    <Text style={{fontSize: 30, fontWeight: 'bold', textAlign: 'center', backgroundColor: '#8ADDFF'}}>{this.state.randomFilm.original_title}</Text>
  )
}
  render() {
    return (
      <View style={{ alignItems: "center", justifyContent: 'space-between'}}>
         
         {/* <Button onPress={()=>{this.props.openModalFunc()}} title="modalyo"/> */}
         
          {/* {this.transformdiv()} */}
          {/* I dont know why the code breaks and modal doesnt show if I dont use the following line, only supposed to render if i click on the button? */}
          {this.conditionalRandomRender()}
          <TouchableHighlight style={{marginTop: 50}}onPress={() => {
          // this.props.openModalFunc()
          // this.props.passingstates(this.state.randomFilm)
          // this.props.modalrender()
            this.searchRandom()
            }
          }>
          <View style={{backgroundColor: 'red', borderRadius: 50}}>
          <Text style={{fontSize:40, color: 'cyan'}}>RANDOMIZE</Text>
          </View>
        </TouchableHighlight>
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
  randomSearched: {
    marginTop: 100,
  },
  WebViewContainer: {
   
      marginTop: (Platform.OS == 'ios') ? 20 : 0,
   
    }
    
  });