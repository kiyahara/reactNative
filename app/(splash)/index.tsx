import { useNavigation, useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Button, StyleSheet, Text, View, ImageBackground } from "react-native";

export type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
};

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    // Simulate a loading process or any condition you want before navigating
    const timeout = setTimeout(() => {
      router.replace("/(tabs)");
    }, 2000); // Navigate to tabs after 2 seconds

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("@/assets/images/splash.png")}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
});
