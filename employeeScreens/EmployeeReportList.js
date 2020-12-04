import React,{useState} from 'react'
import {Text,StyleSheet,View,FlatList,Image,ScrollView,TouchableOpacity} from 'react-native';
import {employeeHomeStyles} from '../employeeStyles'
import {styles} from '../styles'
import { Entypo } from '@expo/vector-icons'; 
import {reportDetailStyles} from '../screens/ReportDetail'
import { Button } from 'react-native-elements';
import {taskStyles} from '../styles'


export default function EmployeeReportList({navigation}) {
   const[report,setReport]=useState([
        {
            id:'43D5',title:'Research for project A',location:'Yangon'
        },
        {
            id:'43D7',title:'Research for project A',location:'Yangon'
        },
        {
            id:'43D0',title:'Research for project A',location:'Yangon'
        }
   ])
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
            <FlatList style={{flex:1,marginVertical:20}} data={report} renderItem={({item})=>(
            <View style={reportList.reportContainer}>
                <View style={reportDetailStyles.reportTitleContainer}>
                    <Text style={{fontSize:18}}>{item.title}</Text>
                </View>

                <View style={reportDetailStyles.reportTitleContainer}>
                    <View style={reportDetailStyles.textContainer}>
                        <Text style={{fontSize:15}}>Task ID :</Text>
                    </View>
                    <View style={reportDetailStyles.infoContainer}>
                        <Text style={{fontSize:17,}}>{item.id}</Text>
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
                <View style={reportList.reportDescriptionContainer}>
                    <View style={reportDetailStyles.textContainer}>
                        <Text style={{fontSize:15}}>Description :</Text>
                    </View>
                    <View style={reportDetailStyles.infoContainer}>   
                        <Text style={{fontSize:15,margin:5}}>Lorem Ipsum is simply dummy 
                        text of the printing and typesetting industry.</Text>
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