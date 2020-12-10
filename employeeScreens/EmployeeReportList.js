import React,{useState,useEffect} from 'react'
import {Text,StyleSheet,View,FlatList,Image,ScrollView,TouchableOpacity} from 'react-native';
import {employeeHomeStyles} from '../employeeStyles'
import {styles} from '../styles'
import { Entypo } from '@expo/vector-icons'; 
import {reportDetailStyles} from '../screens/ReportDetail'
import { Button } from 'react-native-elements';
import {taskStyles} from '../styles'
import axios from 'axios'


export default function EmployeeReportList({navigation}) {
    const workerId=911
    const URL=`https://cdhx4jr2r8.execute-api.ap-south-1.amazonaws.com/Prod/getHistory/${workerId}`
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
                    <Text style={styles.title}>Reports List</Text>
                    <View style={employeeHomeStyles.datebox}>
                        <Text style={styles.date}>11/2/2020</Text>
                    </View>
                </View>
                <View style={styles.ImageBox}>
                  <Image  source={require('../assets/pic3.png')} style={styles.Image}/>
                </View>
            </View>
            <FlatList style={{flex:1,marginVertical:20}} data={data} keyExtractor={(item)=>item.taskId} renderItem={({item})=>(
            <View style={reportList.reportContainer}>
                <View style={reportDetailStyles.reportTitleContainer}>
                    <Text style={{fontSize:18}}>{item.topic}</Text>
                </View>

                <View style={reportDetailStyles.reportTitleContainer}>
                    <View style={reportDetailStyles.textContainer}>
                        <Text style={{fontSize:15}}>Task ID :</Text>
                    </View>
                    <View style={reportDetailStyles.infoContainer}>
                        <Text style={{fontSize:17,}}>{item.taskId}</Text>
                    </View>
                </View>
                <View style={reportDetailStyles.reportTitleContainer}>
                    <View style={reportDetailStyles.textContainer}>
                        <Text style={{fontSize:15}}>Location :</Text>
                    </View>
                    <View style={reportDetailStyles.infoContainer}>
                        <Text style={{fontSize:17}}>{item.location}</Text>
                    </View>
                </View>
                <View style={reportDetailStyles.reportTitleContainer}>
                    <View style={reportDetailStyles.textContainer}>
                        <Text style={{fontSize:15}}>Customer :</Text>
                    </View>
                    <View style={reportDetailStyles.infoContainer}>
                        <Text style={{fontSize:17}}>{item.customer}</Text>
                    </View>
                </View>

                <View style={reportDetailStyles.reportTitleContainer}>
                    <View style={reportDetailStyles.textContainer}>
                        <Text style={{fontSize:15}}>Product :</Text>
                    </View>
                    <View style={reportDetailStyles.infoContainer}>
                        <Text style={{fontSize:17,}}>{item.product}</Text>
                    </View>
                </View>
                <View style={reportDetailStyles.attachmentContainer}>
                    <View style={reportDetailStyles.textContainer}>
                        <Text style={{fontSize:15}}>Topic :</Text>
                    </View>
                    <View style={reportDetailStyles.infoContainer}>
                        <Text style={{fontSize:17,}}>{item.topic}</Text>
                    </View>
                </View>
                <View style={reportList.reportDescriptionContainer}>
                    <View style={reportDetailStyles.textContainer}>
                        <Text style={{fontSize:15}}>Description :</Text>
                    </View>
                    <View style={reportDetailStyles.infoContainer}>   
                        <Text style={{fontSize:15,margin:5}}>{item.info}</Text>
                    </View>
                </View>
                
                <View style={reportDetailStyles.attachmentContainer}>
                    <View style={reportDetailStyles.textContainer}>
                        <Text style={{fontSize:15}}>Attachment :</Text>
                    </View>
                    <View style={reportDetailStyles.infoContainer}>
                        <Entypo name="attachment" size={20} color="black" />
                    </View>
                </View>
                
               </View>
               )}/>
        </View>
    )}


const reportList=StyleSheet.create({
    reportContainer:{
        height:530,
        backgroundColor:'white',
        margin:15
    },
    reportDescriptionContainer:{
        flex:2,
        flexDirection:'row',
        borderBottomColor:'#ddd',
        borderBottomWidth:1, 
    }
})