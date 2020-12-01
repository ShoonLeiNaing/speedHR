import {StyleSheet} from 'react-native'
import { Directions } from 'react-native-gesture-handler'

export const styles = StyleSheet.create({
    container : {
        padding:25,
    },
    headerBox : {
        flex:1,
        flexDirection:"row",
        padding:10,
        backgroundColor:'pink',
       
    },
    headerBoxText : {
        flex:0.4,
        alignItems:'center',
      

    },
    title:{
        marginVertical:20,
        fontSize:20,
    },
    datebox:{
        backgroundColor:'#45F568',
        paddingVertical:5,
        width:90,
    },
    date:{
        marginHorizontal:10,
        fontSize:15,
    }
})