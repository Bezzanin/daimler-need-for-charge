import React from "react";
import { ScrollView, StyleSheet, Text, StatusBar } from "react-native";
import FoodList from '../components/FoodList'
import ActivityList from '../components/ActivityList';
import Recommendation from '../components/Recommendation'

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: "Recomendations",
    headerTintColor: '#00acf2',
    headerStyle: {
      backgroundColor: '#000',
      color: '#fff'
    },
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <StatusBar barStyle="light-content"/>
        <Recommendation />
        <Text style={styles.title}>Breakfast places: </Text>
        <FoodList />
        <Text style={styles.title}>Activity:</Text>
        <ActivityList />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000"
  },
  title: {
    fontSize: 28,
    marginLeft: 16,
    marginTop: 16,
    fontWeight: "bold",
    color: "#FFF"
  }
});
