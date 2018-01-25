import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, Alert, Button, Modal, ScrollView, TouchableHighlight, ViewPagerAndroid } from 'react-native';
import homemoviespic from '../images/homemovies.jpg';
import MapTopMovies from './MapTopMovies';
import ActionMoviesComp from './ActionMoviesComp';
import brak from '../images/brakshow.jpg';
import athf from '../images/athf.jpg';
import cinemaback from './../images/cinemaback.jpeg';

class DetailsPage extends React.Component {
    render() {
      return(
      <View>
        <Text>details</Text>
      </View>
      )
    }
  }


export default class TopMovies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiTopLoaded: false,
            actionListLoaded: false,
            topComedyLoaded: false,
            topHorrorLoaded: false,
            showModal: false,
            topPopularMovies: [],
            topAction: [],
            topComedy: [],
            topHorror: [],
            modalstuffshown: false,
            modalitems: null,
        }
        this.conditionalTopPopular = this.conditionalTopPopular.bind(this);
        this.conditionalActionRender = this.conditionalActionRender.bind(this);
        this.conditionalComedyRender = this.conditionalComedyRender.bind(this);
        this.conditionalHorrorRender = this.conditionalHorrorRender.bind(this);
        this.mybuttonclick = this.mybuttonclick.bind(this);
        this.endreachedboy = this.endreachedboy.bind(this);
        this.openModalFunc = this.openModalFunc.bind(this);
        this.closeModalFunc = this.closeModalFunc.bind(this);
        this.modalrender = this.modalrender.bind(this);
        this.finconditional = this.finconditional.bind(this);
        this.zeroVote = this.zeroVote.bind(this);
        this.introViewPager = this.introViewPager.bind(this);
    }
    

