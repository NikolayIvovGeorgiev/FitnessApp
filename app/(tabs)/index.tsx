import { Image, StyleSheet, Platform, Button, Text, View } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useTranslation } from "react-i18next";
import i18n from "@/i18n";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function HomeScreen() {
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();
  const isFirstLoad = useSelector(
    (state: any) => (
     state.firstLoad.isFirstLoad
    )
  );

  const changeLanguage = (lang: any) => {
    return () => {
      i18n.changeLanguage(lang);
    };
  };
  useEffect(() => {
    if (isFirstLoad) {
      dispatch({ type: "SET_FIRST_LOAD", payload: false });
    }
  }, []);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">{t(`basic.welcome`)}</ThemedText>
        <HelloWave />
      </ThemedView>
      <Button onPress={changeLanguage("en")} title={"EN"} />
      <Button onPress={changeLanguage("bg")} title={"BG"} />
      <ThemedView style={styles.stepContainer}>
        <Text className="text-red-500">TEST NATIVE WIND PLZ OMG</Text>
        <View className="p-4">
        <Text className="text-2xl font-bold mb-4">Choose a Color Palette</Text>
        </View>


        <ThemedText type="subtitle">{t("basic.step")} 1: Try it</ThemedText>
        <ThemedText>
          Edit{" "}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{" "}
          to see changes. Press{" "}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: "cmd + d",
              android: "cmd + m",
              web: "F12",
            })}
          </ThemedText>{" "}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle" className="">
          Step 2: Explore
        </ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this
          starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{" "}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText>{" "}
          to get a fresh <ThemedText type="defaultSemiBold">app</ThemedText>{" "}
          directory. This will move the current{" "}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{" "}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
