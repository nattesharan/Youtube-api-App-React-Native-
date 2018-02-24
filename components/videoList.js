import React, { Component } from 'react';
import { View } from 'react-native';
import ListItem from './ListItem';
const VideoList = (props) => {
    const listItems = props.videos.map((video) => {
        return (
            <ListItem key={video.etag} video={video} activateVideo={props.activateVideo}/>
        )
    })
    return (
        <View style={{flex: 1}}>
            {listItems}
        </View>
    )
}

export default VideoList;