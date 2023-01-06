import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import CustomInput from "../components/CustomInput";
import { useForm } from "react-hook-form";
import CustomButton from "../components/CustomButton";
import SocialMediaButtons from "../components/SocialMediaButtons";

const Regex =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignupScreen = () => {
  const navigation = useNavigation();
  const { control, watch } = useForm();
  const pwd = watch("password");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const onTermsOfUsePressed = () => {
    console.warn("onTermsOfUsePressed");
  };

  const onPrivacyPressed = () => {
    console.warn("onPrivacyPressed");
  };

  const onpress = () => {
    navigation.navigate("Home");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className=" py-24 px-12 items-center">
        <Text className=" text-lg font-bold text-slate-900 mb-5">
          CREATE AN ACCOUNT
        </Text>

        <CustomInput
          name="name"
          control={control}
          placeholder="FULL NAME"
          rules={{
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name should be at least 3 characters long",
            },
            maxLength: {
              value: 24,
              message: "Name should be max 24 characters long",
            },
          }}
        />
        <CustomInput
          name="email"
          control={control}
          placeholder="EMAIL"
          rules={{
            required: "Email is required",
            pattern: { value: Regex, message: "Email is invalid" },
          }}
        />
        <CustomInput
          name="password"
          control={control}
          placeholder="PASSWORD"
          secureTextEntry
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password should be at least 8 characters long",
            },
          }}
        />
        <CustomInput
          name="password-repeat"
          control={control}
          placeholder="REPEAT PASSWORD"
          secureTextEntry
          rules={{
            validate: (value: any) => value === pwd || "Password do not match",
          }}
        />
        <CustomButton text={"REGISTER"} />
        <Text className=" m-5">
          By registering, you confirm that you accept our{" "}
          <Text className=" text-orange-500" onPress={onTermsOfUsePressed}>
            Terms of Use
          </Text>{" "}
          and{" "}
          <Text className=" text-orange-500" onPress={onPrivacyPressed}>
            Privacy Policy
          </Text>
        </Text>

        <SocialMediaButtons />

        <CustomButton
          text="Have an account? Sign in"
          onPress={onpress}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({});
