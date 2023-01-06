import {
  Text,
  SafeAreaView,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className=" bg-white flex-1">
      {/* Header */}
      <View className=" flex-row items-center space-x-3 px-10">
        <Image
          className=" h-20 w-20 bg-white"
          source={{
            uri: "https://i.pinimg.com/564x/17/f9/e9/17f9e98afe43259d5d53a3d2cb01a6fe.jpg",
          }}
        />
        <View>
          <Text className=" uppercase tracking-widest text-[20px] font-semibold">
            Voyage le Monde
          </Text>
        </View>
      </View>

      {/* desc */}
      <View className=" px-10 flex items-center">
        <Text className=" font-bold text-lg tracking-wider">
          Travel Anywhere In The {"\n"}World Without Any Hassle
        </Text>
        <Text className=" mt-5 text-[15px] font-extralight">
          If you like to travel a lot, this is your place. Here you can travel
          with your favorite tour and enjoy ...
        </Text>
      </View>

      {/* footer */}
      <View className=" flex-1 relative items-center justify-center  ">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-in-out"
          className=" w-full h-full object-cover mt-10 rounded-3xl"
          source={{
            uri: "https://i.pinimg.com/736x/f0/08/96/f00896b2e5b724a1c981e0b53f9c7cac.jpg",
          }}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("Discover")}
          className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#fefefe] rounded-full items-center justify-center cursor-pointer"
        >
          <Animatable.View
            animation={"pulse"}
            easing="ease-in-out"
            iterationCount={"infinite"}
            className="w-20 h-20 items-center justify-center rounded-full"
          >
            <Image
              className=" h-12 w-12 bg-white rounded-full hover:bg-slate-400"
              source={{
                uri: "https://i.pinimg.com/564x/17/f9/e9/17f9e98afe43259d5d53a3d2cb01a6fe.jpg",
              }}
            />
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
