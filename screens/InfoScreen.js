import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Feather,
  FontAwesome5,
  FontAwesome,
  AntDesign,
  Foundation,
} from "@expo/vector-icons";

const InfoScreen = ({ route }) => {
  const navigation = useNavigation();
  const data = route?.params?.param;

  const onpress = () => {
    navigation.navigate("Discover");
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className=" flex-1 relative bg-white">
      <ScrollView className=" flex-1 p-5">
        {/* image */}
        <View className=" relative bg-white shadow-xl">
          <Image
            className=" w-full h-72 object-cover rounded-2xl"
            source={{
              uri: data?.photo?.images?.large?.url
                ? data?.photo?.images?.large?.url
                : "https://cdn-icons-png.flaticon.com/512/1147/1147231.png",
            }}
          />
          <View className=" top-5 absolute px-6 flex-row inset-x-0 justify-between">
            <TouchableOpacity
              onPress={onpress}
              className=" bg-black w-8 h-8 items-center justify-center rounded-3xl"
            >
              <Feather name="arrow-left-circle" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => console.warn("Added to favorites")}
              className=" bg-black w-8 h-8 items-center justify-center rounded-3xl"
            >
              <FontAwesome5 name="heartbeat" size={18} color="white" />
            </TouchableOpacity>
          </View>
          <View className=" bottom-5 absolute px-6 flex-row inset-x-0 justify-between">
            <View className=" flex-row items-center space-x-3">
              <Text className=" text-gray-300 font-extrabold text-[10px] tracking-widest">
                {data?.price_level}
              </Text>
              <Text className=" text-gray-400 font-extrabold text-[20px] tracking-widest">
                {data?.price}
              </Text>
            </View>
            <View className=" bg-teal-400 rounded-2xl p-2">
              <Text className=" text-[8px] uppercase tracking-widest font-bold">
                {data?.open_now_text}
              </Text>
            </View>
          </View>
        </View>

        {/* name and place */}
        <View className=" mt-5">
          <Text className=" font-bold tracking-widest text-lg uppercase">
            {data?.name}
          </Text>

          <View className=" flex-row items-center mt-2 space-x-3">
            <FontAwesome name="map-marker" size={20} color="black" />
            <Text className=" text-gray-700 tracking-wider font-light text-[15px]">
              {data?.location_string}
            </Text>
          </View>
        </View>

        {/* ratings, price, bearing*/}
        <View className=" mt-5 flex-row">
          {data?.rating && (
            <View className=" flex-row space-x-3 items-center bg-slate-100  p-1 w-32 rounded-full">
              <View className=" bg-red-200 p-2 rounded-lg w-8 h-8 items-center">
                <AntDesign name="star" size={16} color="black" />
              </View>
              <View>
                <Text className=" text-xs tracking-widest">{data?.rating}</Text>
                <Text className=" text-xs tracking-widest">Ratings</Text>
              </View>
            </View>
          )}

          {data?.price_level && (
            <View className=" flex-row space-x-3 items-center bg-slate-100  p-1 w-32 rounded-full">
              <View className=" bg-red-200 p-2 rounded-lg w-8 h-8 items-center justify-center">
                <Foundation name="dollar" size={18} color="black" />
              </View>
              <View>
                <Text className=" text-xs tracking-widest">
                  {data?.price_level}
                </Text>
                <Text className=" text-xs tracking-widest">Price Level</Text>
              </View>
            </View>
          )}

          {data?.bearing && (
            <View className=" flex-row space-x-3 items-center bg-slate-100  p-1 w-32 rounded-full">
              <View className=" bg-red-200 p-2 rounded-lg w-8 h-8 items-center justify-center">
                <Foundation name="map" size={16} color="black" />
              </View>
              <View>
                <Text className=" text-xs tracking-widest">
                  {data?.bearing}
                </Text>
                <Text className=" text-xs tracking-widest">Bearing</Text>
              </View>
            </View>
          )}
        </View>

        {/* descriptopn */}
        {data?.description && (
          <View className=" mt-5">
            <Text className=" tracking-widest font-medium text-sm ">
              {data?.description}
            </Text>
          </View>
        )}

        {/* cuisine */}
        {data?.cuisine && (
          <View className=" flex-row gap-2 flex-wrap mt-3 items-center justify-center">
            {data?.cuisine.map((n) => (
              <TouchableOpacity
                key={n.key}
                className="px-2 py-1 rounded-md bg-emerald-200"
              >
                <Text>{n.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        <View className=" space-y-2 mt-4 bg-gray-100 rounded-2xl px-4 py-2">
          {data?.phone && (
            <View className="items-center flex-row space-x-6">
              <FontAwesome name="phone" size={18} color="black" />
              <Text className="text-sm font-medium">{data?.phone}</Text>
            </View>
          )}
          {data?.email && (
            <View className="items-center flex-row space-x-6">
              <FontAwesome name="envelope" size={18} color="black" />
              <Text className="text-sm font-medium tracking-wider">
                {data?.email}
              </Text>
            </View>
          )}
          {data?.address && (
            <View className="items-center flex-row space-x-6">
              <FontAwesome name="map-pin" size={18} color="black" />
              <Text className="text-sm font-medium tracking-widest">
                {data?.address}
              </Text>
            </View>
          )}

          <View className="mt-2 p-5 rounded-lg bg-black items-center justify-center mb-12">
            <Text 
            onPress={() => console.warn(" booking confirm")}
            className="text-lg text-white font-semibold uppercase tracking-wider cursor-pointer">
              Book Now
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InfoScreen;
