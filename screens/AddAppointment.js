import React,{useState,useCallback} from 'react'
import {Text,StyleSheet,View,FlatList,Image,ScrollView,TouchableOpacity,TextInput, Keyboard,Linking} from 'react-native';
import {styles} from '../styles'
import { Entypo } from '@expo/vector-icons'; 
import { Button } from 'react-native-elements';
import {taskStyles} from '../styles'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import DatePicker from 'react-native-datepicker'
import * as WebBrowser from 'expo-web-browser';
import axios from 'axios'


export default function AddAppointment({navigation}) {
    const[title,setTitle]=useState(" ")
    const[date,setDate]=useState("2020-12-09")
    const[startTime,setStartTime]=useState("6:00")
    const[endTime,setEndTime]=useState("7:00")
    const[location,setLocation]=useState(" ")
    const[description,setDescription]=useState(" ")
    const[url,setUrl]=useState("")
    const[state,setState]=useState(null)
    const supportedURL = "https://google.com";
    
      const OpenURLButton = ({ url, children }) => {


        axios.post('https://cdhx4jr2r8.execute-api.ap-south-1.amazonaws.com/Prod/meeting',
        {
            meetingId : "1",
            workspaceId: "1",
            title: title,
            starttime : startTime,
            endtime: endTime,
            additionalInfo : description,
            date:date

        })
        .then(function (response)
        {
            console.log(response);
        })
        .catch(function (error)
        {
            console.log(error);
        });

      
        var x=date.split("-")
        var y=startTime.split(":")
        var z=endTime.split(":")
        setUrl("http://www.google.com/calendar/event?action=TEMPLATE&dates=2020"+x[1]+x[2]+"T"+y[0]+y[1]+y[2]+"%2F2020"+x[1]+x[2]+"T"+z[0]+z[1]+z[2]+"Z&text="+title+"&location="+location+"&details="+description)
        const handlePress = useCallback(async () => {
        const supported = await Linking.canOpenURL(url);
      
          if (supported) {
            await Linking.openURL(url);
          } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
          }
        }, [url])
      ;
        return <Button title={children} onPress={handlePress} />;

        
      };
    



    return (
        
        <View style={styles.container}>
            <View style={addAppointmentStyles.reportContainer}>
                <View style={addAppointmentStyles.reportTitleContainer}>
                    <View style={addAppointmentStyles.textContainer}>
                        <Text style={{fontSize:15}}>Title :</Text>
                    </View>
                    <View style={addAppointmentStyles.infoContainer}>
                        <TextInput style={{borderColor:'#9EC2BA',borderWidth:1,width:'80%',padding:7,borderRadius:20}} onChangeText={(title)=>setTitle(title)}/>
                    </View>
                </View>
                
                <View style={addAppointmentStyles.reportTitleContainer}>
                <View style={addAppointmentStyles.textContainer}>
                    <Text style={{fontSize:15}}>Date :</Text>
                </View>
                <View style={addAppointmentStyles.infoContainer}>
                     <DatePicker
                        style={{width: 180}}
                        date={date}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        minDate="2020-12-01"
                        maxDate="2025-05-01"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                        // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(date) => setDate(date)}
                    />
                    </View>
                </View>
                <View style={addAppointmentStyles.reportTitleContainer}>
                <View style={addAppointmentStyles.textContainer}>
                    <Text style={{fontSize:15}}>Start Time :</Text>
                </View>
                <View style={addAppointmentStyles.infoContainer}>
                     <DatePicker
                        style={{width: 180}}
                        date={startTime}
                        mode="time"
                        placeholder="select start time"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                        // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(startTime) => setStartTime(startTime)}
                    />
                    </View>
                </View>
                <View style={addAppointmentStyles.reportTitleContainer}>
                <View style={addAppointmentStyles.textContainer}>
                    <Text style={{fontSize:15}}>End Time :</Text>
                </View>
                <View style={addAppointmentStyles.infoContainer}>
                     <DatePicker
                        style={{width: 180}}
                        date={endTime}
                        mode="time"
                        placeholder="select end time"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                        dateIcon: {
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0
                        },
                        dateInput: {
                            marginLeft: 36
                        }
                        // ... You can check the source to find the other keys.
                        }}
                        onDateChange={(endTime) => setEndTime(endTime)}
                    />
                    </View>
                </View>
                <View style={addAppointmentStyles.reportDescriptionContainer}>
                    <View style={addAppointmentStyles.textContainer}>
                        <Text style={{fontSize:15}}>Agenda :</Text>
                    </View>
                    <View style={addAppointmentStyles.infoContainer}>   
                        <TextInput style={{borderColor:'#9EC2BA',borderWidth:1,width:'80%',padding:7,borderRadius:20,height:'80%'}} onChangeText={(description)=>setDescription(description)}/>
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
                        <OpenURLButton url={url}>Add</OpenURLButton>
                        {/* <Button onPress={pressHandler} title="Add" titleStyle={{fontSize:15,color:'black'}} buttonStyle={taskStyles.AddTaskButton}/> */}
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
        flex:2,
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