import React,{useState,useEffect} from 'react'
import { View, Text,StyleSheet,Image,Button} from 'react-native'
import { Marker,Callout,Polygon, Circle } from 'react-native-maps'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
// import { TextInput } from 'react-native-gesture-handler';

// import React from 'react'
// import { View, Text } from 'react-native'

// export default function Location() {
//     return (
//         <View>
//             <Text>hi</Text>
//         </View>
//     )
// }


export default function Location  () {
    
    const [location,setLocation]=useState({})
    const[x,setX]=useState({})
    const[lat,setLat]=useState()
    const[long,setLong]=useState()

    // useEffect(findCoordinates)
    
    const findCoordinates = () => {
		navigator.geolocation.getCurrentPosition(
			position => {
                setLocation(JSON.stringify(position))
			},
			error => alert(error.message),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
        setTimeout(function(){
            alert(location)},15000)
            
        setX(JSON.parse(location));
        setLat(x.coords.latitude)
        setLong(x.coords.longitude)
	};
 
    return (
        <View style={styles.container}>
       
        <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={{
            latitude: 16.7713169147,
            longitude: 96.1552527123,
            latitudeDelta: 0.07,
            longitudeDelta: 0.013,
        }}>
           
        <Marker coordinate={{latitude:lat,longitude:long}}>
            <Callout>
                <Text>Su Su</Text>
            </Callout>
        </Marker>
                 
        </MapView>
        <Button title='Click' onPress={findCoordinates} />
        <Button title='Click' onPress={()=>{
            
            
            alert(lat)
            alert(long)
            
        }} />
    </View>
    )

  }
       

const styles=StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
    map:{
        height:'100%',
        ...StyleSheet.absoluteFillObject,

    }
})