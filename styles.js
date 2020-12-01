import {StyleSheet} from 'react-native'
import { Directions } from 'react-native-gesture-handler'

export const styles = StyleSheet.create({
    container : {
        padding:25,
    },
    headerBox : {
        flexDirection:"row",
        padding:10,
        backgroundColor:'pink',
       
    },
    headerBoxText : {
        flex:4,
        alignItems:'center',
    },

    ImageBox:{
        flex:6,
    },
    title:{
        marginVertical:10,
        fontSize:20,
    },
    datebox:{
        backgroundColor:'#45F568',
        paddingVertical:10,
        width:90,
    },
    date:{
        marginHorizontal:10,
        fontSize:15,
    },
    smallContainer:{
        height:50,
        width:"100%",
        marginBottom:'7%',
        backgroundColor:'pink',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.4,
        shadowRadius: 2,
    },
    scroll:{
        marginVertical:'5%',
        padding:'5%',
    },
    smallContainerText : {
        textAlign:'center',
        margin:'5%',
        fontSize:20,
        
    }
})