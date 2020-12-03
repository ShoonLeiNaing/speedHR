import React,{useState} from 'react'
import {Text,StyleSheet,View,FlatList,Image,ScrollView,TouchableOpacity} from 'react-native';
import {styles} from '../styles'
import {employeeStyles} from '../styles'
import {notiStyles} from '../styles'
import { Entypo } from '@expo/vector-icons'; 

export default function reportList({navigation}) {
    const[report,setReport]=useState([
        {id:"3D44",reportName: "Research A Report",employee:'Kyaw Kyaw'},
        {id:"3D45",reportName: "Research B Report",employee:'Maung Maung'},
        {id:"3D46",reportName: "Research C Report",employee:'Hla Hla'},
    ])
    
    return (
        <View style={styles.container}>
            <View style={styles.headerBox}>
                <View style={styles.headerBoxText}>
                    <Text style={styles.title}>Reports</Text>
                    <View style={styles.datebox}>
                        <Text style={styles.date}>11/2/2020</Text>
                    </View>
                </View>
                <View style={styles.ImageBox}>
                  <Image  source={require('../assets/pic5.png')} style={styles.Image}/>
                </View>
            </View>
            
            <View style={notiStyles.notiContainer}>
            <FlatList style={{height:'100%',margin:10}} data={report} keyExtractor={(item)=>item.id}  renderItem={({item})=>(
              <View style={reportStyles.titleContainer}>
                  <TouchableOpacity onPress={()=>navigation.navigate('ReportDetail',item)}>
                    <Text style={{textAlign:'center',fontSize:15}}>{item.reportName}</Text>
                  </TouchableOpacity>   
               </View>
            )}/>
            </View>
        </View>
    )
}

const reportStyles=StyleSheet.create({
    titleContainer:{
        height:60,
        borderBottomColor:'#ddd',
        borderBottomWidth:1,
        padding:5,
        justifyContent:'center'
    }
})