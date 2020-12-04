import * as React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {createAppContainer} from '@react-navigation/native'
import EmployeeHome from './employeeScreens/EmployeeHome'
import EmployeeNotifications from './employeeScreens/EmployeeNotifications'
import EmployeeNewsfeed from './employeeScreens/EmployeeNewsfeed'
import MyTasks from './employeeScreens/MyTasks'
import EmployeeTaskDetail from './employeeScreens/EmployeeTaskDetail'
import TaskHistory from './employeeScreens/TaskHistory'
import EmployeeReportForm from './employeeScreens/EmployeeReportForm'
import EmployeeReportList from './employeeScreens/EmployeeReportList'

const EmployeeHomeStack = createStackNavigator()

export default function()
{
    return(
        <EmployeeHomeStack.Navigator>
            <EmployeeHomeStack.Screen name="EmployeeHome" component={EmployeeHome}></EmployeeHomeStack.Screen>
            <EmployeeHomeStack.Screen name="EmployeeNotifications" component={EmployeeNotifications}></EmployeeHomeStack.Screen>
            <EmployeeHomeStack.Screen name='EmployeeNewsfeed' component={EmployeeNewsfeed}></EmployeeHomeStack.Screen>
            <EmployeeHomeStack.Screen name='MyTasks' component={MyTasks}></EmployeeHomeStack.Screen>
            <EmployeeHomeStack.Screen name='EmployeeTaskDetail' component={EmployeeTaskDetail}></EmployeeHomeStack.Screen>
            <EmployeeHomeStack.Screen name='TaskHistory' component={TaskHistory}></EmployeeHomeStack.Screen>
            <EmployeeHomeStack.Screen name='EmployeeReportForm' component={EmployeeReportForm}></EmployeeHomeStack.Screen>
            <EmployeeHomeStack.Screen name='EmployeeReportList' component={EmployeeReportList}></EmployeeHomeStack.Screen>
        </EmployeeHomeStack.Navigator>
    )
}