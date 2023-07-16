import { View, Text,SafeAreaView,Image } from 'react-native'
import React,{useState} from 'react'

export default function HomeScreen() {
  const [message,setMessage] = useState([])
  return (
    <SafeAreaView className="flex-1 bg-yellow-100">
        {
          message.length>0 ?(
            <View></View>
          ):(
            <>
            <View className=" flex-row justify-center ">
              <Image source={require("../../assets/images/firstapp2.png")}
              className="h-36 w-36 mt-24"
              ></Image>
              
            </View>
            <View className="flex-row justify-center mt-3">
                <Text className="text-black font-semibold text-2xl tracking-wide">Chat</Text>
              </View>
            <View className="bg-neutral-200 rounded-2xl h-3/5 m-4">

            </View>  
              </>
          )
        }
    </SafeAreaView>
  )
}