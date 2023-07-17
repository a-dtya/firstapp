import { View, Text,SafeAreaView,Image,ScrollView } from 'react-native'
import React,{useState} from 'react'
import defaultMessages from '../api//message'

export default function HomeScreen() {
  const [message,setMessage] = useState(defaultMessages)
  return (
    <SafeAreaView className="flex-1 bg-yellow-100">
        {
          message.length==0 ?(
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
            <View className="bg-neutral-200 rounded-2xl h-3/6 m-4 p-2">
                <ScrollView
                  className="space-y-4"
                  showsVerticalScrollIndicator={false}
                >
                  {
                    message.map((msg,index)=>{
                      if(msg.role == 'bot'){
                        if(msg.content.includes('https')){
                          return(
                            <View key={index} className="flex-row justify-start">
                              <View className="p-2 rounded-2xl bg-blue-100 rounded-tl-none">
                                <Image className="rounded-2xl h-32 w-32"
                                  source={{uri:msg.content}}
                                  resizeMode='contain'

                                ></Image>
                              </View>
                            </View>
                          )
                        }else{
                          return(
                            <View className="flex-row justify-start">
                              <View className="bg-blue-100 rounded-xl rounded-tl-none p-2">
                                <Text >
                                  {msg.content}
                                </Text>
                              </View>
                            </View>
                          )
                        }
                      }else{
                        return(
                          <View className="flex-row justify-end">
                            <View className="bg-blue-100 rounded-xl rounded-tr-none p-2">
                              <Text>
                                {msg.content}
                              </Text>
                            </View>
                          </View>
                        )
                      }
                    })
                  }
                </ScrollView>
            </View>  
              </>
          )
        }
    </SafeAreaView>
  )
}