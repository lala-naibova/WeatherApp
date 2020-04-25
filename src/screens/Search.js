import React, { useState } from 'react';
import {View, Text, StyleSheet, FlatList } from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-community/async-storage';

import Card from '../components/Card'
import Header from '../components/Header'

const Search = (props) => {
    const [ city, setCity ] = useState('')
    const [ cities, setCities ] = useState([])

    const fetchCities = (text)=>{
        setCity(text)
        fetch(`https://autocomplete.wunderground.com/aq?query=${text}`)
        .then(item=> item.json())
        .then(data=>{
            setCities(data.RESULTS.slice(0,9))
   
        })
    }
    const buttonClickHandle = async()=>{
        props.navigation.navigate('home',{city:city})
        await AsyncStorage.setItem('cityName', city )

    }
    const listClick = async(cityName)=>{
        setCity(cityName)
        props.navigation.navigate('home',{city: cityName})
        await AsyncStorage.setItem('cityName', cityName )
   
    }
    return (
        <View style={styles.root}>
            <Header title='Weather Application'/>
            <TextInput
            style={styles.text}
            label='City name'
            value={city}
            onChangeText={(txt)=>fetchCities(txt)}/>
            <View style={styles.buttonContainer}>
                <Button icon="home-city" mode="contained" onPress={() => buttonClickHandle()}>
                Save city
                </Button>
            </View>
            <FlatList
            keyExtractor={item=>item.l}
            data={cities}
            renderItem={itemData=> <Card name={itemData.item.name} onPress={()=>listClick(itemData.item.name)}/>}
            />
        </View>
    );
}

const styles= StyleSheet.create({
    root:{
        flex:1
    },
    buttonContainer:{
        margin:20
    },
    text:{
        margin :10
    }
})

export default Search;
