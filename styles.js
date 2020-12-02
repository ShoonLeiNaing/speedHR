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
        flex:5,
        alignItems:'flex-start',
        marginLeft:'10%'
    },

    ImageBox:{
        flex:3,
        width: 80,
        height: 80
    },
    Image:{
        height:'100%',
        width:'80%',

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
        flexDirection:'row',
        justifyContent:'center',
        alignItems:"center",
        height:60,
        width:"100%",
        marginBottom:'5%',
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
        flex:7,
        textAlign:'center',
        fontSize:17, 
    },
    Icon:{
      flex:1
    }
})

export const employeeStyles = StyleSheet.create({
    employeeContainer :{
        marginVertical:'10%',
        backgroundColor:'pink',
    },

    employeeContainerIndividual:{
        flex:1,
        marginVertical:10,
        justifyContent:'center',
        alignItems:'center',
        textAlign:'center'
    },
    employeeText:{
        flexDirection:'row',
      
    },
    number : {
        flex:1.5,
        justifyContent:'center',
        fontSize:15,
        textAlign:'center',
    },
    profilePic : {
        flex:1,
        justifyContent:'center',
        
    },
    name : {
        flex:4,
        fontSize:15,
        textAlign:'center',
        justifyContent:'center',
    },
    name : {
        flex:3,
        fontSize:15,
        textAlign:'center',
        justifyContent:'center',
    },


})

export const profileStyles=StyleSheet.create({
    image:{
        height:100,
        width:100,
        alignSelf:'center',
        borderRadius:400,
        marginTop:20,
        zIndex: 999,
        borderWidth:1,
        borderColor:'black'
    },
    profileContainer:{
        backgroundColor: '#FEFE95',
        marginTop:-50,
        marginBottom:25,
        height:170,
        marginHorizontal:10,
    },

    name : {
      marginTop:65,
      fontSize:20,
      textAlign:'center'
    },

    workerType:{
        marginTop:35,
        marginLeft : 20,
    },
    bottomContainer:{
        height:200,
        backgroundColor: '#FEFE95',
        marginTop:70,

    },
    bottomSmallContainer:{
        flex:1,
        borderBottomWidth:1,
        justifyContent:'center'
    },
    bottomLastSmallContainer:{
        flex:1,
        justifyContent:'center'
    },
    TextContainer :{
        flexDirection:'row',
        justifyContent:'center'
    },
    Text : {
        flex:4,
        fontSize:20, 
    },
})