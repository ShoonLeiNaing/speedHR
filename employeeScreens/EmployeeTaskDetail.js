import React,{useState,useEffect} from 'react'
import {Text,StyleSheet,View,FlatList,Image,ScrollView,TouchableOpacity} from 'react-native';
import {employeeHomeStyles} from '../employeeStyles'
import {styles} from '../styles'
import { Entypo } from '@expo/vector-icons'; 
import {reportDetailStyles} from '../screens/ReportDetail'
import { Button } from 'react-native-elements';
import {taskStyles} from '../styles'
import axios from 'axios'


export default function EmployeeTaskDetail({route,navigation}) {

    const taskId = route.params.taskId;

    const workerId=911
    const URL=`https://cdhx4jr2r8.execute-api.ap-south-1.amazonaws.com/Prod/task/taskDetail/${taskId}`
    const[isLoading,setLoading]=useState(true)
    const[data,setData]=useState([])
    
    useEffect(()=>{
        axios.get(URL)
        .then(function (response) {
            setData(response.data) 
            // alert(data.taskId)
        })
        .catch(function (error) {
            alert(error);
        });
    },[])

    const[task,setTask]=useState({
       taskId:route.params.taskId,
       info:route.params.info,
       location:route.params.location,
       topic:route.params.topic,
       customer:route.params.customer,
       product:route.params.topic,
       deadline:route.params.time
    })
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
            
            <View style={reportDetailStyles.reportContainer}>
                <View style={reportDetailStyles.reportTitleContainer}>
                    <Text style={{fontSize:18}}>{task.topic}</Text>
                </View>

                <View style={reportDetailStyles.reportTitleContainer}>
                    <View style={reportDetailStyles.textContainer}>
                        <Text style={{fontSize:15}}>Task ID :</Text>
                    </View>
                    <View style={reportDetailStyles.infoContainer}>
                        <Text style={{fontSize:17,}}>{task.taskId}</Text>
                    </View>
                </View>
                <View style={reportDetailStyles.reportTitleContainer}>
                    <View style={reportDetailStyles.textContainer}>
                        <Text style={{fontSize:15}}>Location :</Text>
                    </View>
                    <View style={reportDetailStyles.infoContainer}>
                        <Text style={{fontSize:17}}>{task.location}</Text>
                    </View>
                </View>
                <View style={reportDetailStyles.reportTitleContainer}>
                    <View style={reportDetailStyles.textContainer}>
                        <Text style={{fontSize:15}}>Customer :</Text>
                    </View>
                    <View style={reportDetailStyles.infoContainer}>
                        <Text style={{fontSize:17}}>{task.customer}</Text>
                    </View>
                </View>

                <View style={reportDetailStyles.reportTitleContainer}>
                    <View style={reportDetailStyles.textContainer}>
                        <Text style={{fontSize:15}}>Product :</Text>
                    </View>
                    <View style={reportDetailStyles.infoContainer}>
                        <Text style={{fontSize:17,}}>{task.product}</Text>
                    </View>
                </View>
                <View style={reportDetailStyles.attachmentContainer}>
                    <View style={reportDetailStyles.textContainer}>
                        <Text style={{fontSize:15}}>Topic :</Text>
                    </View>
                    <View style={reportDetailStyles.infoContainer}>
                        <Text style={{fontSize:17,}}>{task.topic}</Text>
                    </View>
                </View>
                <View style={reportDetailStyles.reportDescriptionContainer}>
                    <View style={reportDetailStyles.textContainer}>
                        <Text style={{fontSize:15}}>Additional Information :</Text>
                    </View>
                    <View style={reportDetailStyles.infoContainer}>   
                        <Text style={{fontSize:15,margin:5}}>{task.info}</Text>
                    </View>
                </View>
                
                <View style={reportDetailStyles.buttonContainer}>
                    {/* <View style={reportDetailStyles.attachmentTextContainer}>
                        <Button  title="Re-Submit" titleStyle={{fontSize:15,color:'black'}} buttonStyle={taskStyles.AddTaskButton}/>
                    </View> */}
                    <View>
                        <Button onPress={()=>navigation.navigate('EmployeeReportForm',task)} title="Report" titleStyle={{fontSize:15,color:'black'}} buttonStyle={taskDetailStyles.addTaskButton}/>
                    </View>
                </View>
               </View>
        </View>
    )}


const taskDetailStyles=StyleSheet.create({
    addTaskButton :{
        width:110,
        backgroundColor:'#B2D6C0',
        borderRadius:10,
        
    },
})