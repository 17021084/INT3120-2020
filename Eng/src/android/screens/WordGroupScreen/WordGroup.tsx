import React from 'react';
import { Header } from 'react-native-elements';
import { View, ScrollView } from 'react-native';
import { Back } from '../../components/Back';
import { WordGroupCard } from '../../components/WordGroupCard'; 
import styles from './styles'; 


const WordGroupScreen = (props: { route?: any; navigation?: any }) => {
  var index=0;
  const { route, navigation } = props; 
  const { nameTopic, wordGroups } = route.params;
  const data:any=[];
  Object.keys(wordGroups).forEach((item,index)=>{
    data.push(wordGroups[item])
    data[index].wordGroupName=item
  })
  return (
    <View>
      <Header containerStyle={styles.container}
        leftComponent={
          <Back
            navigation={navigation}
          />}
        centerComponent={{ text: nameTopic, style: styles.centerComponent }}
      />
      <ScrollView horizontal={true}>
        {
          data.map( (e: any) =>
            <WordGroupCard data={e} navigation={navigation} key={index++}
            />
          )
        }
      </ScrollView>
    </View>
  )
}



export default WordGroupScreen; 