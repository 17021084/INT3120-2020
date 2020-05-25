import React, { useState, useEffect } from "react";

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TextInput,
} from "react-native";
import Word from "../components/Word";

import { Button, Icon } from "react-native-elements";

import { listWordData } from "../Data";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

export default function ListWord({ navigation }) {
  const [list, setList] = useState(listWordData);
  const [searchValue, setSearchValue] = useState();

  useEffect(() => {
    // setSearchValue(searchValue)
    // full text search owr day
  }, [searchValue]);

  function onChangeText(text) {
    text = text.toLocaleLowerCase().trim();
    if (text == "") {
      setList(listWordData);
      return;
    }

    let newList = list.filter((ls) => {
      ls.mean == text || ls.word == text;
    });
    setList(newList);
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 20,
          marginTop: 20,
        }}
        onChangeText={(text) => onChangeText(text)}
        value={searchValue}
      />

      <FlatList
        data={list}
        renderItem={({ item }) => (
          <Word unit={item} onPress={() => navigation.navigate("WordDetail")} />
        )}
        keyExtractor={(item) => `${item.id}`}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
      />

      <View style={styles.footer}>
        <Text
          style={styles.review}
          onPress={() => navigation.navigate("Review")}
        >
          Review now !!!
        </Text>
      </View>
    </View>
  );
}

//styled componet
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  header: {
    paddingTop: 50,
    backgroundColor: "#0ab",
    height: 100,
  },
  footer: {
    position: "absolute",
    top: screenHeight - 200,
    height: 70,
    width: screenWidth,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fffa00",
    borderBottomWidth: 10,
    borderRadius: 50,
    // borderStyle: "solid",
    borderBottomColor: "#daa520",
  },
  review: {
    textTransform: "uppercase",
    paddingLeft: 30,
    fontWeight: "500",
    fontSize: 30,
  },
});
