import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions, Image, StatusBar } from "react-native";
import { AnimatedCircularProgress } from 'react-native-circular-progress';
var {dheight, dwidth} = Dimensions.get('window');
import { Button } from 'react-native-elements'
class Recommendation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fill: 50,
      color: "#00acf2"
    };
    this.preheat = this.preheat.bind(this)
  }

  preheat() {
    this.setState({
      fill: 69,
      color: "#ff5454"
    })
  }

  render() {
    return (
      <View>
        <View style={{marginBottom: 8, alignItems: 'center', flexDirection: 'row', flex: 1, backgroundColor: '#222', padding: 8}}>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <Text style={styles.title}>
          Good Morning. I will preheat you car by {new Date().getHours()}:{new Date().getMinutes()+10}
          </Text>
          <Button
              backgroundColor={'#c42b2b'}
              title='Preheat'
              onPress={this.preheat}
              buttonStyle={{borderRadius: 5}} />
        </View>
        <AnimatedCircularProgress
            size={120}
            width={20}
            fill={this.state.fill}
            tintColor={this.state.color}
            onAnimationComplete={() => console.log('onAnimationComplete')}
            backgroundColor="#3d5875">
              {
                (fill) => (
                  <Text style={styles.points}>
                    +{parseInt(fill/3)}°
                  </Text>
                )
              }
        </AnimatedCircularProgress>
        </View>

        <View style={{ padding: 16, alignItems: 'center', flexDirection: 'row', flex: 1, backgroundColor: '#222'}}>
        
        <Image
          style={{marginLeft: 16, width: 100, height: 100}}
          source={require('../assets/massage.png')}
        />
        <Text style={styles.title}>
        You have been in gym yesterday. Do you want muscle pain relief massage?
        </Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  title: {
    width: 160,
    fontSize: 16,
    marginLeft: 16,
    marginVertical: 8,
    fontWeight: "bold",
    color: "#fff",
    textAlign: 'center'
  },
  points: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: "bold",
    fontSize: 30,
    fontWeight: "100"
  },
});

export default Recommendation;
