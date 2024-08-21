import React from "react";
import { View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function ImageTest() {
  const testImage = require("../assets/images/fitness/slide1.png");

  return (
    <View style={{ width: wp(100) - 70, height: hp(25) }}>
      
    </View>
  );
}
