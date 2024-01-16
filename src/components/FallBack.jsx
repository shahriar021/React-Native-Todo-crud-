import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const FallBack = () => {
  return (
    <View>
      <Image
        source={require("../../assets/nothing.png")}
        style={{ height: 200, width: 300, marginTop: 150 }}
      />
    </View>
  );
};

export default FallBack;

const styles = StyleSheet.create({});
