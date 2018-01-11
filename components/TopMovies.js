import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import homemoviespic from '../images/homemovies.jpg';
import MapTopMovies from './MapTopMovies';
import ActionMoviesComp from './ActionMoviesComp';


class TopMovies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiTopLoaded: false,
            actionListLoaded: false,
            topComedyLoaded: false,
            topHorrorLoaded: false,
            topPopularMovies: [],
            topAction: [],
            topComedy: [],
            topHorror: [],
        }
        this.conditionalTopPopular = this.conditionalTopPopular.bind(this);
        this.conditionalActionRender = this.conditionalActionRender.bind(this);
        this.conditionalComedyRender = this.conditionalComedyRender.bind(this);
        this.conditionalHorrorRender = this.conditionalHorrorRender.bind(this);
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
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=96c990ebfd368655c66e6d831b4e42fb&language=en-US&sort_by=vote_count.desc&include_adult=false&include_video=false&page=1&with_genres=35&without_genres=28')
        .then((response)=>{
            response.json()
                .then((topComedyfilms) => {
                        //console.log(popularMovies.results[0])
                    this.setState({
                        topComedyLoaded: true,
                        topComedy: topComedyfilms.results,
                        })
                        // {console.log("comedy woohoo yeahhh", this.state.topComedy)}
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
                            <Image source={{uri:"https://image.tmdb.org/t/p/w500" + item.poster_path}} style={{height: 150, width: 120}}/>
                            <Text style={styles.originalTitle}>{item.original_title}</Text>
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
                            <Image source={{uri:"https://image.tmdb.org/t/p/w500" + item.poster_path}} style={{height: 150, width: 120}}/>
                            <Text style={styles.originalTitle}>{item.original_title}</Text>
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
                        renderItem={({ item }) => (
                        
                        <View style={{margin: 10, alignContent: 'center', alignItems: 'center', width: 200, backgroundColor: 'grey'}}>
                            <Image source={{uri:"https://image.tmdb.org/t/p/w500" + item.poster_path}} style={{height: 150, width: 120}}/>
                            <Text style={styles.originalTitle}>{item.original_title}</Text>
                        </View>
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>
            )
            
        }
    }

    conditionalHorrorRender() {
        if(this.state.topHorrorLoaded===true) {
            return(
                <View style={styles.topContainer}>
                    <Text style={styles.topText}>Popular Horror Movies</Text>
                    <FlatList
                        horizontal={true}
                        data={this.state.topHorror}
                        renderItem={({ item }) => (
                        
                        <View style={{margin: 10, alignContent: 'center', alignItems: 'center', width: 200, backgroundColor: 'grey'}}>
                            <Image source={{uri:"https://image.tmdb.org/t/p/w500" + item.poster_path}} style={{height: 150, width: 120}}/>
                            <Text style={styles.originalTitle}>{item.original_title}</Text>
                        </View>
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>
            )
            
        }
    }


render() {
    return (
    <View>
      {/* <Image source={homemoviespic} style={{flex: 1}}/> */}
      {this.conditionalTopPopular()}
      {this.conditionalActionRender()}
      {this.conditionalComedyRender()}
      {this.conditionalHorrorRender()}
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
  }
});



export default TopMovies;