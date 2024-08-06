import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const GameCard = ({ game }) => {
  return (
    <View key={game.slug} style={styles.card}>
      <Image source={{ uri: game.image }} style={styles.image} />
      <Text style={styles.title}>{game.title}</Text>
      <Text style={styles.description}>{game.description}</Text>
      <Text style={styles.score}>{game.score}</Text>
    </View>
  );
};

export default GameCard;

const styles = StyleSheet.create({
  safeAreaView: {
    margin: 20,
  },
  card: { marginBottom: 40 },
  image: {
    width: 107,
    height: 147,
    borderRadius: 10,
    alignSelf: "center",
  },
  title: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    marginBottom: 5,
    alignSelf: "center",
  },
  description: { color: "white", marginBottom: 10, alignSelf: "center" },
  score: { color: "yellow", fontSize: 20, alignSelf: "center" },
});
