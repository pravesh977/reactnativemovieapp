import React from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Image, ScrollView, Button, TouchableHighlight } from 'react-native';

class SearchPageComp extends React.Component {
    constructor(props){
    super(props);
    this.state = {
            searchInput: '',
            searchedLoaded: false,
            searchedResults: [],
        }
    this.submittedSearch = this.submittedSearch.bind(this);
    this.conditionalSearchRender = this.conditionalSearchRender.bind(this);
    }

    onChangetext () {

    }

    submittedSearch() {
        //Alert.alert("submnitted now fetch")
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=96c990ebfd368655c66e6d831b4e42fb&query=${this.state.searchInput}`)
            .then((response)=>{
                response.json()
                    .then((searchedJson) => {
                        //console.log(popularMovies.results[0])
                        this.setState({
                            searchedLoaded: true,
                            searchedResults: searchedJson.results,
                        })
                    })
        })
        //console.log(this.state.searchedResults)
    }

    conditionalSearchRender() {
        if(this.state.searchedLoaded===true) {
            return(
                <ScrollView>
                    <View style={searchstyler.searchedContainer}>
                    {/* <MapTopMovies topPopularMovies={this.state.topPopularMovies} /> */}
                    {/* Going to use FlatList because it is giving an error when using horizontal={true} */}
                        <Text style={{fontSize: 24, fontWeight: 'bold'}}>Here are your Results</Text>
                        <FlatList
                            data={this.state.searchedResults}
                            renderItem={({ item }) => (
                            <View style={{margin: 10, alignContent: 'center', alignItems: 'center'}}>

                            <TouchableHighlight onPress={() => {
                                    this.props.openModalFunc()
                                    // console.log("searcheditem", item)
                                    // this.setState({
                                    //                modalstuffshown: true,
                                    //                modalitems: item
                                    //             })
                                    this.props.passingstates(item)
                                    // this.props.modalrender() 
                                        }
                                    }>
                                <Image source={{uri:"https://image.tmdb.org/t/p/w500" + item.poster_path}} style={searchstyler.searchedImage}/>
                            </TouchableHighlight>

                                {/* <TouchableHighlight onPress={()=>{this.props.newalerter(item.original_title)}}>
                                <Image source={{uri:"https://image.tmdb.org/t/p/w500" + item.poster_path}} style={searchstyler.searchedImage}/>
                                </TouchableHighlight> */}
                                
                                <Text style={searchstyler.originalTitle}>{item.original_title}</Text>
                                {/* <Button onPress={()=>{this.props.newalerter()}} title="hello"/>
                                <Button onPress={()=>{this.props.newalerter()}} title="modalyo" /> */}
                            </View>
                            )}
                            keyExtractor={item => item.id}
                        />
                    </View>
                </ScrollView>
            )
            
        }
    }

    render() {
        return (
            <View>
                <Text style={searchstyler.searchAnyText}>Search For Any Movies</Text>
                <TextInput
                    style={{height: 40, fontWeight: 'bold', textAlign: 'center', fontSize: 26, color: '#4540E8'}}
                    placeholder="Search For a Movie"
                    placeholderTextColor = 'black'
                    onChangeText={(searchInput) => this.setState({searchInput})}
                    onSubmitEditing={this.submittedSearch}
                />        
                <Text style={{padding: 10, fontSize: 42}}>
                    {/* {this.state.searchInput.split(' ').map((word) => word && '🍕').join(' ')} */}
                </Text>
                {this.conditionalSearchRender()}
            </View>
            );
        }
    }

const searchstyler = StyleSheet.create({
  searchAnyText: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    backgroundColor: 'pink',
    borderRadius: 50
  },
  searchedContainer: {
      alignItems: 'center',
      width: '100%',
  },
  searchedImage: {
    height:320, 
    width: 250,
  },
  originalTitle: {
      fontSize: 28,
      backgroundColor: '#C4D9E8',
      borderRadius: 5,
  }
});

export default SearchPageComp;