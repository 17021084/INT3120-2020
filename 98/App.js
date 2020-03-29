﻿import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import HomeNavigator from './navigation/HomeNavigator';
import TrafficSignList from './components/TrafficSignList';
import TrafficSigns from './screens/TrafficSigns';

class App extends Component {
    render() {
        return (
            //<BottomTabNavigator />
            //TypeofTraffficSign
            /*<View style={{
                marginTop: 200,
                borderBottomWidth: 1.2,
                borderColor: '#808080',
            }}>
                <View style={styles.container}>
                    <Text style={styles.text_c}>Chọn loại biển báo: </Text>
                </View>
                <View style={styles.container2}>
                    <Text style={styles.text_c2}>Biển cấm </Text>
                </View>
            </View>*/

            <HomeNavigator />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 35,
        //fontSize: 100,
        //textAlign: 'center',
        //borderRadius: 10,
        borderTopWidth: 0.7,
        borderColor: '#dcdcdc',
        //alignItems: 'center',
        justifyContent: 'center',
        //alignContent: 'center',
        //padding: 10,
    },
    container2: {
        height: 50,
        borderColor: '#dcdcdc',
        marginLeft: 8,
        marginRight: 8,
        borderRadius: 7,
        borderWidth: 0.8,
        justifyContent: 'center',
        //elevation: 0.2,
        marginBottom: -0.2,
    },
    text_c: {
        color: '#808080',
        marginLeft: 8,
    },
    text_c2: {
        fontSize: 18,
        color: '#696969',
        marginLeft: 60,
        fontWeight: 'bold',
    },
    img: {
        width: 20,
        height: 20,
        alignItems: 'center',
    },
});

export default App;
