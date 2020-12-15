import React,{useState,useEffect} from 'react'
import {Text,StyleSheet,View,FlatList,Image,ScrollView,TouchableOpacity} from 'react-native';
import {employeeHomeStyles} from '../employeeStyles'
import {styles} from '../styles'
import { Entypo } from '@expo/vector-icons'; 
import { Button } from 'react-native-elements';
import {taskStyles} from '../styles'
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios'


export default function PreviousAppointment({navigation}) {
    const[data,setData]=useState([])

    const workspaceId="1"
    useEffect(()=>{
        axios.get(`https://cdhx4jr2r8.execute-api.ap-south-1.amazonaws.com/Prod/meeting/${workspaceId}`)
        .then(function (response) {
            setData(response.data) 
           
        })
        .catch(function (error) {
           console.log(error);
        });
    },[])

    
    return (
        <View style={styles.container}>
           <View style={appointmentStyles.headerButtonContainer}>
                <View style={appointmentStyles.buttonBox}>
                    <Button onPress={()=>navigation.navigate('UpcomingAppointment')} title="Upcoming" titleStyle={{fontSize:15,color:'black'}} buttonStyle={appointmentStyles.Upcomingbutton}/>
                </View>
                <View style={appointmentStyles.buttonBox}>
                    <Button title="Previous" titleStyle={{fontSize:15,color:'black'}} buttonStyle={appointmentStyles.button}/>
                </View>
                <View style={{flex:0.5, justifyContent:'center',alignItems:'flex-start'}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('AddAppointment')}>
                        <AntDesign name="pluscircleo" size={24} color='#235347' style={{marginLeft:20}} />
                    </TouchableOpacity>
                </View>
               
           </View>
           <View  style={appointmentStyles.flatlistContainer}>
            <FlatList data={data} keyExtractor={(item)=>item.meetingId} renderItem={({item})=>(
                <View style={appointmentStyles.taskContainer}>
                    <View style={appointmentStyles.individualRow}>
                        <View style={appointmentStyles.titleContainer}>
                            <Text>Name </Text>
                        </View>
                        <View style={appointmentStyles.textContainer}>
                            <Text>:  {item.title}</Text>
                        </View>
                    </View>
                    <View style={appointmentStyles.individualRow}>
                        <View style={appointmentStyles.titleContainer}>
                            <Text>Start </Text>
                        </View>
                        <View style={appointmentStyles.textContainer}>
                            <Text>:  {item.starttime}</Text>
                        </View>
                    </View>
                    <View style={appointmentStyles.individualRow}>
                        <View style={appointmentStyles.titleContainer}>
                            <Text>End</Text>
                        </View>
                        <View style={appointmentStyles.titleContainer}>
                            <Text>:  {item.endtime}</Text>
                        </View>
                        <View style={appointmentStyles.buttonContainer}>
                            <TouchableOpacity onPress={()=>navigation.navigate('AppointmentDetails',item)}>
                            <Entypo name="arrow-with-circle-right" size={24} color='#235347' style={{marginBottom:-20}}  />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                
            )}/>
            </View>
        </View>
    )
}

const appointmentStyles = StyleSheet.create({
    taskContainer:{
        marginVertical:10,
        height:130,
        backgroundColor:'white',
        padding:20
        
        
    },
    individualRow:{
        flexDirection:'row',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    titleContainer:{
        flex:0.8,
        justifyContent:'center',
        alignItems:'flex-start'
    },
    textContainer:{
        flex:2,
        justifyContent:'center',
        alignItems:'flex-start'
    },
    
    buttonContainer:{
        flex:1.2,
        alignItems:'flex-end'
    },
    headerButtonContainer:{
        flex:0.4,
        flexDirection:'row',
        marginHorizontal:10
    },
    button :{
        width:110,
        borderRadius:10,
        backgroundColor:'#e5e5e5',
        height:45
    },
    Upcomingbutton:{
        width:110,
        backgroundColor:'white',
        borderRadius:10,
        height:45
    },
    buttonBox:{
        flex:1,
        marginHorizontal:10
    },
    flatlistContainer:{
        flex:5,
        padding:10
    }
})