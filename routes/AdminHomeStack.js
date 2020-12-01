import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SayargyiHome from '../screens/SayargyiHome'

const screens = {
    SayargyiHome : {
        screen : SayargyiHome
    }
}

const AdminHomeStack = createStackNavigator(screens)

export default AdminHomeStack