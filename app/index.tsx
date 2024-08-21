import { StatusBar } from 'expo-status-bar'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useRouter } from 'expo-router';

export default function Index() {
    
    const router = useRouter()

    return (
    <View className="flex-1 flex justify-end">
      <StatusBar style="light" />
      <Image className='h-full w-full absolute' source={require("../assets/images/fitness/welcome.png")}/>
    
      <LinearGradient
        colors={['transparent', '#18181b']}
        style={{ width: wp(100), height: hp(100) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className='flex justify-end pb-12 space-y-8'
      > 
        <Animated.View 
            entering={FadeInDown.delay(200).springify()} 
            className='flex items-center'
        >
            <Text style={{ fontSize: hp(5) }} className='text-white font-bold tracking-widest'>
                Mejor <Text className='text-rose-500'>
                    consejos
                </Text>
            </Text>
            <Text style={{ fontSize: hp(5) }} className='text-white font-bold tracking-widest'>
                para ti
            </Text>
        </Animated.View>
        <View>
            <TouchableOpacity
                onPress={() => router.push('/home')}
                style={{ height: hp(7), width: wp(80) }}
                className='bg-rose-500 flex items-center justify-center mx-auto rounded-full border-[2px] border-neutral-200'
            >
                <Text className='text-white font-bold tracking-widest text-3xl'>
                    Empieza ya
                </Text>
            </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  )
}