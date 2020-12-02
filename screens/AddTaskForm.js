import React,{useState} from 'react'
import {Text,StyleSheet,View,FlatList,Image,ScrollView,TouchableOpacity,TouchableWithoutFeedback, Alert} from 'react-native';
import {styles} from '../styles'
import {employeeStyles} from '../styles'
import {taskStyles} from '../styles'
import { Feather } from '@expo/vector-icons'; 
import TaskForm from './TaskForm';
import { Button } from 'react-native-elements';




export default function EmployeeList({route,navigation}) {
    const addTaskHandler =() =>{
        Alert.alert(
            'Assigning Task',
            'Add this task to employee',
            [    
                { text:'No', onPress:()=>console.log('Task not added')},
                { text:'Yes', onPress:()=>console.log('Task added')},
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

                <View style={taskStyles.taskHeader}>
                    <Text style={{fontSize:20}}>Tasks</Text>
                </View>
                <TaskForm/>
                <View style={taskStyles.addButton}>
                    <Button onPress={addTaskHandler} title="Add Task" titleStyle={{fontSize:15,color:'black'}} buttonStyle={taskStyles.AddTaskButton}/>
                </View>
            </View>
            
        </View>
 
    )
}
