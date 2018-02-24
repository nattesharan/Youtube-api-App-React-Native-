import React, { Component } from 'react';
import { TextInput,Button,StyleSheet,View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
    }
    search(term) {
        this.setState({ term: term });
        this.props.onChangeSearchTerm(term);
    }
    render() {
        return (
            <View style={styles.searchBar}>
                <View>
                <TextInput style={{height: 50}} placeholder="Enter Search Term" value={this.state.term} onChangeText = {(text) => this.search(text)}/>
                </View>
                <View style={{marginLeft: 5}}>
                <Icon name='search' size={20} color="#000000" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    searchBar: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent:'space-between',
        marginTop: 15
    }
});

export default SearchBar;