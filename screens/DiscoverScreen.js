import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import MenuContainer from "../components/MenuContainer";
import { AntDesign } from "@expo/vector-icons";
import CardContainer from "../components/CardContainer";
import { getPlacesData } from "../api";

const DiscoverScreen = () => {
  const navigation = useNavigation();
  const [type, setType] = useState("restaurants");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setresults] = useState([]);
  const [bl_lat, setBl_lat] = useState(null);
  const [bl_lng, setBl_lng] = useState(null);
  const [tr_lat, setTr_lat] = useState(null);
  const [tr_lng, setTr_lng] = useState(null);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getPlacesData(bl_lat, bl_lng, tr_lat, tr_lng, type).then((data) => {
      setresults(data);
      setInterval(() => {
        setIsLoading(false);
      }, 1000);
    });
  }, [bl_lat, bl_lng, tr_lat, tr_lng, type]);

  return (
    <SafeAreaView className=" relative flex-1 bg-white">
      {/* header */}
      <View className=" px-10 py-8 flex flex-row items-center justify-between">
        <Text className=" uppercase text-xl tracking-wider font-semibold">
          Discover
        </Text>
        <View>
          <Image
            className=" h-11 w-11 rounded-full"
            source={{
              uri: "https://i.pinimg.com/564x/c5/a4/cf/c5a4cf7989095eccca4f4109922f93b4.jpg",
            }}
          />
        </View>
      </View>

      {/* search bar */}
      <View className=" px-10 rounded-full shadow-lg flex-row py-2 border-1">
        <GooglePlacesAutocomplete
          GooglePlacesDetailsQuery={{ fields: "geometry" }}
          fetchDetails={true}
          placeholder="SEARCH"
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(details?.geometry?.viewport);
            setBl_lat(details?.geometry?.viewport?.southwest?.lat);
            setBl_lng(details?.geometry?.viewport?.southwest?.lng);
            setTr_lat(details?.geometry?.viewport?.northeast?.lat);
            setTr_lng(details?.geometry?.viewport?.northeast?.lng);
          }}
          query={{
            key: "AIzaSyDF2_sEpAHpDKVGNbQA_Ru6xdSezi_jQ3E",
            language: "en",
          }}
        />
      </View>

      {isLoading ? (
        <View className=" flex-1 items-center justify-center">
          <ActivityIndicator size="small" color="black" />
        </View>
      ) : (
        <ScrollView>
          <View className=" flex-row items-center justify-between px-8 mt-5 cursor-pointer">
            <MenuContainer
              key={"attractions"}
              title="Attractions"
              type={type}
              setType={setType}
            />
            <MenuContainer
              key={"hotels"}
              title="Hotels"
              type={type}
              setType={setType}
            />
            <MenuContainer
              key={"restaurants"}
              title="Restaurants"
              type={type}
              setType={setType}
            />
          </View>

          {/* explore options */}
          <View>
            <View className="mt-5">
              <TouchableOpacity className=" flex-row items-center space-x-2 justify-center">
                <Text className=" uppercase text-sm font-semibold text-gray-400">
                  Explore
                </Text>
                <AntDesign name="arrowright" size={24} color="gray" />
              </TouchableOpacity>
            </View>

            <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
              {results?.length > 0 ? (
                <>
                  {results?.map((data, i) => (
                    <CardContainer
                      key={i}
                      imageSrc={
                        data?.photo?.images?.medium?.url
                          ? data?.photo?.images?.medium?.url
                          : "https://cdn-icons-png.flaticon.com/512/1147/1147231.png"
                      }
                      title={data?.name}
                      location={data?.location_string}
                      data={data}
                    />
                  ))}
                </>
              ) : (
                <>
                  <View className=" items-center justify-center space-y-10 w-full h-[400px]">
                    <Image
                      source={{
                        uri: "https://cdn-icons-png.flaticon.com/512/1147/1147231.png",
                      }}
                      className=" h-32 w-32 object-cover"
                    />
                    <Text className="text-xl uppercase tracking-widest text-black font-semibold">
                      Sorry data not found
                    </Text>
                  </View>
                </>
              )}
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default DiscoverScreen;
