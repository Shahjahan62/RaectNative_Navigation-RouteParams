import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import Colors from "../components/ColorBox";

const Route_Params = ({ route }) => {
  const { colors, paletteName } = route.params;
  return (
    <FlatList
      style={styles.flat}
      data={colors}
      keyExtractor={(item) => item.hexCode}
      renderItem={({ item }) => (
        <Colors name={item.colorName} hexCode={item.hexCode} />
      )}
      ListHeaderComponent={<Text>{paletteName}</Text>}
    />
  );
};

const styles = StyleSheet.create({
  flat: {
    backgroundColor: "#fff",
    padding: 20,
    marginTop: 20,
  },
});

export default Route_Params;
