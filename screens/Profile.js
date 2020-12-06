import React,{useState} from 'react'
import {Text,StyleSheet,View,FlatList,Image,ScrollView,TouchableOpacity} from 'react-native';
import {styles} from '../styles'
import {profileStyles} from '../styles'
import { Entypo } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function Profile({route,navigation}) {
    const[employee,setEmployee]=useState(
        {   id:route.params.id,
            name:route.params.name,
            workerType:route.params.workerType
        }
    )
    return (
       <View style={styles.container}>
           <Image  source={require('../assets/pic.jpg')} style={profileStyles.image}/>
            <View style={profileStyles.profileContainer}>
                
                <Text style={profileStyles.name}>{employee.name}</Text>
                <Text style={profileStyles.workerType} >{employee.workerType}</Text>
                <View style={profileStyles.bottomContainer}>
                    <View style={profileStyles.bottomSmallContainer}>
                        <TouchableOpacity onPress={()=>navigation.navigate('Location')}>
                        <View style={profileStyles.TextContainer}>
                            <Entypo name="location" size={24} color="black" style={{flex:1,justifyContent:"flex-start",marginLeft:20}} />
                            <Text style={profileStyles.Text}>Current Location</Text>
                        </View>
                        </TouchableOpacity>
                       
                    </View>
                    <View style={profileStyles.bottomSmallContainer}>
                        <TouchableOpacity>
                        <View style={profileStyles.TextContainer}>
                            <Octicons name="tasklist" size={24} color="black"  style={{flex:1,justifyContent:"flex-start",marginLeft:20}}/>
                            <Text style={profileStyles.Text}>Current Task</Text>
                        </View>
                        </TouchableOpacity>
                        
                    </View>
                    <View style={profileStyles.bottomSmallContainer}>
                        <TouchableOpacity>
                            <View style={profileStyles.TextContainer}>
                                <MaterialCommunityIcons name="page-next-outline" size={24} color="black" style={{flex:1,justifyContent:"flex-start",marginLeft:20}} />
                                <Text style={profileStyles.Text}>Pending Tasks</Text>
                            </View>
                        </TouchableOpacity>
                       
                    </View>
                </View>
                
            </View>
       </View>
    )
}
