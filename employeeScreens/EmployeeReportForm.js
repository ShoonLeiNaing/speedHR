import React,{useState} from 'react'
import {Text,StyleSheet,View,FlatList,Image,ScrollView,TouchableOpacity,TextInput} from 'react-native';
import {employeeHomeStyles} from '../employeeStyles'
import {styles} from '../styles'
import { Entypo } from '@expo/vector-icons'; 
import {reportDetailStyles} from '../screens/ReportDetail'
import { Button } from 'react-native-elements';
import {taskStyles} from '../styles'
import axios from 'axios'



export default function EmployeeTaskDetail({route,navigation}) {
    const[reportText,setReportText]=useState("")
    const[data,setData]=useState([])
    const[task,setTask]=useState({
       id:route.params.id,
       name:route.params.name,
       location:route.params.location,
       deadline:route.params.deadline
    })

    const pressHandler=()=>{
        axios.post('https://cdhx4jr2r8.execute-api.ap-south-1.amazonaws.com/Prod/submitReport', {
            taskId:"13624629419604",
            reportData:reportText
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        alert(reportText)
        navigation.navigate('EmployeeHome')
       }
    return (
        <View style={employeeHomeStyles.container}>
           
            <View style={styles.headerBox}>
                <View style={styles.headerBoxText}>
                    <Text style={styles.title}>Reports Form</Text>
                    <View style={employeeHomeStyles.datebox}>
                        <Text style={styles.date}>11/2/2020</Text>
                    </View>
                </View>
                <View style={styles.ImageBox}>
                  <Image  source={require('../assets/pic3.png')} style={styles.Image}/>
                </View>
            </View>
            
            <View style={reportFormStyle.reportFormContainer}>
                <View style={reportFormStyle.individualContainer}>
                    <Text style={{fontSize:20,textAlign:'center',margin:20}}>{task.name}</Text>
                    <Text style={{textAlign:'right',marginHorizontal:40}}>ID : {task.id}</Text>
                </View>
                <View style={reportFormStyle.inputContainer}>
                    <Text style={{fontSize:18,textAlign:'left',margin:20}}>Write in brief</Text>
                    <View style={reportFormStyle.textInputStyle}>
                        <TextInput  style={{padding:10}} onChangeText={(reportText)=>setReportText(reportText)}/>
                    </View>  
                </View>
                <View style={reportFormStyle.attachmentContainer}>
                    <Text style={{fontSize:18,textAlign:'left',marginTop:40,margin:20}}>Attachments</Text>
                    <Entypo style={{textAlign:'left',marginTop:40,marginHorizontal:50}} name="attachment" size={20} color="black" />
                </View>
                        
                <View style={reportDetailStyles.buttonContainer}>   
                    <View>
                        <Button onPress={pressHandler} title="Submit" titleStyle={{fontSize:15,color:'black'}} buttonStyle={reportFormStyle.addTaskButton}/>
                    </View>
                </View>
               </View>
        </View>
    )}


const reportFormStyle=StyleSheet.create({
    addTaskButton :{
        width:110,
        backgroundColor:'#B2D6C0',
        borderRadius:10,
        
    },
    individualContainer:{
        flex:1,
        borderBottomColor:'#ddd',
        borderBottomWidth:1, 
    },
    textInputStyle:{

        borderRadius:15,
        borderColor:'#235347',
        borderWidth:1,
        height:'70%',
        width:'80%',
        marginHorizontal:30
    },
    inputContainer:{
        flex:2,
    },
    attachmentContainer:{
        flexDirection:'row',
        flex:1,
        borderBottomColor:'#ddd',
        borderBottomWidth:1, 
    },
    container : {
        padding:15,
        backgroundColor:'#B2D6C0',
        flex:1,
    },
    reportFormContainer:{
        backgroundColor:'white',
        flex:0.9,
        marginVertical:25,
        padding:5
    }
})