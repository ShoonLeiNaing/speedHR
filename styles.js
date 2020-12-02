import {StyleSheet} from 'react-native'
import { Directions } from 'react-native-gesture-handler'

export const styles = StyleSheet.create({
    container : {
        padding:25,
        backgroundColor:'#BEE9E4',
        flex:1,
    },
    headerBox : {
        flexDirection:"row",
        padding:10,
        backgroundColor:'white',
       
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
        backgroundColor:'#BEE9E4',
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
        backgroundColor:'white',
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
      flex:1,
      marginRight:5
    }
})

export const employeeStyles = StyleSheet.create({
    employeeContainer :{
        marginVertical:'10%',
        backgroundColor:'white',
    },

    employeeContainerIndividual:{
        flex:1,
        paddingVertical:10,
        borderBottomColor:'#ddd',
        borderBottomWidth:1,
    },
    employeeText:{
        flexDirection:'row',
      
    },
    number : {
        flex:1.2,
        justifyContent:'center',
        fontSize:15,
        textAlign:'center',
    },
    profilePic : {
        flex:1,
        justifyContent:'center',
        
    },
    name : {
        flex:3,
        fontSize:15,
        textAlign:'center',
        justifyContent:'center',
    },
    score : {
        flex:1,
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
        backgroundColor: 'white',
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
        backgroundColor: 'white',
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

export const taskStyles = StyleSheet.create({
    taskForm:{
        backgroundColor:'white',
        padding:5,
        flex:1
        
    },
    profileHeader:{
        flexDirection:'row',
        justifyContent:'center',
        borderBottomColor:'#ddd',
        borderBottomWidth:1,  
        flex:1.3 ,
        justifyContent:'center',
        alignItems:'center'
    },
    profileHeaderText:{
        flex:2.2,
    },
    profileScoreText:{
        flex:1.5,
        justifyContent:'center',
        alignItems:'center'
    },
    profileTaskText:{
        flex:1.5,
        justifyContent:'center',
        alignItems:'center'
    },

    profileDetail:{
        flexDirection:'row',
        justifyContent:'center',
        borderBottomColor:'#ddd',
        borderBottomWidth:1,
        flex:1.5
    },

    profilePicture:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },

    profileNameText:{
        flex:1.3,
        justifyContent:'center',
        alignItems:'center'
    },
    profileImage:{
        width:40,
        height:40
    },
    form :{
        flex:8,
        borderBottomColor:'#ddd',
        borderBottomWidth:1,
    },
    addButton:{
        flex:1,
        borderBottomColor:'#ddd',
        borderBottomWidth:1,
        justifyContent:'center',
        alignItems:'center'
    },
    taskHeader:{
        flex:1,
        borderBottomColor:'#ddd',
        borderBottomWidth:1,
        justifyContent:'center',
        alignItems:'flex-start',
        paddingHorizontal:30,
    },
    AddTaskButton : {
        width:100,
        backgroundColor:'#BEE9E4',
        borderRadius:10
    }
})

export const notiStyles =StyleSheet.create({
    notiContainer :{
        marginTop:'10%',
        backgroundColor:'white'
    },
    notiContainerIndividual:{
        height:70,
        borderBottomColor:'#ddd',
        borderBottomWidth:1,
        padding:5,
        flexDirection:'row'
    },
    notiImageContainer : {
        flex:1.5,
        alignItems:'center',
        justifyContent:'center'
    },
    notiTextContainer:{
        flex:5,
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:15
    },
    notiIconContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
})