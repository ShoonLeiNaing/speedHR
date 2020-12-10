import React,{useState,useEffect} from 'react'
import {Text,StyleSheet,View,FlatList,Image,ScrollView,TouchableOpacity} from 'react-native';
import {styles} from '../styles'
import { FontAwesome } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import NetInfo,{useNetInfo} from "@react-native-community/netinfo";
import { AsyncStorage } from 'react-native';
import axios from 'axios'

export default function SayargyiHome({navigation}){
    const workspaceId='1'
    const[connection,setConnection]=useState()
    useEffect(()=>{
        displayData()
    },[])
    const displayData=async()=>{
        try{
          let obj = await AsyncStorage.getItem('data');
          console.log(obj)  
          
          NetInfo.fetch().then(state => {      
            setConnection(state.isConnected)       
          });
          
          if(connection && obj!=null){
            alert(obj)
            axios.post(`https://cdhx4jr2r8.execute-api.ap-south-1.amazonaws.com/Prod/newsfeed/${workspaceId}`, {
                workerId:'12',
                data: obj
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
              AsyncStorage.clear()
          }
        }
        catch(error){
          alert(error)
        }
      }
    
    return (
        <View style={styles.container}>
            <View style={styles.headerBox}>
                <View style={styles.headerBoxText}>
                    <Text style={styles.title}>Welcome</Text>
                    <View style={styles.datebox}>
                        <Text style={styles.date}>11/2/2020</Text>
                    </View>
                </View>
                <View style={styles.ImageBox}>
                  <Image  source={require('../assets/pic3.png')} style={styles.Image}/>
                </View>
            </View>

            <ScrollView style={styles.scroll}>
                <TouchableOpacity onPress={()=>navigation.navigate('Newsfeed')}>
                    <View style={styles.smallContainer}>
                        <Text style={styles.smallContainerText}>Newsfeed</Text>
                        <FontAwesome name="newspaper-o" size={24} color="black" style={styles.Icon}/>
                    </View>
                </TouchableOpacity>

                 <TouchableOpacity onPress={()=>navigation.navigate('AddTasks')}>
                    <View style={styles.smallContainer}>
                        <Text style={styles.smallContainerText}>Tasks</Text>
                        <AntDesign name="pluscircleo" size={24} color="black" style={styles.Icon}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('EmployeeList')}>
                    <View style={styles.smallContainer}>
                        <Text style={styles.smallContainerText}>Employee Lists</Text>
                        <MaterialIcons name="person-outline" size={24} color="black" style={styles.Icon}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('ReportList')}>
                    <View style={styles.smallContainer}>
                        <Text style={styles.smallContainerText}>View Reports</Text>
                        <FontAwesome name="files-o" size={24} color="black" style={styles.Icon}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('UpcomingAppointment')}>
                    <View style={styles.smallContainer}>
                        <Text style={styles.smallContainerText}>Appointment</Text>
                        <AntDesign name="clockcircleo" size={24} color="black" style={styles.Icon}/>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Notifications')}>
                    <View style={styles.smallContainer}>
                        <Text style={styles.smallContainerText}>Notifications</Text>
                        <MaterialIcons name="notifications-active" size={24} color="black" style={styles.Icon} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Scoreboard')}>
                    <View style={styles.smallContainer}>
                        <Text style={styles.smallContainerText}>Employee Performance</Text>
                        <MaterialCommunityIcons name="google-analytics" size={24} color="black" style={styles.Icon} />
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    
    )
}