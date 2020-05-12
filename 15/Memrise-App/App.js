import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Courses from "./screens/Courses";
import ListWord from "./screens/ListWords";
import WordDetail from "./screens/WordDetail";
import AddMem from "./screens/AddMem";
import Review from "./screens/Review";
import { ROUTES } from "./constants/routes";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName={ROUTES.Courses}>
        <Stack.Screen
          name={ROUTES.Courses}
          component={Courses}
          options={{
            title: ROUTES.Courses,
            headerStyle: {
              backgroundColor: "#0ab",
            },
            headerRight: () => (
              <Button
                onPress={() => alert("This is a button!")}
                title="Info"
                color="#fff"
              />
            ),
          }}
          // initialParams={{ itemId: 42 }}
        />

        <Stack.Screen name={ROUTES.ListWord} component={ListWord} />
        <Stack.Screen name={ROUTES.WordDetail} component={WordDetail} />
        <Stack.Screen name={ROUTES.AddMem} component={AddMem} />
        <Stack.Screen name={ROUTES.Review} component={Review} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});
