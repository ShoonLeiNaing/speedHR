import React,{useState} from 'react'
import {Text,StyleSheet,View,FlatList,Image,ScrollView,TouchableOpacity} from 'react-native';
import {styles} from '../styles'
import {employeeStyles} from '../styles'
import {notiStyles} from '../styles'
import { Entypo } from '@expo/vector-icons'; 



export default function EmployeeList({navigation}) {
    const[noti,setNoti]=useState([
        {notiText: "You have assigned a Task  Eat the breakfast "},
        {notiText: "Kyaw Kyaw has assigned his report on Task “ Eat the breakfast “"},
        {notiText: "You have assigned a Task  Eat the breakfast "},

    ])
    
    return (
        <View style={styles.container}>
            <View style={styles.headerBox}>
                <View style={styles.headerBoxText}>
                    <Text style={styles.title}>Employees</Text>
                    <View style={styles.datebox}>
                        <Text style={styles.date}>11/2/2020</Text>
                    </View>
                </View>
                <View style={styles.ImageBox}>
                  <Image  source={require('../assets/pic.jpg')} style={styles.Image}/>
                </View>
            </View>
            
            <View style={notiStyles.notiContainer}>
            <FlatList style={{height:'100%',margin:10}} data={noti} keyExtractor={(item)=>item.id}  renderItem={({item})=>(
              <View style={notiStyles.notiContainerIndividual}>
                <View style={notiStyles.notiImageContainer}>
                    <Image source={require('../assets/pic.jpg')} style={{height:40,width:40,alignSelf:'center'}} />
                </View>
                <View style={notiStyles.notiTextContainer}>
                    <Text style={{width:'100%'}}>{item.notiText}</Text>
                </View>
                <View style={notiStyles.notiIconContainer}>
                    <TouchableOpacity>
                        <Entypo name="cross" size={24} color="#99aab5" />
                    </TouchableOpacity>
                   
                </View>
               </View>
            )}/>
            </View>
        </View>
    )
}
