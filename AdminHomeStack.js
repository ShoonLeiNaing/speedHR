import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from '@react-navigation/native';
import SayargyiHome from './SayargyiHome'

const screens = {
    SayargyiHome : {
        screen : SayargyiHome
    }
}

const AdminHomeStack = createStackNavigator()

export default function()
{
    return (
        <AdminHomeStack.Navigator>
            <AdminHomeStack.Screen name="SayargyiHome" component={SayargyiHome}></AdminHomeStack.Screen>
        </AdminHomeStack.Navigator>
    )
}