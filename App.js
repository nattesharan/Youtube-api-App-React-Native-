import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import SearchBar from './components/searchbar';
import VideoDetail from './components/videoDetail';
import VideoList from './components/videoList'
import YTSearch from 'youtube-api-search';
const apiKey = 'AIzaSyB6MdCnJ3qqlX3oYJahhuXQyBLmOfWlw4o';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      activeVideo: null,
      searchTerm: ''
    };
    this.YoutubeSearch(this.state.searchTerm);
  }
  YoutubeSearch(term) {
    YTSearch({key:apiKey,term: term}, (data) => {
      this.setState({
        videos: data,
        activeVideo: data[0]
      });
    });
  }
  searchYoutube(term) {
    this.setState({searchTerm: term});
    this.YoutubeSearch(term);
  }
  setVideo(video) {
    console.log('acticeejkcndkcnzd',video);
    this.setState({
      activeVideo: video
    });
  }
  render() {
    console.log(this.state.videos);
    return (
      <View style={styles.container}>
          <SearchBar onChangeSearchTerm ={(term) => this.searchYoutube(term)}/>
          <VideoDetail video={this.state.activeVideo} style={{flex: 1}}/>
        <ScrollView>
          <VideoList videos = {this.state.videos} activateVideo={(video) => this.setVideo(video)}/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  scrollcontainer: {
    flex:1,
    alignItems: 'flex-start'
  }
});
