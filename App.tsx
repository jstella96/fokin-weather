import React from 'react';
import {Alert} from "react-native"
import Loading from "./Loading";
import * as Location from 'expo-location'
import axios from "axios"
const API_KEY = "49af4c5e49c5942d6b05123853461b81"

export default class extends React.Component {
  state = {
    isLoading: true
  }
  getWeather = async (latitude,longitude) => {
    const {data}  = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    )
    console.log(data)
  }
  getLocation = async() => {
    try{
      await Location.requestPermissionsAsync()
      const { 
        coords : {latitude, longitude}
      } = await Location.getCurrentPositionAsync()
      //console.log(coords.latitude, coords.longitude)
      this.getWeather(latitude,longitude)
      //this.setState({isLoading:false})
    }catch{
      Alert.alert("can't find do","so sad")
    }
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    const {isLoading}  = this.state;
    return isLoading ? <Loading /> : null
  } 
}
