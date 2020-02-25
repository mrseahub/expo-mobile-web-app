import { LinearGradient } from "$common/modules";
import { colors, theme } from "$common/theme";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { IButtonProps } from "./types";

export const Button: React.FC<IButtonProps> = props => {
  const gradientColors = props.isDisabled ? [colors.gray, colors.gray] : [colors.dark, colors.main];
  const textColor = props.isDisabled ? colors.black : colors.white;
  
  return (
    <TouchableOpacity disabled={props.isDisabled} onPress={props.onPress} style={theme.buttonRadius}>
      <LinearGradient
        colors={gradientColors}
        style={[styles.gradientContainer, theme.buttonRadius]}
        start={{ x: 0, y: 0.75 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={{ color: textColor }}>{props.text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
