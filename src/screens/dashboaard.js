import {
  View,
  Text,
  FlatList,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { restaurants } from "../data/restaurant";
import { foodImages } from "../data/foodimages";
import Card from "../components/card";
import Carousel from "../components/carousel";
import React, { useState, useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { dining } from "../data/dining";
import { nightLife } from "../data/night";
const restaurant = restaurants;
const dinings = dining;
const night = nightLife;
const food_img = foodImages;

export default function HomeScreen() {
  const [data, setdata] = useState(restaurant);
  const [searchItem, setsearchitem] = useState("");
  const [filter, setfilter] = useState("");
  function handlesearch() {
    setdata(
      restaurant.filter((item) => {
        return Object.values(item.info.name)
          .join("")
          .toLowerCase()
          .includes(searchItem.toLowerCase());
      })
    );
  }
  function handlefilter(n) {
    setfilter(n);
    if (n == 0) {
      setdata(restaurant);
    } else if (n == 1) {
      setdata(restaurant);
    } else if (n == 2) {
      setdata(dinings);
    } else if (n == 3) {
      setdata(night);
    }
  }

  return (
    <>
      <ScrollView className="">
        <Carousel food_img={food_img} />

        <View className="relative">
          <TextInput
            onChangeText={(text) => setsearchitem(text)}
            className="m-4 relative px-2 pl-4 bg-white font-medium text-gray-600 py-1 border border-gray-400 rounded-xl"
            value={searchItem}
            placeholder="Search Here ..."
          />
          <TouchableOpacity className="absolute right-[25] top-[22] z-30">
            <Icon
              name="search"
              size={20}
              color="red"
              onPress={handlesearch}
              className="hover:opacity-80"
            />
          </TouchableOpacity>
        </View>

        <View className="flex flex-row justify-start items-center px-4 gap-4 overflow-x-scroll mb-4">
          <View className="flex flex-row gap-2 ">
            <Icon name="filter" color="red" size={20} />
          </View>
          <TouchableOpacity
            className={filter == "0" ? (className = "bg-red-200") : null}
          >
            <View className="flex justify-center text-center border px-2 py-1 border-gray-400 rounded-md">
              <Text
                className={(className = "font-semibold text-sm text-gray-700")}
                onPress={() => {
                  handlefilter(0);
                }}
              >
                Reset
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            className={filter == "1" ? (className = "bg-red-200") : null}
          >
            <View className="flex justify-center text-center border px-2 py-1 border-gray-400 rounded-md">
              <Text
                className="font-semibold text-sm text-gray-700"
                onPress={() => {
                  handlefilter(1);
                }}
              >
                Restaurant
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            className={filter == "2" ? (className = "bg-red-200") : null}
          >
            <View className="flex justify-center text-center border px-2 py-1 border-gray-400 rounded-md">
              <Text
                className="font-semibold text-sm text-gray-700"
                onPress={() => {
                  handlefilter(2);
                }}
              >
                Dining
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            className={filter == "3" ? (className = "bg-red-200") : null}
          >
            <View className="flex justify-center text-center border px-2 py-1 border-gray-400 rounded-md">
              <Text
                className="font-semibold text-sm text-gray-700"
                onPress={() => {
                  handlefilter(3);
                }}
              >
                NightLife
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <Text className="p-3 font-bold text-black text-xl">
          Restaurants around you{" "}
        </Text>
        <FlatList
          scrollEnabled={false}
          data={data}
          keyExtractor={(item, i) => i}
          renderItem={({ item }) => <Card data={item} />}
        />
      </ScrollView>
    </>
  );
}
