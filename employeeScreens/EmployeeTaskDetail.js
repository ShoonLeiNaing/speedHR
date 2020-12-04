import React,{useState} from 'react'
import {Text,StyleSheet,View,FlatList,Image,ScrollView,TouchableOpacity} from 'react-native';
import {employeeHomeStyles} from '../employeeStyles'
import {styles} from '../styles'
import { Entypo } from '@expo/vector-icons'; 
import {reportDetailStyles} from '../screens/ReportDetail'
import { Button } from 'react-native-elements';
import {taskStyles} from '../styles'


export default function EmployeeTaskDetail({route,navigation}) {
    const[task,setTask]=useState({
       id:route.params.id,
       name:route.params.name,
       location:route.params.location,
       deadline:route.params.deadline
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
                    <Text style={{fontSize:18}}>{task.name}</Text>
                </View>

                <View style={reportDetailStyles.reportTitleContainer}>
                    <View style={reportDetailStyles.textContainer}>
                        <Text style={{fontSize:15}}>Task ID :</Text>
                    </View>
                    <View style={reportDetailStyles.infoContainer}>
                        <Text style={{fontSize:17,}}>{task.id}</Text>
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
                        <Text style={{fontSize:17}}>Kyaw Kyaw</Text>
                    </View>
                </View>

                <View style={reportDetailStyles.reportTitleContainer}>
                    <View style={reportDetailStyles.textContainer}>
                        <Text style={{fontSize:15}}>Product :</Text>
                    </View>
                    <View style={reportDetailStyles.infoContainer}>
                        <Text style={{fontSize:17,}}>Fertilizer</Text>
                    </View>
                </View>
                <View style={reportDetailStyles.attachmentContainer}>
                    <View style={reportDetailStyles.textContainer}>
                        <Text style={{fontSize:15}}>Topic :</Text>
                    </View>
                    <View style={reportDetailStyles.infoContainer}>
                        <Text style={{fontSize:17,}}>To sell fertilizer</Text>
                    </View>
                </View>
                <View style={reportDetailStyles.reportDescriptionContainer}>
                    <View style={reportDetailStyles.textContainer}>
                        <Text style={{fontSize:15}}>Additional Information :</Text>
                    </View>
                    <View style={reportDetailStyles.infoContainer}>   
                        <Text style={{fontSize:15,margin:5}}>Lorem Ipsum is simply dummy 
                        text of the printing and typesetting industry.</Text>
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