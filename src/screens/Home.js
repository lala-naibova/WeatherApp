import React, { useState, useEffect } from 'react';
import {View, StyleSheet, Image } from 'react-native'
import { Title, Card } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-community/async-storage';

import Header from '../components/Header'

const Home = (props) => {

    const api_key = '7cb37ced819a49bef53cc110393b9cda'

    const[ info, setInfo ] = useState({
        name:'loading...',
        temp:'loading...',
        humidity:'loading...',
        desc:'loading...',
        icon:'loading',
        windSpeed:'loading',
    })
    const getWeather = async () =>{
        let myCity = await AsyncStorage.getItem('cityName');
        
        if (!myCity) {    
            const {city} = props.route.params
            myCity = city

        }
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${myCity}&APPID=${api_key}&units=metric`)
        .then(data=>data.json())
        .then(result=> {
            setInfo({ 
                name:result.name,
                temp: result.main.temp,
                humidity: result.main.humidity,
                desc: result.weather[0].description,
                icon: result.weather[0].icon,
                windSpeed: result.wind.speed
            })
        } ) 
    }

    useEffect(() => {
        getWeather()
    }, [])
    if (props.route.params.city !== 'sheki') {
        getWeather()
    }
    return (
        <View style={styles.root}>
            <Header title='Home'/>
            <LinearGradient
          colors={['#3c6cc7', 'transparent']}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 300,
          }}
        />
            <View style={styles.titleContainer}>
                <Title style={styles.name} >{info.name}</Title>
                <Image style={styles.image}
                source={{uri:`https://openweathermap.org/img/w/${info.icon}.png`}}/>
            </View>
            <Card style={styles.card}>
                <Title style={{color:'#6200ee'}}>Temperature - {info.temp}</Title>
            </Card>
            <Card style={styles.card}>
                <Title style={{color:'#6200ee'}}>Humidity - {info.humidity}</Title>
            </Card>
            <Card style={styles.card}>
                <Title style={{color:'#6200ee'}}>Wind speed - {info.windSpeed}</Title>
            </Card>
            <Card style={styles.card}>
                <Title style={{color:'#6200ee'}}>Description - {info.desc}</Title>
            </Card>
            

        </View>
    );
}

const styles= StyleSheet.create({
    root:{
        flex:1
    },
    titleContainer:{
        alignItems:'center',
    },
    name:{
       marginTop: 30,
       color: '#6200ee',
       fontSize:30 
    },
    image:{
        width:170,
        height:170
    },
    card:{
        marginVertical:5,
        marginHorizontal:10,
        padding:12
    }
})

export default Home;
