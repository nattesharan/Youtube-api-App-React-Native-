import React,{ Component } from 'react';
import {View,Image,Text,TouchableOpacity} from 'react-native';

const ListItem = (props) => {
    let video = props.video;
    console.log(video);
    let imageUrl = video.snippet.thumbnails.high.url;
    return (
        <TouchableOpacity onPress={() => props.activateVideo(video)}>
        <View style = {{marginBottom: 10}}>
        <Image source={{uri: imageUrl}} style={{width: 300, height: 110}}/>
        <Text>{video.snippet.title}</Text>
        </View>
        </TouchableOpacity>
    )
}

export default ListItem;