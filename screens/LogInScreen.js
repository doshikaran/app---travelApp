import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CustomInput from "../components/CustomInput";
import { useForm } from "react-hook-form";
import CustomButton from "../components/CustomButton";
import SocialMediaButtons from "../components/SocialMediaButtons";
//import { auth } from "../firebase";

const Regex =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const LogInScreen = () => {
  const navigation = useNavigation();
  const { control } = useForm();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const onForgotPasswordPressed = () => {};
  
  const onpress = () => {
    navigation.navigate("SignUp");
  };

  {
    /*
const handleSignUp = () =>{
    auth.createUserWithEmailAndPassword(email, password).then(userCredentials => {
      const user = userCredentials.user
      console.log(user)
      console.log(user.email)
    })
    .catch(error => alert(error.message))
  }*/
  }

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className=" bg-white min-h-[100]:"
    >
      {/* Image */}
      <Image
        source={{ uri: "https://wallpaperaccess.com/full/903535.jpg" }}
        resizeMode="cover"
        style={{ width: "100%", aspectRatio: 16 / 9 }}
      />
      <View className=" p-10">
        <CustomInput
          name="email"
          placeholder="Email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: { value: Regex, message: "Email is invalid" },
          }}
        />
        <CustomInput
          name="password"
          placeholder="Password"
          secureTextEntry
          control={control}
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Minimum characters should be 8",
            },
          }}
        />

        <CustomButton text={"SIGN IN"} />
        <CustomButton
          text="FORGOT PASSWORD"
          type="TERTIARY"
          //onPress={onForgotPasswordPressed}
        />
        <View className=" items-center mb-4">
          <Text className=" text-sm font-semibold">OR</Text>
        </View>
        <SocialMediaButtons />
        <CustomButton
          text="CREATE AN ACCOUNT"
          onPress={onpress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default LogInScreen;

const styles = StyleSheet.create({});
