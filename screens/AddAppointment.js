import React,{useState} from 'react'
import {Text,StyleSheet,View,FlatList,Image,ScrollView,TouchableOpacity,TextInput, Keyboard} from 'react-native';
import {styles} from '../styles'
import { Entypo } from '@expo/vector-icons'; 
import { Button } from 'react-native-elements';
import {taskStyles} from '../styles'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


export default function AddAppointment({navigation}) {
    
    return (
        
        <View style={styles.container}>
            

            <View style={addAppointmentStyles.reportContainer}>
            
                <View style={addAppointmentStyles.reportTitleContainer}>
                    
                    <View style={addAppointmentStyles.textContainer}>
                        <Text style={{fontSize:15}}>Title :</Text>
                    </View>
                    <View style={addAppointmentStyles.infoContainer}>
                        <TextInput style={{borderColor:'#9EC2BA',borderWidth:1,width:'80%',padding:7,borderRadius:20}}/>
                    </View>
                </View>
                

                <View style={addAppointmentStyles.reportTitleContainer}>
                    <View style={addAppointmentStyles.textContainer}>
                        <Text style={{fontSize:15}}>Start :</Text>
                    </View>
                    <View style={addAppointmentStyles.infoContainer}>
                        <TextInput style={{borderColor:'#9EC2BA',borderWidth:1,width:'80%',padding:7,borderRadius:20}}/>
                    </View>
                </View>

                <View style={addAppointmentStyles.reportTitleContainer}>
                    <View style={addAppointmentStyles.textContainer}>
                        <Text style={{fontSize:15}}>End :</Text>
                    </View>
                    <View style={addAppointmentStyles.infoContainer}>
                        <TextInput style={{borderColor:'#9EC2BA',borderWidth:1,width:'80%',padding:7,borderRadius:20}}/>
                    </View>
                </View>

                <View style={addAppointmentStyles.reportDescriptionContainer}>
                    <View style={addAppointmentStyles.textContainer}>
                        <Text style={{fontSize:15}}>Agenda :</Text>
                    </View>
                    <View style={addAppointmentStyles.infoContainer}>   
                        <TextInput style={{borderColor:'#9EC2BA',borderWidth:1,width:'80%',padding:7,borderRadius:20,height:'80%'}}/>
                    </View>
                </View>
                <View style={addAppointmentStyles.attachmentContainer}>
                    <View style={addAppointmentStyles.attachmentTextContainer}>
                        <Text style={{fontSize:15}}>Attachments :</Text>
                    </View>
                    <View style={addAppointmentStyles.attachmentButtonContainer}>
                        <Entypo name="attachment" size={24} color="black" style={{marginRight:50}} />
                    </View>
                </View>
                <View style={addAppointmentStyles.buttonContainer}>
                    
                    <View style={addAppointmentStyles.attachmentButtonContainer}>
                        <Button  title="Add" titleStyle={{fontSize:15,color:'black'}} buttonStyle={taskStyles.AddTaskButton}/>
                    </View>
                </View>         
            </View>    
        </View>
        
    )
}

export const addAppointmentStyles = StyleSheet.create({
    reportContainer:{
        backgroundColor:'white',
        flex:1,
        marginVertical:5,
        padding:5
    },
    reportTitleContainer:{
        flex:1,
        borderBottomColor:'#ddd',
        borderBottomWidth:1, 
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    reportDescriptionContainer:{
        flex:4,
        flexDirection:'row',
        borderBottomColor:'#ddd',
        borderBottomWidth:1, 
    },
    attachmentContainer:{
        flex:1,
        borderBottomColor:'#ddd',
        borderBottomWidth:1, 
        flexDirection:'row',
    },
    buttonContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        
    },
    textContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    infoContainer:{
        flex:2,
        justifyContent:'center',
        alignItems:'center',
    },
    reportButton:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    attachmentTextContainer : {
        flex:2,
        justifyContent:'center',
        alignItems:'flex-start',
        paddingLeft:15,
        
    },
    attachmentButtonContainer : {
        flex:1,
        justifyContent:'center',
        alignItems:'flex-end',
        marginRight:20  
    }
    
   
})