componentDidMount() {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=96c990ebfd368655c66e6d831b4e42fb&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=1')
        .then((response)=>{
            response.json()
                .then((popularMovies) => {
                    //console.log(popularMovies.results[0])
                    this.setState({
                        apiTopLoaded: true,
                        topPopularMovies: popularMovies.results,
                    })
                })
        })
    fetch('https://api.themoviedb.org/3/discover/movie?with_genres=28&page=1&include_video=false&include_adult=false&sort_by=vote_count.desc&language=en-US&api_key=96c990ebfd368655c66e6d831b4e42fb')
        .then((response)=>{
            response.json()
                .then((topAction) => {
                //console.log(popularMovies.results[0])
                    this.setState({
                        actionListLoaded: true,
                        topAction: topAction.results,
                    })
                // {console.log("action yeahhh", this.state.topAction)}
                })
            })
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=96c990ebfd368655c66e6d831b4e42fb&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=35&without_genres=28&append_to_response=videos')
        .then((response)=>{
            response.json()
                .then((topComedyfilms) => {
                        //console.log(popularMovies.results[0])
                    this.setState({
                        topComedyLoaded: true,
                        topComedy: topComedyfilms.results,
                        })
                        //{console.log("comedy woohoo yeahhh", this.state.topComedy)}
                    })
                })
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=96c990ebfd368655c66e6d831b4e42fb&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=27')
        .then((response)=>{
            response.json()
                .then((topHorrorfilms) => {
                        //console.log(popularMovies.results[0])
                    this.setState({
                        topHorrorLoaded: true,
                        topHorror: topHorrorfilms.results,
                        })
                                // {console.log("comedy woohoo yeahhh", this.state.topComedy)}
                    })
                })
            }


    conditionalTopPopular() {
        if(this.state.apiTopLoaded===true) {
            return(
                <View style={styles.topContainer}>

                {/* <MapTopMovies topPopularMovies={this.state.topPopularMovies} /> */}
                {/* Going to use FlatList because it is giving an error when using horizontal={true} */}

                <Text style={styles.topText}>New Top Rated Movies</Text>
                    <FlatList
                        horizontal={true}
                        data={this.state.topPopularMovies}
                        renderItem={({ item }) => (
                        <View style={{margin: 10, alignContent: 'center', alignItems: 'center', width: 200, backgroundColor: 'grey'}}>
                            <TouchableHighlight onPress={() => {
                                    this.openModalFunc()
                                    this.setState({
                                                   modalstuffshown: true,
                                                   modalitems: item
                                                })
                                    this.modalrender() 
                                        }
                                    }>
                                <Image source={{uri:"https://image.tmdb.org/t/p/w500" + item.poster_path}} style={styles.topImages}/>
                            </TouchableHighlight>
                            <Text style={styles.originalTitle}>{item.original_title}</Text>
                            {/* <Button onPress={console.log(this, "heyhey")} title="this"/> */}
                            {/* <Button onPress={()=>this.props.navigation.navigate("Details")} title="heyD"/> */}
                        </View>
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>
            )
            
        }
    }

    conditionalActionRender() {
        if(this.state.actionListLoaded===true) {
            return(
                <View style={styles.topContainer}>
                    <Text style={styles.topText}>Top Action Movies</Text>
                    {/* <ActionMoviesComp />    */}
                    <FlatList
                        horizontal={true}
                        data={this.state.topAction}
                        renderItem={({ item }) => (
                        <View style={{margin: 10, alignContent: 'center', alignItems: 'center', width: 200, backgroundColor: 'grey'}}>
                            <TouchableHighlight onPress={() => {
                                    this.openModalFunc()
                                    this.setState({
                                                   modalstuffshown: true,
                                                   modalitems: item
                                                })
                                    this.modalrender() 
                                        }
                                    }>
                                <Image source={{uri:"https://image.tmdb.org/t/p/w500" + item.poster_path}} style={styles.topImages}/>
                            </TouchableHighlight>
                            <Text style={styles.originalTitle}>{item.original_title}</Text>
                            {/* <Button onPress={()=>{Alert.alert(item.original_title)}} title="hello"/> */}
                        </View>
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>
            )
            
        }
    }


    conditionalComedyRender() {
        if(this.state.topComedyLoaded===true) {
            return(
                <View style={styles.topContainer}>
                
                    <Text style={styles.topText}>Popular Comedy Movies</Text>
                    <FlatList
                        horizontal={true}
                        data={this.state.topComedy}
                        extraData={this.state}
                        renderItem={({ item }) => (
                        
                        <View style={{margin: 10, alignContent: 'center', alignItems: 'center', width: 200, backgroundColor: 'grey'}}>
                            <TouchableHighlight onPress={() => {
                                    this.openModalFunc()
                                    this.setState({
                                                   modalstuffshown: true,
                                                   modalitems: item
                                                })
                                    this.modalrender() 
                                        }
                                    }>
                                <Image source={{uri:"https://image.tmdb.org/t/p/w500" + item.poster_path}} style={styles.topImages}/>
                            </TouchableHighlight>
                            <Text style={styles.originalTitle}>{item.original_title}</Text>
                            {/* <Button onPress={()=>{this.props.onpictureclick(item.original_title)}} title="hello"/> */}
                            {/* <Button
                                onPress={() => {
                                    this.openModalFunc()
                                    // console.log("hey")
                                    this.setState({
                                                   modalstuffshown: true,
                                                   modalitems: item
                                                })
                                    this.modalrender(item) 
                                        }
                                    }
                                title="Open modal"
                            /> */}

                        </View>
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>
            )
            
        }
    }
   
    finconditional() {
        if(this.state.modalstuffshown===true) {
            return (               
                    <ScrollView>
                        <View style={styles.modalContainer}>
                            <Text style={styles.modalTitle}>{this.state.modalitems.original_title}</Text>
                            <Image source={{uri:"https://image.tmdb.org/t/p/w500" + this.state.modalitems.poster_path}} style={styles.modalPictures}/>           
                            <Text style={{fontSize: 30, textDecorationLine: 'underline', fontStyle: 'italic'}}>Overview</Text><Text style={styles.overview}>{this.state.modalitems.overview}</Text>
                            <Text style={styles.datevotetext}>Released Date: {this.state.modalitems.release_date}</Text>
                            {this.zeroVote()}
                            <Image source={{uri:"https://image.tmdb.org/t/p/w500" + this.state.modalitems.backdrop_path}} style={styles.modalPictures}/>
                        </View>
                    </ScrollView>             
            )
        }
    }
    mybuttonclick(stupidparam) {
        Alert.alert(stupidparam)
        
    }

    endreachedboy() {
        Alert.alert("hello buddy end reached")
    }



    modalrender() {
        return (
            <Modal
                visible={this.state.showModal}
                animationType={'slide'}
                onRequestClose={() => this.closeModalFunc()}
            >
                <View>
                    <View>         
                        {/* {this.state.modalstuffshown && <View><Text>{this.state.modalitems.id}</Text>
                                                            <Text>{this.state.modalitems.original_title}</Text>
                                                        </View>
                                                    } */}
                        <Button
                            onPress={() => this.closeModalFunc()}
                            title="Close"
                        >   
                        </Button>
                        {this.finconditional()}
                            {/* {console.log("fucking items", this.state.modalitems)} */}
                        {/* {console.log(this.state.modalstuffshown)}
                        {console.log("fucking items", this.state.modalitems)} */}
                        {/* {console.log("this item right here", item)} */}
                       
                        {/* <Text>{item.overview}</Text>
                        <Text>{item.release_date}</Text> */}
                    </View>
                </View>
            </Modal>
        )
    }

    conditionalHorrorRender() {
        if(this.state.topHorrorLoaded===true) {
            return(
                <View style={styles.topContainer}>
                
                        
                
                    <Text style={styles.topText}>Popular Horror Movies</Text>
                    <FlatList
                        onEndReached={this.endreachedboy}
                        horizontal={true}
                        data={this.state.topHorror}
                        extraData={this.state}
                        renderItem={({ item }) => (
                            
                        <View style={{margin: 10, alignContent: 'center', alignItems: 'center', width: 200, backgroundColor: 'grey'}}>
                        
                        <TouchableHighlight onPress={() => {
                                    this.openModalFunc()
                                    // console.log("hey")
                                    this.setState({
                                                   modalstuffshown: true,
                                                   modalitems: item
                                                })
                                    this.modalrender() 
                                        }
                                    }>
                                <Image source={{uri:"https://image.tmdb.org/t/p/w500" + item.poster_path}} style={styles.topImages}/>
                            </TouchableHighlight>
                            <Text style={styles.originalTitle}>{item.original_title}</Text>
                            
                        </View>
                        )}
                        keyExtractor={item => item.id}
                    />
                     
                </View>
            )
            
        }
    }
openModalFunc() {
    this.setState({showModal: true})
};

closeModalFunc() {
    this.setState({showModal: false})
}

zeroVote() {
    if(this.state.modalitems.vote_average==0) {
      return (
        <Text style={styles.datevotetext}>Not rated yet</Text>
      )
    }
    else return (
      <Text style={styles.datevotetext}>Rating: {this.state.modalitems.vote_average}</Text>
    )
  }

  introViewPager() {
      return (
        <View style={{flex: 1}}>
        <ViewPagerAndroid style={styles.viewPager} initialPage={0}>
          <View>
            <Image source={brak} style={{width: '100%'}} key="1"/>
          </View>
          <View>
            <Image source={athf} style={{width: '100%'}} key="2"/>
          </View>
        </ViewPagerAndroid>
        <ViewPagerAndroid style={styles.viewPager} initialPage={0}>
          <View>
            <Image source={brak} style={{width: '100%'}} key="1"/>
          </View>
          <View>
            <Image source={athf} style={{width: '100%'}} key="2"/>
          </View>
        </ViewPagerAndroid>
        </View>
      )
  }

render() {
    return (
    <View>      
      {this.conditionalTopPopular()}
      {this.conditionalActionRender()}
      {this.conditionalComedyRender()}
      {this.conditionalHorrorRender()}
      {this.modalrender()}
      {this.introViewPager()}
      <Text>HEYERAERAER</Text>
    </View>
    );
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
  modalContainer: {
    alignItems:'center',
    justifyContent: 'center',
    width: '95%',
    paddingBottom: 105,
  },
  modalTitle: {
    textAlign:'center',
    fontSize: 35,
    fontWeight: 'bold'
  },
  modalPictures: {
    height: 250, 
    width: 220,
    marginBottom: 3,
    marginTop: '5%',
    marginBottom: '10%',
  },
  topImages :{
      height: 250, 
      width: 220,
      marginBottom: 3,
  },
  overview: {
    textAlign: 'center',
    fontSize: 28,
    margin: '5%'
  },
  datevotetext: {
    fontSize: 25,
    marginTop: '5%',
    marginBottom: '5%',
    fontStyle: 'italic',
  },
  viewPager: {
    flex: 1
  },
  pageStyle: {
    alignItems: 'center',
    padding: 20,
    height: 50,
  }
});

//export default StackConst;


