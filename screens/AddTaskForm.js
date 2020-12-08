import React,{useState} from 'react'
import {Text,StyleSheet,View,FlatList,Image,ScrollView,TouchableOpacity,TouchableWithoutFeedback, Alert, Keyboard,TextInput} from 'react-native';
import {styles} from '../styles'
import {employeeStyles} from '../styles'
import {taskStyles} from '../styles'
import { Feather } from '@expo/vector-icons'; 
import { Button } from 'react-native-elements';

export default function EmployeeList({route,navigation}) {
    const workerId='911'
    const workspaceId='1'
    const[time,setTime]=useState(" ")
    const[location,setLocation]=useState(" ")
    const[customer,setCustomer]=useState(" ")
    const[topic,setTopic]=useState(" ")
    const[product,setProduct]=useState(" ")
    const[info,setInfo]=useState(" ")
    const addTaskHandler =() =>{
        Alert.alert(
            'Assigning Task',
            'Add this task to employee',
            [    
                { text:'No', onPress:()=>console.log('Task not added')},
                { text:'Yes', onPress:()=>{
                    console.log('Task added'),
                    navigation.navigate('AddTasks')
                    axios.post(`https://cdhx4jr2r8.execute-api.ap-south-1.amazonaws.com/Prod/newsfeed/${workspaceId}`, {
                        workerId: workerId,
                        time: time,
                        location: location,
                        customer:customer,
                        topic: topic,
                        workspaceId: workspaceId,
                        info: info

                    })
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                    
                }},
            ]        
        )
        
        
        
    }
    var name=route.params.name;
    const[employee,setEmployee]=useState({
        id:route.params.id,
        name:route.params.name,
        score:route.params.score,
        currentAssignTasks:'3'
    })
    return (
        <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>  
        <View style={styles.container}>
            <View style={taskStyles.taskForm}>
               
                <View style={taskStyles.profileHeader}>
                    <View style={taskStyles.profileHeaderText}>
                        <Text style={{textAlign:'center'}}>Profile</Text>
                    </View>
                    <View style={taskStyles.profileScoreText}>
                        <Text>Score</Text>
                    </View>
                    <View style={taskStyles.profileTaskText}>
                        <Text>Current Assigned Tasks</Text>
                    </View>
                </View>

                <View style={taskStyles.profileDetail}>
                     <View style={taskStyles.profilePicture}>
                        <Image  source={require('../assets/pic.jpg')} style={taskStyles.profileImage}/>
                    </View>
                    <View style={taskStyles.profileNameText}>
                        <Text>{employee.name}</Text>
                    </View>
                    <View style={taskStyles.profileScoreText}>
                        <Text>{employee.score}</Text>
                    </View>
                    <View style={taskStyles.profileTaskText}>
                        <Text>{employee.currentAssignTasks}</Text>
                    </View>
                </View>

               
                <View style={taskStyles.form}>
              
              <View style={TaskFormstyles.individualContainer}>
                  <View style={TaskFormstyles.LabelContainer}>
                      <Text style={{fontSize:15}}>Time </Text>
                  </View>  
                  <View style={TaskFormstyles.InputContainer}>
                     <TextInput onChangeText={(time)=>setTime(time)}  style={{borderColor:'#9EC2BA',borderWidth:1,width:'90%',padding:7,borderRadius:15}}/>
                  </View>
              </View>
              
              <View style={TaskFormstyles.individualContainer}>
                  <View style={TaskFormstyles.LabelContainer}>
                      <Text style={{fontSize:15}}>Location </Text>
                  </View>
                  <View style={TaskFormstyles.InputContainer}>
                      <TextInput onChangeText={(location)=>setLocation(location)} style={{borderColor:'#9EC2BA',borderWidth:1,width:'90%',padding:7,borderRadius:15}}/>
                  </View>
              </View>
              <View style={TaskFormstyles.individualContainer}>
                  <View style={TaskFormstyles.LabelContainer}>
                      <Text style={{fontSize:15}}>Customer </Text>
                  </View>
                  <View style={TaskFormstyles.InputContainer}>
                      <TextInput onChangeText={(customer)=>setCustomer(customer)} style={{borderColor:'#9EC2BA',borderWidth:1,width:'90%',padding:7,borderRadius:15}}/>
                  </View>
              </View>
              <View style={TaskFormstyles.individualContainer}>
                  <View style={TaskFormstyles.LabelContainer}>
                      <Text style={{fontSize:15}}>Topic </Text>
                  </View>
                  <View style={TaskFormstyles.InputContainer}>
                      <TextInput onChangeText={(topic)=>setTopic(topic)} style={{borderColor:'#9EC2BA',borderWidth:1,width:'90%',padding:7,borderRadius:15}}/>
                  </View>
              </View>
              <View style={TaskFormstyles.individualContainer}>
                  <View style={TaskFormstyles.LabelContainer}>
                      <Text style={{fontSize:15}}>Product </Text>
                  </View>
                  <View style={TaskFormstyles.InputContainer}>
                      <TextInput onChangeText={(product)=>setProduct(product)} style={{borderColor:'#9EC2BA',borderWidth:1,width:'90%',padding:7,borderRadius:15}}/>
                  </View>
              </View>
             
              <View style={TaskFormstyles.individualContainer}>     
                  <View style={TaskFormstyles.LabelContainer}>
                      <Text style={{fontSize:15}}>Additional Information </Text>
                  </View>
                  <View style={TaskFormstyles.InputContainer}>
                      <TextInput  onChangeText={(info)=>setInfo(info)} multiline  style={{borderColor:'#9EC2BA',borderWidth:1,width:'90%',padding:7,borderRadius:15}}/>
                  </View>
              </View>
              
             
          </View>
                <View style={taskStyles.addButton}>
                    <Button onPress={addTaskHandler} title="Add Task" titleStyle={{fontSize:15,color:'black'}} buttonStyle={taskStyles.AddTaskButton}/>
                </View>
        </View>   
    </View>
    </TouchableWithoutFeedback>
 
    )
}

const TaskFormstyles =StyleSheet.create({
    individualContainer:{
        flexDirection:'row',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    LabelContainer:{
        flex:2,
        justifyContent:'center',
        alignItems:'center'
    },
    InputContainer:{
        flex:3,
        justifyContent:'center',
        alignItems:'center'
    },
    textInput:{
        borderColor:'#9EC2BA',
        borderRadius:1,
        
    }
})