import {createDrawerNavigator} from '@react-navigation/drawer'
import {createAppContainer} from '@react-navigation/native'
import AdminHomeStack from './AdminHomeStack'

const drawerNavigator = createDrawerNavigator({
    Admin : {
        screen : AdminHomeStack
    }
})

export default createAppContainer(drawerNavigator)