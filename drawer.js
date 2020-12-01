import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createAppContainer} from '@react-navigation/native'
import AdminHomeStack from './AdminHomeStack'
import Header from './shared/Header'

const DrawerNavigator = createDrawerNavigator()

export default function()
{
    return(
        <DrawerNavigator.Navigator>
            <DrawerNavigator.Screen name = "AdminHomeStack" component={AdminHomeStack} ></DrawerNavigator.Screen>
        </DrawerNavigator.Navigator>
    )
}

