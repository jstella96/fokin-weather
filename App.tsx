import React from 'react';
import {Alert} from "react-native"
import Loading from "./Loading";
import * as Location from 'expo-location'


export default class extends React.Component {
  getLocation = async() => {
    try{
      Alert.alert("실패")
      const response = await Location.requestPermissionsAsync()
      console.log(response);
      const location = await Location.getCurrentPositionAsync()
      console.log(location)
    }catch{
      Alert.alert("실패")
    }
  }
  componentDidMount(){
    this.getLocation();
  }
  render(){
    return <Loading />
  } 
}
