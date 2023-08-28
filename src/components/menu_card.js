import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Menu_Card({ data }) {
  return (
    <>
      <TouchableOpacity activeOpacity={0.8} className="shadow-lg shadow-gray-300 rounded flex flex-row justify-between w-full px-4 pt-4">
        <View className="flex flex-col  gap-1 justify-start items-start w-1/2 text-center">
          <Text className="font-bold text-xl ">{data.title}</Text>
          <Text className="font-bold text-lg text-gray-600 ">
            {"$ " + data.price}
          </Text>
          <Text className="font-bold text-xs text-gray-500">{data.desc}</Text>
        </View>

        <View className="w-[175] rounded h-36 flex justify-center items-center">
          <Image source={{ uri: data.img }} className="w-[175] rounded h-32" />
        </View>
      </TouchableOpacity>
    </>
  );
}
