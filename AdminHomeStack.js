import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from '@react-navigation/native';
import SayargyiHome from './screens/SayargyiHome'
import EmployeeList from './screens/EmployeeList'
import Profile from './screens/Profile'


const AdminHomeStack = createStackNavigator()

export default function()
{
    return (
        <AdminHomeStack.Navigator>
            <AdminHomeStack.Screen name="SayargyiHome" component={SayargyiHome}></AdminHomeStack.Screen>
            <AdminHomeStack.Screen name="EmployeeList" component={EmployeeList}></AdminHomeStack.Screen>
            <AdminHomeStack.Screen name="Profile" component={Profile}></AdminHomeStack.Screen>
        </AdminHomeStack.Navigator>
    )
}