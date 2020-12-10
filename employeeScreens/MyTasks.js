import React,{useState,useEffect} from 'react'
import {Text,StyleSheet,View,FlatList,Image,ScrollView,TouchableOpacity} from 'react-native';
import {employeeHomeStyles} from '../employeeStyles'
import {styles} from '../styles'
import { Entypo } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import axios from 'axios'


export default function MyTasks({navigation}) {
    const workerId=911
    const URL=`https://cdhx4jr2r8.execute-api.ap-south-1.amazonaws.com/Prod/task/${workerId}`
    const[isLoading,setLoading]=useState(true)
    const[data,setData]=useState([])
    
    useEffect(()=>{
        axios.get(URL)
        .then(function (response) {
            
            setData(response.data) 
            
        })
        .catch(function (error) {
            alert(error);
        });
    },[])

    
    return (
        <View style={employeeHomeStyles.container}>
           
            <View style={styles.headerBox}>
                <View style={styles.headerBoxText}>
                    <Text style={styles.title}>My Tasks</Text>
                    <View style={employeeHomeStyles.datebox}>
                        <Text style={styles.date}>11/2/2020</Text>
                     </View>
                </View>
                <View style={styles.ImageBox}>
                  <Image  source={require('../assets/pic3.png')} style={styles.Image}/>
                </View>
            </View>
            <FlatList data={data} keyExtractor={(item)=>item.taskId} style={{marginVertical:30,flex:1,marginHorizontal:10}} renderItem={({item})=>(
                <View style={employeeTaskStyles.taskContainer}>
                    <View style={employeeTaskStyles.individualRow}>
                        <View style={{flex:1}}>
                            <Text>Task ID </Text>
                        </View>
                        <View style={{flex:1}}>
                            <Text>:  {item.taskId}</Text>
                        </View>
                        <View style={{flex:1,alignItems:'flex-end'}}>
                            <FontAwesome name="exclamation-circle" size={24} color="red" />
                        </View>
                    </View>
                    <View style={employeeTaskStyles.individualRow}>
                        <View style={employeeTaskStyles.titleContainer}>
                            <Text>Task Title </Text>
                        </View>
                        <View style={employeeTaskStyles.textContainer}>
                            <Text>:  {item.topic}</Text>
                        </View>
                    </View>
                    <View style={employeeTaskStyles.individualRow}>
                        <View style={employeeTaskStyles.titleContainer}>
                            <Text>Deadline</Text>
                        </View>
                        <View style={employeeTaskStyles.titleContainer}>
                            <Text>:  {item.time}</Text>
                        </View>
                        <View style={employeeTaskStyles.buttonContainer}>
                            <TouchableOpacity onPress={()=>navigation.navigate('EmployeeTaskDetail',item)}>
                            <Entypo name="arrow-with-circle-right" size={24} color='#235347' style={{marginBottom:-20}}  />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>


            )}/>
            

            
            
           
        </View>
    )
}

const employeeTaskStyles = StyleSheet.create({
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
        flex:1,
        justifyContent:'center',
        alignItems:'flex-start'
    },
    textContainer:{
        flex:2,
        justifyContent:'center',
        alignItems:'flex-start'
    },
    
    buttonContainer:{
        flex:1,
        alignItems:'flex-end'
    }
})