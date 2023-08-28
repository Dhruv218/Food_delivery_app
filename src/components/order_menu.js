import { FlatList } from "react-native";
import { menu } from "../data/menu";
import Menu_Card from "./menu_card";

const data = menu;
export default function Menu() {
  return (
    <>
      <FlatList
        data={data}
        keyExtractor={(item, i) => i}
        renderItem={({ item }) => <Menu_Card data={item} />}
      />
    </>
  );
}
