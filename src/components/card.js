import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Card({ data }) {
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity
        className="bg-transparent shadow-lg shadow-gray-300 rounded w-full p-2 rounded"
        activeOpacity={0.75}
        onPress={() => navigation.navigate("foodcart_description", { data })}
      >

        <Text className="bg-green-600 rounded-t-xl text-white font-extrabold text-xs items-center text-center flex py-1">
         <Icon
              name="leaf"
              size={15}
              color="green"
            /> 
            {'  PURE VEG RESTAURANT'}
        </Text>
        <View className="w-full flex flex-col justify-center gap-3">
          <Image
            source={{ uri: data.info.image.url }}
            className="w-full h-52"
          />
          <View className="flex justify-between items-center flex-row">
            <Text className=" font-bold text-xl pl-2 text-gray-800">
              {data.info.name}
            </Text>
            <Text className="bg-green-600 rounded px-2 py-1 font-bold text-sm text-white">
            {data.info.rating?.aggregate_rating+" "}
            <Icon
              name="star"
              size={15}
              color="white"
            />
            </Text>
          </View>
          <View className="flex mb-2 justify-between items-center flex-row">
            <Text className=" font-bold  text-sm pl-2 text-gray-500">
              {data.info.locality?.name}
            </Text>
            <Text className="font-bold  text-sm pl-2 text-gray-500">
              {data.info.cfo.text}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
}
