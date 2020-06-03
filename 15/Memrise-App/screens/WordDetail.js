import React, { useState, useEffect } from "react";
import axios from "axios";
import { StyleSheet, Text, View, Button } from "react-native";

import Word from "../components/Word";
import WordContainer from "../components/WordContainer";
import Spinner from "../components/Spinner";
import Mems from "../components/Mems";

export default function listWord({ navigation, route }) {
  // React.useEffect(() => {
  //   if (route.params?.post) {
  //     // Post updated, do something with `route.params.post`
  //     // For example, send the post to the server
  //   }
  // }, [route.params?.post]);

  const [word, setWord] = useState({});
  const [courseInfor, setCourseInfor] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const { wordId, id } = route.params; // gui nguen word id  
    const queryString = `https://5ebc0433f2cfeb001697d562.mockapi.io/db/${id}`;
    axios
      .get(queryString)
      .then((res) => {
        const { id, courseName, listWord } = res.data;
        // suwar w.wordI d  w.id  giu nguyen wordI d ve phai
        const newWord = listWord.filter((w) => w.id === wordId);

        setWord(newWord[0]);
        setIsLoading(false);
        setCourseInfor({
          id: id,
          listWord: listWord,
          courseName: courseName,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  function handleOnThunderPress(blur){
    const { id, courseName, listWord } = courseInfor;
    const wordId = word.id;
    let newWord = listWord.filter((wd) => wd.id === wordId)[0];
    const index = listWord.indexOf(newWord);
    if( blur ===1 ){    // current is false. set true
      newWord = {
        ...newWord,
        miss: true,
      };   
   
    }else{
      newWord = {
        ...newWord,
        miss: false,
      };   
  
    }   
    let newListWord = [
        ...listWord.slice(0, index),
        newWord,
        ...listWord.slice(index + 1),
      ];

    const putData = {
        courseName: courseName,
        listWord: newListWord,
      };
    
    const queryString = `https://5ebc0433f2cfeb001697d562.mockapi.io/db/${id}`;
    axios
      .put(queryString, putData)
      .then((res) => {
        console.log(" set thunder success");
        const newListWord = res.data.listWord;
      })
      .catch((error) => console.log(error));

  }


  return (
    <View style={styles.container}>
      {(isLoading && <Spinner />) || (
        <View>
          <WordContainer
            objWord={word}
            hideMean={false}
            courseInfor={courseInfor}
            onPress={handleOnThunderPress}
          />

          <View style={styles.Mem}>
           
         
            <Mems word={word}/>
                

            <Button
              title="Create your own mens"
              onPress={() => {
                navigation.navigate("AddMem");
              }}
            />

          </View>
        </View>
      )}
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  DetailsBox: {
    flexDirection: "row",
    alignItems: "center",
    padding: 30,
    marginBottom: 30,
  },
  WordContainer: {
    flexGrow: 1,
  },
  ThunderWater: {
    flexDirection: "row",
  },
  WordImage: {
    width: 65,
    height: 65,
    backgroundColor: "green",
    // borderStyle:'solid',
    borderWidth: 0.5,
    borderRadius: 80,
  },
  ThunderImage: {
    marginTop: 20,
    width: 35,
    height: 35,
    opacity: 0.4,
  },
  WaterImage: {
    marginTop: 20,
    width: 35,
    height: 35,
    marginLeft: "auto",
  },
  
  MemText: {
    paddingTop: 5,
    paddingBottom: 5,
    borderBottomWidth: 0.2,
    // borderStyle:'solid',
  },
  Word: {
    textTransform: "lowercase",
    fontWeight: "700",
    fontSize: 30,
  },
  Mean: {
    textTransform: "lowercase",
    fontWeight: "500",
    fontSize: 15,
  },
  Title: {
    paddingTop: 30,
    paddingBottom: 5,
    color: "red",
    fontWeight: "500",
    fontSize: 15,
  },
});