import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const MenuContainer = ({ title, image, type, setType }) => {
  const handlePress = () => {
    setType(title.toLowerCase());
  };
  return (
    <TouchableOpacity onPress={handlePress} className="cursor-pointer">
      <View
        className={` p-2 shadow-sm rounded-full items-center justify-center ${
          type === title.toLowerCase() ? "bg-gray-100" : ""
        }`}
      >
        <Text className="text-black text-sm font-semibold uppercase tracking-widest">
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default MenuContainer;

const styles = StyleSheet.create({});
