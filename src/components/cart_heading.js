import { Image, ScrollView, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function Cart_Header({ data }) {
  return (
    <>
      <View className="w-full flex flex-col justify-center gap-3 shadow-lg shadow-gray-500 mb-4">
        <Image source={{ uri: data.info.image.url }} className="w-full h-52" />
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
        <View className="flex justify-between items-center flex-row">
          <Text className=" font-bold  text-sm pl-2 text-gray-500">
            {data.info.locality?.name}
          </Text>
          <Text className="font-bold  text-sm pl-2 text-gray-500">
            {data.info.cfo.text}
          </Text>
        </View>
        <View className="flex justify-between items-center flex-row">
          <Text className=" font-bold  text-sm pl-2 text-gray-500">
            {data.info.locality?.address}
          </Text>
        </View>
      </View>
    </>
  );
}
