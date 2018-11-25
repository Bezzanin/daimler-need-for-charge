import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  View
} from "react-native";


export default function SingleItem({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.imgContainer} onPress={onPress}>
      <ImageBackground
        source={item.image}
        // onLoadEnd={()=> { this.setState({ loading: false })}}
        style={styles.container}
        imageStyle={{ resizeMode: "contain" }}
      >
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.date}>Based on {item.base}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  imgContainer: {
    marginHorizontal: 16,
    marginVertical: 16
  },
  container: {
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "transparent",
    borderWidth: 0,
    borderRadius: 10,
    paddingHorizontal: 14,
    width: 240,
    height: 120,
    paddingVertical: 16,
    marginVertical: 1,
    // shadowColor: "#3076F0",
    // shadowOpacity: 0.5,
    // shadowRadius: 7,
    // shadowOffset: {
    //   height: 3,
    //   width: 0
    // },

    zIndex: 11
  },
  team: {
    flexDirection: "row",
    flexWrap: "nowrap",
    alignItems: "center"
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
    marginTop: 0,
  },

  description: {
    fontSize: 12,
    marginBottom: 12,
    color: "#FFF",
    margin: 2,
    fontWeight: "bold",
  },
  date: {
    fontSize: 12,
    color: "#FFF",
    margin: 2,
    fontWeight: "bold"
  }
});
