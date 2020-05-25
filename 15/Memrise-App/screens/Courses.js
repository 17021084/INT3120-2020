import React from "react";
import {
  StyleSheet,
  Text,
  Alert,
  View,
  FlatList,
  Dimensions,
} from "react-native";
import * as Progress from "react-native-progress";

import Unit from "../components/Unit";

// const AppContainer = createAppContainer(AppNavigator);

// import sampleData from '../sampleData';

const sampleData = [
  { id: 1, unitName: "Bài học 1" },
  { id: 2, unitName: "Bài học 2 " },
  { id: 3, unitName: "Bài học 3" },
  { id: 4, unitName: "Bài học 4" },
  { id: 5, unitName: "Bài học 5" },
  { id: 6, unitName: "Bài học 6" },
  { id: 7, unitName: "Bài học 7" },
  { id: 8, unitName: "Bài học 8" },
];

const screenWidth = Math.round(Dimensions.get("window").width);

export default function Courses({ navigation }) {
  return (
    <View style={styles.container}>
      <Progress.Bar progress={0.3} width={screenWidth} />

      <FlatList
        data={sampleData}
        renderItem={({ item }) => (
          <Unit unit={item} onPress={() => navigation.navigate("ListWord")} />
        )}
        keyExtractor={(item) => `${item.id}`}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

//styled componet
const styles = StyleSheet.create({
  container: {
    width: "100%",
    // flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",

    justifyContent: "center",
  },
});
