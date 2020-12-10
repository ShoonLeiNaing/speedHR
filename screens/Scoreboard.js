import React,{useState,useEffect} from 'react'
import {Text,StyleSheet,View,FlatList,Image,ScrollView,TouchableOpacity} from 'react-native';
import {styles} from '../styles'
import {employeeStyles} from '../styles'
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
                    <Text style={styles.title}>Scoreboard</Text>
                    <View style={styles.datebox}>
                        <Text style={styles.date}>11/2/2020</Text>
                    </View>
                </View>
                <View style={styles.ImageBox}>
                  <Image  source={require('../assets/pic6.png')} style={styles.Image}/>
                </View>
            </View>
        
            <FlatList style={employeeStyles.employeeContainer}  data={data} keyExtractor={(item)=>item.workerId}  renderItem={({item})=>(
               <TouchableOpacity onPress={()=>navigation.navigate('Profile',item)}>
               <View style={employeeStyles.employeeContainerIndividual}>
                    <View style={employeeStyles.employeeText}>
                        <View  style={employeeStyles.number}>
                            <Text style={{width:'100%',textAlign:'center',}}>{item.workerId}.</Text>
                        </View>
                        
                        <View style={employeeStyles.profilePic}>
                            <Image  source={require('../assets/pic.jpg')} style={{height:40,width:40,borderRadius:20}} />
                        </View>

                        <View  style={employeeStyles.name}>
                            <Text style={{width:'100%',textAlign:'center',}}>{item.Name}</Text>
                        </View>
                        <View  style={employeeStyles.score}>
                            <Text style={{width:'100%',textAlign:'center',}}>{item.score}</Text>
                        </View>
                    </View>
                </View>
                </TouchableOpacity>
            )}/>
        </View>
    )
}
