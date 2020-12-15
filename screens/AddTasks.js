import React,{useState,useEffect} from 'react'
import {Text,StyleSheet,View,FlatList,Image,ScrollView,TouchableOpacity} from 'react-native';
import {styles} from '../styles'
import {employeeStyles} from '../styles'
import { Feather } from '@expo/vector-icons'; 
import axios from 'axios'



export default function EmployeeList({navigation}) {

    const workspaceId=1
    const URL=`https://cdhx4jr2r8.execute-api.ap-south-1.amazonaws.com/Prod/worker/${workspaceId}`
    const[isLoading,setLoading]=useState(true)
    const[data,setData]=useState([])
    
    useEffect(()=>{
        axios.get(URL)
        .then(function (response) {
            setData(response.data.Items) 
            
        })
        .catch(function (error) {
            alert(error);
        });
    },[])
    
    return (
        <View style={styles.container}>
            <View style={styles.headerBox}>
                <View style={styles.headerBoxText}>
                    <Text style={styles.title}>Add Tasks</Text>
                    <View style={styles.datebox}>
                        <Text style={styles.date}>12/11/2020</Text>
                    </View>
                </View>
                <View style={styles.ImageBox}>
                  <Image  source={require('../assets/pic1.png')} style={styles.Image}/>
                </View>
            </View>
        
            <FlatList style={employeeStyles.employeeContainer}  data={data} keyExtractor={(item)=>item.id}  renderItem={({item})=>(
              
               <View style={employeeStyles.employeeContainerIndividual}>
                    <View style={employeeStyles.employeeText}>
                        <View  style={employeeStyles.number}>
                            <Text style={{width:'100%',textAlign:'center',}}>{item.id}</Text>
                        </View>
                        
                        <View style={employeeStyles.profilePic}>
                            <Image  source={require('../assets/pic.png')} style={{height:40,width:40,}} />
                        </View>

                        <View  style={employeeStyles.name}>
                            <Text style={{width:'100%',textAlign:'center',}}>{item.Name}</Text>
                        </View>
                        <View  style={employeeStyles.score}>
                            <TouchableOpacity onPress={()=>navigation.navigate('AddTaskForm',item)}>
                                <Feather name="plus-circle" size={24} color="black" />
                            </TouchableOpacity>
                           
                        </View>
                    </View>
                </View>
                
            )}/>
        </View>
    )
}
