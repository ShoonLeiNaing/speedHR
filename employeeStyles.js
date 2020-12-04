import {StyleSheet} from 'react-native'


export const employeeHomeStyles = StyleSheet.create({
    container : {
        padding:15,
        backgroundColor:'#B2D6C0',
        flex:1,
    },
    datebox:{
        backgroundColor:'#B2D6C0',
        paddingVertical:10,
        width:90,
    },
    bottomContainer:{
        flex:1,
        flexDirection:'row',
        marginVertical:20,
        alignItems:'center',
        justifyContent:'center'
    },
    individualContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    individualBox:{
        backgroundColor:'white',
        height:80,
        width:75,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.4,
        shadowRadius: 2,
        justifyContent:'center',
        alignItems:'center'
    },
    addTaskButton :{
        width:100,
        backgroundColor:'#B2D6C0',
        borderRadius:10
    },
    modalView: {
        flex:1,
        shadowColor: "#000",
        backgroundColor:'#B2D6C0'  ,
        padding:20,
        paddingVertical:40
      },
})