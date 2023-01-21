import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CardContainer = ({ location, imageSrc, title, data }) => {
  const navigation = useNavigation();
  const onpress = () => {
    navigation.navigate("Info", { param: data });
  }

  return (
    <TouchableOpacity
      onPress={onpress}
      className="rounded-md border border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-1/2  my-2"
    >
      <Image
        source={{ uri: imageSrc }}
        className="w-full h-40 rounded-md object-cover"
      />

      {title && (
        <>
          <Text className=" text-black text-sm font-medium">
            {title?.length > 14 ? `${title.slice(0, 14)}..` : title}
          </Text>

          <View>
            <FontAwesome name="map-marker" size={20} color="black" />
            <Text className="text-black mt-2 text-[14px] font-bold">
              {location?.length > 18 ? `${title.slice(0, 18)}..` : location}
            </Text>
          </View>
        </>
      )}
    </TouchableOpacity>
  );
};

export default CardContainer;
