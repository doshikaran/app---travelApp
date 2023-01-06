import { StyleSheet, Text, View } from "react-native";
import React from "react";
import CustomButton from "./CustomButton";

const SocialMediaButtons = () => {
  const onSignInApple = () => {
    console.warn("apple sign in");
  };

  const onSignInGoogle = () => {
    console.warn("google sign in");
  };
  return (
    <>
      <CustomButton
        text="Sign In with Apple"
        onPress={onSignInApple}
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
      <CustomButton
        text="Sign In with Google"
        onPress={onSignInGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
    </>
  );
};

export default SocialMediaButtons;

const styles = StyleSheet.create({});
