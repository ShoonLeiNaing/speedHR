import React,{useState,useEffect} from 'react'
import {Text,StyleSheet,View,FlatList,Image,ScrollView,TouchableOpacity} from 'react-native';
import {employeeHomeStyles} from '../employeeStyles'
import {styles} from '../styles'
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Marker,Callout,Polygon, Circle } from 'react-native-maps'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default function EmployeeHome({navigation}) {
    const [location,setLocation]=useState({})
    const[x,setX]=useState({})
    const[lat,setLat]=useState()
    const[long,setLong]=useState()

    const findCoordinates = () => {
		navigator.geolocation.getCurrentPosition(
			position => {
                setLocation(position)
                setLat(position.coords.latitude)
                setLong(position.coords.longitude)
                alert(lat)
                alert(long)
			},
			error => alert(error.message),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
                   
    };
    
    // useEffect(findCoordinates)
   


    return (
        <View style={employeeHomeStyles.container}>
           
            <View style={styles.headerBox}>
                <View style={styles.headerBoxText}>
                    <Text style={styles.title}>Welcome</Text>
                    <View style={employeeHomeStyles.datebox}>
                        <Text style={styles.date}>11/2/2020</Text>
                    </View>
                </View>
                <View style={styles.ImageBox}>
                  <Image  source={require('../assets/pic3.png')} style={styles.Image}/>
                </View>
            </View>


            <View style={{flex:0.75,marginTop:30}}>
            <View style={employeeHomeStyles.bottomContainer}>
                <View style={employeeHomeStyles.individualContainer}>
                    <TouchableOpacity onPress={()=>navigation.navigate('EmployeeNewsfeed')}>
                        <View style={employeeHomeStyles.individualBox}>
                            <View style={employeeHomeStyles.iconTitle}>
                                <FontAwesome name="newspaper-o" size={24} color="black" style={{marginTop:15}} />
                            </View>
                            <Text style={{fontSize:10,marginTop:10}}>Newsfeed</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                
                <View style={employeeHomeStyles.individualContainer}>
                    <View style={employeeHomeStyles.individualBox}>
                        <View style={employeeHomeStyles.iconTitle}>
                            <AntDesign name="clockcircleo" size={24} color="black" style={{marginTop:15}}/>
                        </View>
                        <Text style={{fontSize:10,marginTop:10}}>Appointment</Text>
                    </View>
                </View>
                <View style={employeeHomeStyles.individualContainer}>
                <TouchableOpacity onPress={()=>navigation.navigate('EmployeeReportList')}>
                    <View style={employeeHomeStyles.individualBox}>
                        <View style={employeeHomeStyles.iconTitle}>
                            <FontAwesome name="files-o" size={24} color="black" style={{marginTop:15}}/>
                        </View>
                        <Text style={{fontSize:10,marginTop:10}}>Reports</Text>
                    </View>
                    </TouchableOpacity>
                </View> 
                
            </View>
            <View style={employeeHomeStyles.bottomContainer}>
                
                <View style={employeeHomeStyles.individualContainer}>
                <TouchableOpacity onPress={()=>navigation.navigate('TaskHistory')}>
                    <View style={employeeHomeStyles.individualBox}>
                        <View style={employeeHomeStyles.iconTitle}>
                            <FontAwesome5 name="history" size={24} color="black" style={{marginTop:15}}/>
                        </View>
                        <Text style={{fontSize:10,marginTop:10}}>History</Text>
                    </View>
                </TouchableOpacity>
                </View>
                
                <View style={employeeHomeStyles.individualContainer}>
                    <TouchableOpacity onPress={()=>navigation.navigate('MyTasks')}>
                        <View style={employeeHomeStyles.individualBox}>
                            <View style={employeeHomeStyles.iconTitle}>
                                <FontAwesome5 name="tasks" size={24} color="black" style={{marginTop:15}} />
                            </View>
                            <Text style={{fontSize:10,marginTop:10}}>My tasks</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={employeeHomeStyles.individualContainer}>
                    <TouchableOpacity onPress={()=>navigation.navigate('EmployeeNotifications')}>
                        <View style={employeeHomeStyles.individualBox}>
                            <View style={employeeHomeStyles.iconTitle}>
                            <MaterialIcons name="notifications-active" size={24} color="black" style={{marginTop:15}} />
                            </View>
                            <Text style={{fontSize:10,marginTop:10}}>Notifications</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={employeeHomeStyles.bottomContainer}>
                <View style={employeeHomeStyles.individualContainer}>
                    <View style={employeeHomeStyles.individualBox}>
                        <View style={employeeHomeStyles.iconTitle}>
                            <FontAwesome5 name="running" size={24} color="black" style={{marginTop:15}}/>
                        </View>
                        <Text style={{fontSize:10,marginTop:10}}>Training</Text>
                    </View>
                </View>
                <View style={employeeHomeStyles.individualContainer}>
                    
                </View>
                <View style={employeeHomeStyles.individualContainer}>
                    
                </View>
            </View>
            </View>
           
        </View>
    )
}
