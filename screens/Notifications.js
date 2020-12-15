import React,{useState} from 'react'
import {Text,StyleSheet,View,FlatList,Image,ScrollView,TouchableOpacity} from 'react-native';
import {styles} from '../styles'
import {employeeStyles} from '../styles'
import {notiStyles} from '../styles'
import { Entypo } from '@expo/vector-icons'; 



export default function Notifications({navigation}) {
    const[noti,setNoti]=useState([
        {id:'1',notiText: "Hla Hla didn't finish the task ( Research ) on time "},
        {id:'2',notiText: "David has assigned report on Task “ Sales for new product “"},
        {id:'3',notiText: "Megan has assigned report on Task “ Research for new product “"},

    ])
    
    return (
        <View style={styles.container}>
            <View style={styles.headerBox}>
                <View style={styles.headerBoxText}>
                    <Text style={styles.title}>Notifications</Text>
                    <View style={styles.datebox}>
                        <Text style={styles.date}>12/11/2020</Text>
                    </View>
                </View>
                <View style={styles.ImageBox}>
                  <Image  source={require('../assets/pic2.jpg')} style={styles.Image}/>
                </View>
            </View>
            
            <View style={notiStyles.notiContainer}>
            <FlatList style={{height:'100%',margin:10}} data={noti} keyExtractor={(item)=>item.id}  renderItem={({item})=>(
              <View style={notiStyles.notiContainerIndividual}>
                <View style={notiStyles.notiImageContainer}>
                    <Image source={require('../assets/pic.png')} style={{height:40,width:40,alignSelf:'center'}} />
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
