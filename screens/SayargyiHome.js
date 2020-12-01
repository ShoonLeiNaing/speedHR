import React,{useState} from 'react'
import {Text,StyleSheet,View,FlatList,Image} from 'react-native';
import {styles} from '../styles'

export default function SayargyiHome(){
    return (
        <View style={styles.container}>
            <View style={styles.headerBox}>
                <View style={styles.headerBoxText}>
                    <Text style={styles.title}>Welcome</Text>
                    <View style={styles.datebox}>
                        <Text style={styles.date}>11/2/2020</Text>
                    </View>
                </View>
                <View>
                <Image></Image>
                </View>
            </View>
            
        </View>
    )
}