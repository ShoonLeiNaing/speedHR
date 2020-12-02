import React,{useState} from 'react'
import {Text,StyleSheet,View,FlatList,Image,ScrollView,TouchableOpacity} from 'react-native';
import {styles} from '../styles'
import {employeeStyles} from '../styles'



export default function EmployeeList({navigation}) {
    const [employee,setEmployee]=useState([
        {id:'1.', name:'Kyaw Kyaw',workerType:'Programmer'},
        {id:'2.', name:'Maung Maung',workerType:'Content Writer'},
        {id:'3.', name:'Kyaw Kyaw',workerType:'Programmer'},
        {id:'4.', name:'Maung Maung',workerType:'Researcher'},
        {id:'5.', name:'Hla Hla',workerType:'Programmer'},
    ])
    return (
        <View style={styles.container}>
            <View style={styles.headerBox}>
                <View style={styles.headerBoxText}>
                    <Text style={styles.title}>Employees</Text>
                    <View style={styles.datebox}>
                        <Text style={styles.date}>11/2/2020</Text>
                    </View>
                </View>
                <View style={styles.ImageBox}>
                  <Image  source={require('../assets/pic.jpg')} style={styles.Image}/>
                </View>
            </View>
        
            <FlatList style={employeeStyles.employeeContainer}  data={employee} keyExtractor={(item)=>item.id}  renderItem={({item})=>(
               <TouchableOpacity onPress={()=>navigation.navigate('Profile',item)}>
               <View style={employeeStyles.employeeContainerIndividual}>
                    <View style={employeeStyles.employeeText}>
                        <View  style={employeeStyles.number}>
                            <Text style={{width:'100%',textAlign:'center',}}>{item.id}</Text>
                        </View>
                        
                        <View style={employeeStyles.profilePic}>
                            <Image  source={require('../assets/pic.jpg')} style={{height:40,width:40,}} />
                        </View>

                        <View  style={employeeStyles.name}>
                            <Text style={{width:'100%',textAlign:'center',}}>{item.name}</Text>
                        </View>
                    </View>
                </View>
                </TouchableOpacity>
            )}/>
        </View>
    )
}
