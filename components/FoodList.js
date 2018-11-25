import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList, Keyboard, Linking } from "react-native";

import SingleItem from './SingleItem';
import { foodMarkers } from '../data/markers';

class FoodList extends Component {

    constructor(props) {
    super(props);
    this.state = {
       news: null,
       loaded: true,
       foodList: foodMarkers
    }
}

  // componentDidMount() {
  //   fetch('http://www.fit-technology.fi/wp-json/wp/v2/posts')
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //       this.setState({
  //          wpNews: responseData,
  //          loaded: true
  //       });
  //     })
  //     .done();
  //     };

    
  render() {
    return (
        <View>
        {this.state.loaded ? 
        <FlatList
          horizontal={true}
          data={this.state.foodList}
          renderItem={({item}) => {
            handleClick = () => {
                const url = item.url
                Linking.canOpenURL(url).then(supported => {
                 if (supported) {
                Linking.openURL(url);
                } else {
              console.log('Don\'t know how to open URI: ' + url);
               }
              });
              };
    
                return (
                    <SingleItem
                        item={item}
                        onPress={() => {handleClick()}}
                    />
                )
          }}
          keyExtractor={item => item.latlng.latitude.toString()}
        /> : <View />}
        </View> 
    );
  }
}

const styles = StyleSheet.create({
   newsScroll: {
    backgroundColor: 'transparent',
  },
  });

export default FoodList;

