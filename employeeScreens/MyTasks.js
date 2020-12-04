import React,{useState} from 'react'
import {Text,StyleSheet,View,FlatList,Image,ScrollView,TouchableOpacity} from 'react-native';
import {employeeHomeStyles} from '../employeeStyles'
import {styles} from '../styles'
import { Entypo } from '@expo/vector-icons'; 


export default function MyTasks({navigation}) {
    const[task,setTask]=useState([
        {id:'4D7782' ,name:'Video Editing for project A', deadline:'8:30AM',location:'office'},
        {id:'4D9782' ,name:'Video Editing for project B', deadline:'8:30AM',location:'office'},
        {id:'4DF782' ,name:'Video Editing for project C', deadline:'8:30AM',location:'office'},
        {id:'4DF793' ,name:'Video Editing for project C', deadline:'8:30AM',location:'office'},
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
            <FlatList data={task} style={{marginVertical:30,flex:1,marginHorizontal:10}} renderItem={({item})=>(
                <View style={employeeTaskStyles.taskContainer}>
                    <View style={employeeTaskStyles.individualRow}>
                        <View style={employeeTaskStyles.titleContainer}>
                            <Text>Task ID </Text>
                        </View>
                        <View style={employeeTaskStyles.textContainer}>
                            <Text>:  {item.id}</Text>
                        </View>
                    </View>
                    <View style={employeeTaskStyles.individualRow}>
                        <View style={employeeTaskStyles.titleContainer}>
                            <Text>Task Title </Text>
                        </View>
                        <View style={employeeTaskStyles.textContainer}>
                            <Text>:  {item.name}</Text>
                        </View>
                    </View>
                    <View style={employeeTaskStyles.individualRow}>
                        <View style={employeeTaskStyles.titleContainer}>
                            <Text>Deadline</Text>
                        </View>
                        <View style={employeeTaskStyles.titleContainer}>
                            <Text>:  {item.deadline}</Text>
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