import { StatusBar } from 'expo-status-bar'
import { View, Text, Image } from 'react-native'

export default function Index() {
  return (
    <View className="flex-1 flex justify-end">
      <Text>index</Text>
      <StatusBar  style="light" />
      <Image className='h-full w-full absolute' source={require("../assets/images/fitness/welcome.png")}/>
    </View>
  )
}