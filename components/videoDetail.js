import React, { Component } from 'react';
import { Text,View,WebView } from 'react-native';
const VideoDetail = (props) => {
    let video = props.video;
    if (!video) {
        return (
            <Text>Loading !!</Text>
        );
    } else {
        const videoId = video.id.videoId;
        
        const url = `https://www.youtube.com/embed/${videoId}`;
        return (
            <View style={{flex: 1}}>
            <Text style={{color: '#FF0000',marginBottom:5}}>{video.snippet.title}</Text>
            <View style={{flex: 1,flexDirection: 'column'}}>
            <WebView javaScriptEnabled={true}
            source={{uri: `${url}?rel=0&autoplay=0&showinfo=0&controls=0`}} style={{minWidth:300,maxHeight:120}}/>
            </View>
            </View>
        );
    }
}

export default VideoDetail;