import React, { useEffect, useRef } from "react";
import { Animated, Image, StyleSheet, Text, View } from "react-native";

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

const AnimatedGameCard = ({ game, index }) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View
      style={[
        styles.card,
        {
          opacity: opacity.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
        },
      ]}
      key={game.slug}
    >
      <GameCard game={game} />
    </Animated.View>
  );
};

export default AnimatedGameCard;

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
