import React from "react";
import { Platform } from "react-native";
import { MobileApp } from "./src/mobile";
import { WebApp } from "./src/web";

export default () => {
  if (Platform.OS === "web") {
    return <WebApp />;
  }
  return <MobileApp />;
};
