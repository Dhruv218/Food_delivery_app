import { View, Text, FlatList, ScrollView } from "react-native";
import { SliderBox } from "react-native-image-slider-box";

export default function Carousel(prop) {
  return (
    <View className="mt-12 h-60">
      <SliderBox
        images={prop.food_img}
        dotColor="red"
        inactiveDotColor="white"
        autoplay={true}
        autoplayinterval={1000}
        circleLoop={true}
        sliderBoxHeight={250}
        ImageComponentStyle={{
          resizeMode: "contain",
          height: "100%",
          width: "95%",
          borderRadius: 10,
        }}
      />
    </View>
  );
}
