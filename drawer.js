import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createAppContainer} from '@react-navigation/native'
import AdminHomeStack from './AdminHomeStack'
import EmployeeHomeStack from './EmployeeHomeStack'
import Header from './shared/Header'

const DrawerNavigator = createDrawerNavigator()

export default function()
{
    return(
        <DrawerNavigator.Navigator>
            <DrawerNavigator.Screen name = "Admin" component={AdminHomeStack} ></DrawerNavigator.Screen>
            <DrawerNavigator.Screen name="Employee" component={EmployeeHomeStack}></DrawerNavigator.Screen>
        </DrawerNavigator.Navigator>
    )
}

