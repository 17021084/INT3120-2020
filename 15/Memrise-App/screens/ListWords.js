import React, { useState,useEffect } from "react";

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  TextInput,
} from "react-native";
import Word from "../components/Word";

import { Button } from "react-native-elements";

import {listWordData} from "../Data";

const deviceWidth = Dimensions.get('window').width;
const screen = (percent) => percent * deviceWidth / 100;

export default function ListWord({ navigation }) {
  const [list, setList] = useState(listWordData);
  const [searchValue, setSearchValue] = useState();

  useEffect(()=>{
    // setSearchValue(searchValue)
    // full text search owr day 
    
  },[searchValue])

  function onChangeText(text){
    text = text.toLocaleLowerCase().trim();
    if (text ==''){

      setList(listWordData);
      return;
    } 

    let newList =list.filter( ls => {
       ls.mean == text || ls.word == text
    } );
    setList(newList);

  }
  return (
    <View style={styles.container}>
      <TextInput
        style={{
          height: screen(7),
          borderColor: "gray",
          borderWidth: 1,
          marginTop: screen(2),
          marginBottom: screen(3),
          borderRadius: screen(1),
          paddingLeft: screen(2)
        }}
        placeholder='Nhập từ bạn muốn tìm kiếm'
         onChangeText={text => onChangeText(text)}
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
    bottom: screen(0),
    height: screen(23),
    width: screen(100),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff222",
    borderRadius: 50
  },
  review: {
    textTransform: "uppercase",
    paddingLeft: 30,
    fontWeight: "500",
    fontSize: 30,
  },
});
