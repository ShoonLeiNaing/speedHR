import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createAppContainer } from '@react-navigation/native';
import SayargyiHome from './screens/SayargyiHome'
import EmployeeList from './screens/EmployeeList'
import Profile from './screens/Profile'
import Scoreboard from './screens/Scoreboard'
import AddTasks from './screens/AddTasks'
import AddTaskForm from './screens/AddTaskForm'
import Notifications from './screens/Notifications'
import ReportList from './screens/ReportList'
import ReportDetail from './screens/ReportDetail'
import Newsfeed from './screens/Newsfeed'
import Comments from './screens/Comments'
import UpcomingAppointment from './screens/UpcomingAppointment'
import PreviousAppointment from './screens/PreviousAppoinment'
import AddAppointment from './screens/AddAppointment'
import AppointmentDetails from './screens/AppointmentDetails'
import Location from './screens/Location'


const AdminHomeStack = createStackNavigator()

export default function()
{
    return (
        <AdminHomeStack.Navigator>
            <AdminHomeStack.Screen name="SayargyiHome" component={SayargyiHome}></AdminHomeStack.Screen>
            <AdminHomeStack.Screen name="EmployeeList" component={EmployeeList}></AdminHomeStack.Screen>
            <AdminHomeStack.Screen name="Profile" component={Profile}></AdminHomeStack.Screen>
            <AdminHomeStack.Screen name="Scoreboard" component={Scoreboard}></AdminHomeStack.Screen>
            <AdminHomeStack.Screen name="AddTasks" component={AddTasks}></AdminHomeStack.Screen>
            <AdminHomeStack.Screen name="AddTaskForm" component={AddTaskForm}></AdminHomeStack.Screen>
            <AdminHomeStack.Screen name="Notifications" component={Notifications}></AdminHomeStack.Screen>
            <AdminHomeStack.Screen name="ReportList" component={ReportList}></AdminHomeStack.Screen>
            <AdminHomeStack.Screen name="ReportDetail" component={ReportDetail}></AdminHomeStack.Screen>
            <AdminHomeStack.Screen name="Newsfeed" component={Newsfeed}></AdminHomeStack.Screen>
            <AdminHomeStack.Screen name="Comments" component={Comments}></AdminHomeStack.Screen>
            <AdminHomeStack.Screen name="UpcomingAppointment" component={UpcomingAppointment}></AdminHomeStack.Screen>
            <AdminHomeStack.Screen name="PreviousAppointment" component={PreviousAppointment}></AdminHomeStack.Screen>
            <AdminHomeStack.Screen name="AddAppointment" component={AddAppointment}></AdminHomeStack.Screen>
            <AdminHomeStack.Screen name="AppointmentDetails" component={AppointmentDetails}></AdminHomeStack.Screen>
            <AdminHomeStack.Screen name="Location" component={Location}></AdminHomeStack.Screen>

        </AdminHomeStack.Navigator>
    )
}