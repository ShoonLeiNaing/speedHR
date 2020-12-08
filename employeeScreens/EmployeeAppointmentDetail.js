import React,{useState} from 'react'
import {Text,StyleSheet,View,FlatList,Image,ScrollView,TouchableOpacity,TextInput, Keyboard} from 'react-native';
import {styles} from '../styles'
import {employeeHomeStyles} from '../employeeStyles'
import { Entypo } from '@expo/vector-icons'; 
import { Button } from 'react-native-elements';
import {taskStyles} from '../styles'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


export default function AppointmentDetails({route,navigation}) {
    const[appointment,setAppointment]=useState({
        id:route.params.id,
        name:route.params.name,
        Start:route.params.Start,
        End:route.params.End,
    })
    
    return (
        
        <View style={employeeHomeStyles.container}>
            <View style={styles.headerBox}>
                <View style={styles.headerBoxText}>
                    <Text style={styles.title}>Appointment Details</Text>
                    <View style={styles.datebox}>
                        <Text style={styles.date}>11/2/2020</Text>
                    </View>
                </View>
                <View style={styles.ImageBox}>
                  <Image  source={require('../assets/pic4.jpg')} style={styles.Image}/>
                </View>
            </View>
            <View style={addAppointmentStyles.reportContainer}> 
                <View style={addAppointmentStyles.reportTitleContainer}>
                    <Text style={{fontSize:18}}>{appointment.name}</Text>
                </View>
                
                <View style={addAppointmentStyles.reportTitleContainer}>
                    <View style={addAppointmentStyles.textContainer}>
                        <Text style={{fontSize:15}}>Start :</Text>
                    </View>
                    <View style={addAppointmentStyles.infoContainer}>
                        <Text style={{fontSize:18,fontWeight:'500'}}>{appointment.Start}</Text>
                    </View>
                </View>

                <View style={addAppointmentStyles.reportTitleContainer}>
                    <View style={addAppointmentStyles.textContainer}>
                        <Text style={{fontSize:15}}>End :</Text>
                    </View>
                    <View style={addAppointmentStyles.infoContainer}>
                        <Text style={{fontSize:18,fontWeight:'500'}}>{appointment.End}</Text>
                    </View>
                </View>

                <View style={addAppointmentStyles.reportDescriptionContainer}>
                    <View style={addAppointmentStyles.textContainer}>
                        <Text style={{fontSize:15}}>Agenda :</Text>
                    </View>
                    <View style={addAppointmentStyles.infoContainer}>   
                        <Text style={{fontSize:15,}}>Lorem Ipsum is simply dummy 
                        text of the printing and typesetting industry.Lorem Ipsum is simply dummy 
                        text of the printing and typesetting industry.Lorem Ipsum is simply dummy 
                        text of the printing and typesetting industry.</Text>
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
                     
            </View>    
        </View>
        
    )
}

export const addAppointmentStyles = StyleSheet.create({
    reportContainer:{
        backgroundColor:'white',
        flex:1,
        marginVertical:5,
        padding:5,
        marginVertical:20
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
        flex:3,
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
        padding:15
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