import { View, Text,SafeAreaView,Image,ScrollView, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import defaultMessages from '../api//message'
import { Audio } from 'expo-av'

export default function HomeScreen() {
  const [audioPermission,setAudioPermission]=useState(false)
  async function componentDidMount(){
    await Audio.requestPermissionsAsync().then(permission=>{
      setAudioPermission(permission.granted)
    })
  }
  componentDidMount()
  const [message,setMessage] = useState(defaultMessages)
  const [recording,setRecording] = useState(false)
  const clearMessage = ()=>{
    setMessage([])
  }
  const recordMessage = ()=>{
    if(recording){
      setRecording(false)
    }else{
      setRecording(true)
    }
  }
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
                              <View className="p-2 rounded-2xl bg-blue-100 rounded-tl-none border-2 border-gray-300">
                                <Image className="rounded-2xl h-32 w-32"
                                  source={{uri:msg.content}}
                                  resizeMode='contain'

                                ></Image>
                              </View>
                            </View>
                          )
                        }else{
                          return(
                            <View key={index} className="flex-row justify-start">
                              <View className="bg-blue-100 rounded-xl rounded-tl-none p-2 border-2 border-gray-300">
                                <Text >
                                  {msg.content}
                                </Text>
                              </View>
                            </View>
                          )
                        }
                      }else{
                        return(
                          <View key={index} className="flex-row justify-end">
                            <View className="bg-blue-100 rounded-xl rounded-tr-none p-2 border-2 border-gray-300">
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
            <View className="flex-row justify-around m-2">

            <TouchableOpacity className="bg-red-200 rounded-full p-1">
                  <Image source={require("../../assets/images/firstapp4.png")}
                    className="h-12 w-12 rounded-full"
                  >

                  </Image>
            </TouchableOpacity>

                <TouchableOpacity onPress={recordMessage} 
                  className="bg-blue-100 rounded-full p-1"> 
                  <Image source={require("../../assets/images/firstapp3.png")}
                    className="w-12 h-12 rounded-full"
                  ></Image>
                </TouchableOpacity>
    
            <TouchableOpacity onPress={clearMessage}
              className="bg-green-200 rounded-full p-1">
                  <Image source={require("../../assets/images/firstapp5.png")}
                    className="h-12 w-12 rounded-full"
                  >

                  </Image>
            </TouchableOpacity>
            </View>  
              </>
          )
        }
    </SafeAreaView>
  )
}