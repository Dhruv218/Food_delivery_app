import { Image, ScrollView, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import Menu from "../components/order_menu";
import Cart_Header from "../components/cart_heading";

export default function Foodcart_description(prop) {
  const route = useRoute();
  const { data } = route.params;
  return (
    <>
      <ScrollView className="mt-8">
        <Cart_Header data={data} />

        <Menu />
      </ScrollView>
    </>
  );
}
