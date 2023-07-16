import { View, Text, SafeAreaView, Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation }  from '@react-navigation/native'

export default function WelcomeScreen() {
  const navigation = useNavigation() 
  return (
    <SafeAreaView className="flex-1 bg-yellow-100 ">
      <View className="mt-32">
        <Text className="font-bold text-4xl text-center mb-2" >Bonnie</Text>
        <Text className="font-semibold text-center tracking-wide">Your ai companion</Text>
      </View>
      <View className="flex-row mt-20 justify-center">
        <Image source={require("../../assets/images/firstapp1.png")}
        className="h-52 w-52"></Image>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Home')}
          className="bg-blue-100 mx-7 mt-24 rounded h-10 flex justify-center">
        <Text className="text-center text-xl font-semibold">Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
