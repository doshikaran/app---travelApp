import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { Control, Controller } from "react-hook-form";

const CustomInput = ({ control, name, rules = {}, ...inputProps }) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onchange, onblur },
        fieldState: { error },
      }) => (
        <>
          <View
            style={[
              styles.container,
              { borderColor: error ? "red" : "#e8e8e8" },
            ]}
          >
            <TextInput
              value={value}
              onChangeText={onchange}
              onBlur={onblur}
              style={styles.input}
              {...inputProps}
            />
          </View>
          {error && (
            <Text style={{ color: "red", alignSelf: "stretch" }}>
              {error.message || "Error"}
            </Text>
          )}
        </>
      )}
    ></Controller>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    borderColor: "black",
    borderWidth: 2,
    borderRadius: 50,
    padding: 15,
    marginVertical: 10,
  },
});
