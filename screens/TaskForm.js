import React from 'react'
import {taskStyles} from '../styles'
import {Text,StyleSheet,View,FlatList,Image,ScrollView,TouchableOpacity,TextInput,TouchableWithoutFeedback,Keyboard} from 'react-native';

export default function TaskForm() {
    return (
        <View style={taskStyles.form}>
              
            <View style={styles.individualContainer}>
                <View style={styles.LabelContainer}>
                    <Text style={{fontSize:15}}>Time </Text>
                </View>  
                <View style={styles.InputContainer}>
                   <TextInput style={{borderColor:'#9EC2BA',borderWidth:1,width:'80%',padding:7}}/>
                </View>
            </View>
            
            <View style={styles.individualContainer}>
                <View style={styles.LabelContainer}>
                    <Text style={{fontSize:15}}>Location </Text>
                </View>
                <View style={styles.InputContainer}>
                    <TextInput style={{borderColor:'#9EC2BA',borderWidth:1,width:'80%',padding:7}}/>
                </View>
            </View>
            <View style={styles.individualContainer}>
                <View style={styles.LabelContainer}>
                    <Text style={{fontSize:15}}>Customer </Text>
                </View>
                <View style={styles.InputContainer}>
                    <TextInput style={{borderColor:'#9EC2BA',borderWidth:1,width:'80%',padding:7}}/>
                </View>
            </View>
            <View style={styles.individualContainer}>
                <View style={styles.LabelContainer}>
                    <Text style={{fontSize:15}}>Topic </Text>
                </View>
                <View style={styles.InputContainer}>
                    <TextInput style={{borderColor:'#9EC2BA',borderWidth:1,width:'80%',padding:7}}/>
                </View>
            </View>
            <View style={styles.individualContainer}>
                <View style={styles.LabelContainer}>
                    <Text style={{fontSize:15}}>Product </Text>
                </View>
                <View style={styles.InputContainer}>
                    <TextInput style={{borderColor:'#9EC2BA',borderWidth:1,width:'80%',padding:7}}/>
                </View>
            </View>
           
            <View style={styles.individualContainer}>     
                <View style={styles.LabelContainer}>
                    <Text style={{fontSize:15}}>Additional Information </Text>
                </View>
                <View style={styles.InputContainer}>
                    <TextInput multiline  style={{borderColor:'#9EC2BA',borderWidth:1,width:'80%',padding:7}}/>
                </View>
            </View>
            
           
        </View>
    )
}
const styles =StyleSheet.create({
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