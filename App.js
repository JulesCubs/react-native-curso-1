import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

// import icon from './assets/icon.png'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Abrimos las aplicación</Text>
      <Image
        source={{
          uri: "https://img.asmedia.epimg.net/resizer/v2/W5XTLTDBR5HBLGGJ6HAU7NRDNU.jpg?auth=9a5c61ba0c57bda64c5b30ab527153b563cb919a3c3d8a8fc57f9564278e1b4d&width=360",
        }}
        style={{ width: 360, height: 450, resizeMode: "contain" }}
      />
      <Button title="Pulsa aquí" onPress={() => alert("Hola")} />
      <TouchableHighlight
        underlayColor={"#09f"}
        onPress={() => alert("Chao")}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "red",
          borderRadius: 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>Este es otro boton</Text>
      </TouchableHighlight>
      <Pressable
        onPress={() => {
          alert("Que mas???");
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "rgb(210,230,255)" : "white",
          },
          styles.wrapperCustom,
        ]}
      >
        {({ pressed }) => (
          <Text style={{ fontSize: pressed ? 32 : 16 }}>
            {pressed ? "Este tambien" : "O no?!!!"}
          </Text>
        )}
      </Pressable>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
