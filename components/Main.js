import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, View } from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import GameCard from "./GameCard";

// import icon from './assets/icon.png'

export default function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((games) => setGames(games));
  });
  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      {games.length === 0 ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator color={"#dd6"} size={"large"} />
        </View>
      ) : (
        <ScrollView>
          {games.map((game) => (
            <GameCard key={games.slug} game={game} />
          ))}
        </ScrollView>
      )}
      <StatusBar style="light" />
    </View>
  );
}
