import React,{useState,useEffect} from 'react'
import { View, Text,StyleSheet,Image,Button, ActivityIndicator} from 'react-native'
import { Marker,Callout,Polygon, Circle } from 'react-native-maps'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import axios from 'axios'

export default function Location  ({route}) {
    
    const [location,setLocation]=useState({})
    const[x,setX]=useState({})
    const[lat,setLat]=useState()
    const[long,setLong]=useState()
    const[data,setData]=useState([])
    const[isLoading,setLoading]=useState(true)
    const workerId="912"

    const getLocation =()=>{
        axios.get(`https://cdhx4jr2r8.execute-api.ap-south-1.amazonaws.com/Prod/location/${workerId}`)
            .then(function (response) {
                setData(response.data)
                 
                
            })
            .catch(function (error) {
                alert(error);
            })
            .finally(setLoading(false))
    }
    
        useEffect(()=>{
            setTimeout(function(){
                getLocation()
                
            },3000)
        },[])
    
 
    return (
        <View style={styles.container}>
            {isLoading?(<ActivityIndicator/>):(
                
                data.map(x=>(
                    <MapView
                    style={styles.map}
                    provider={PROVIDER_GOOGLE}
                    region={{
                        latitude: 16.7713169147,
                        longitude: 96.1552527123,
                        latitudeDelta: 0.1,
                        longitudeDelta: 0.12,
                    }}>
                       
                    <Marker coordinate={{latitude:x.lat,longitude:x.long}}>
                        <Callout>
                            <Text>Name - Megan</Text>
                            <Text>Current Task - New product marketing</Text>
                        </Callout>
                    </Marker>
                             
                    </MapView>
                ))
            )}  
    </View>
    )}
       

const styles=StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
    map:{
        height:'180%',
        ...StyleSheet.absoluteFillObject,

    }
})