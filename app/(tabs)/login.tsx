import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function LoginScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.backGroundHeader}>
        <Image
          source={require("@/assets/images/logo.png")}
          style={styles.reactLogo}
        />
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.textColor}>
          Welcome!
        </ThemedText>
        <HelloWave />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7B8F7E",
  },
  titleContainer: {
    flex: 3,
    alignItems: "center",
    padding: 50,
    gap: 8,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    textAlign: "center",
    backgroundColor: "black",
  },
  backGroundHeader: {
    flex: 2,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    height: "30%",
    width: "100%",
    backgroundColor: "#7B8F7E",
  },
  reactLogo: {
    width: "50%",
    height: "50%",
    gap: 8,
  },
  textColor: {
    color: "white",
  },
});
