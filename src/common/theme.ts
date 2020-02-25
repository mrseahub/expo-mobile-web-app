import { StyleSheet, Platform } from "react-native";

export const colors = {
  main: "#4237AF",
  dark: "#2262AA",
  gray: "#EFEFEF",
  black: "#08192D",
  white: "white"
};

export const theme = StyleSheet.create({
  buttonRadius: Platform.select({ ios: { borderRadius: 8 }})
});