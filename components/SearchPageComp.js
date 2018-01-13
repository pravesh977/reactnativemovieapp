import React from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Image, ScrollView } from 'react-native';

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
                        <Text>Here are your Results</Text>
                        <FlatList
                            data={this.state.searchedResults}
                            renderItem={({ item }) => (
                            <View style={{margin: 10, alignContent: 'center', alignItems: 'center', width: 200, backgroundColor: 'grey'}}>
                                <Image source={{uri:"https://image.tmdb.org/t/p/w500" + item.poster_path}} style={{height:200, width: 150}}/>
                                <Text>{item.original_title}</Text>
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
                <Text style={searchstyler.container}>Search For Any Movies</Text>
                <TextInput
                    style={{height: 40, backgroundColor: 'pink'}}
                    placeholder="Type here to translate!"
                    onChangeText={(searchInput) => this.setState({searchInput})}
                    onSubmitEditing={this.submittedSearch}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.searchInput.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
                {this.conditionalSearchRender()}
            </View>
            );
        }
    }

const searchstyler = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
  },
  searchedContainer: {
      alignItems: 'center'
  }
});

export default SearchPageComp;