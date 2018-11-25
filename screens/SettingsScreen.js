import React from "react";
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import FoodList from "../components/FoodList";
import ActivityList from "../components/ActivityList";
import Recommendation from "../components/Recommendation";
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: "Recomendations",
    headerTintColor: "#00acf2",
    headerStyle: {
      backgroundColor: "#000",
      color: "#fff"
    }
  };
  constructor(props) {
    super(props);
    this.state = {
      fill: 80,
      color: "#00acf2",
      carLocked: true
    };
    this.lockCar = this.lockCar.bind(this)
  }

  lockCar() {
    alert('Car unlocked')
    this.setState({carLocked: !this.state.carLocked})
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.grid}>
          <View style={styles.row}>
            <View style={styles.col}>
              <AnimatedCircularProgress
                size={100}
                width={20}
                fill={this.state.fill}
                tintColor={this.state.color}
                onAnimationComplete={() => console.log("onAnimationComplete")}
                backgroundColor="#3d5875"
              >
                {fill => (
                  <Text style={styles.points}>{parseInt(fill)}%</Text>
                )}
              </AnimatedCircularProgress>
              <Text style={styles.title}>Battery level</Text>
            </View>
            <View style={styles.col}>
            <Image
              style={{ width: 100, height: 100}}
              source={require('../assets/parked.png')}
              onPress={()=>{alert('p')}}
            />
              <Text style={styles.title}>Status</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.col}>
            <TouchableOpacity onPress={()=>{this.lockCar()}}>
            <Image
              style={{width: 90, height: 90}}
              source={this.state.carLocked ? require('../assets/padlock.png') : require('../assets/lock.png')}
            />
              <Text style={styles.title}>Unlock Car</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.col}>

            <Image
              style={{ width: 90, height: 90}}
              source={require('../assets/group.png')}
            />
              <Text style={styles.title}>Change user</Text>
            </View>
          </View>
          <View style={styles.col}>
          <Text style={styles.title}>Maintanance in 400 days</Text>
          <Image
              style={{ width: 300, resizeMode: 'contain' }}
              source={require('../assets/maintanance.png')}
            />
            
          </View>
        </View>
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
    fontSize: 16,
    marginTop: 16,
    fontWeight: "bold",
    color: "#FFF"
  },
  grid: {
    marginTop: 16,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  col: {
    flexDirection: "column",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  row: {
    marginBottom: 24,
    flexDirection: "row",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  points: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: "bold",
    fontSize: 24,
    fontWeight: "100"
  },
});
