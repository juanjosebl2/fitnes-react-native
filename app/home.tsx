import { StatusBar } from "expo-status-bar";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImageSlider from "@/components/ImageSlider";

export default function Home() {
  return (
    <SafeAreaView className="flex bg-white space-y-5" edges={["top"]}>
      <StatusBar style="dark" />
      <View className="flex-row justify-between items-center mx-5">
        <View className="space-y-2 flex-1">
          <Text className="font-bold tracking-wider text-neutral-700 text-3xl">
            Empieza ya
          </Text>
          <Text className="font-bold tracking-wider text-rose-500 text-4xl">
            TRABAJA
          </Text>
        </View>

        <View className="flex-1 flex justify-center items-end space-y-2">
          <View className="items-center">
            <Image
              className="rounded-full"
              style={{ height: hp(6), width: hp(6) }}
              source={require("../assets/images/fitness/avatar.png")}
            />
            <View 
              className="bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300 mt-2"
              style={{ height: hp(5.5), width: hp(5.5) }}
            >
              <Ionicons name="notifications" size={hp(3)} color="gray" />
            </View>
          </View>
        </View>
      </View>
      <View>
        <ImageSlider />
      </View>
    </SafeAreaView>
  );
}
