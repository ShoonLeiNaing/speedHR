import React from 'react'
import {Text,View,StyleSheet,Button,Image } from 'react-native';
import { EvilIcons } from '@expo/vector-icons'; 

export default function Header() {
    return (
        <View>
            <EvilIcons name="navicon" size={24} color="black" />
        </View>
    )
}

