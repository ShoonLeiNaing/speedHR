import * as React from 'react';
import { Text, View , StyleSheet , Image , TextInput , TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function SignIn()
{
    return(
        <View
        style = {styles.container}
        >
            <LinearGradient
            start={{x: 1, y: 1}} end={{x: 0, y: 0}}
            colors = {
                [
                    'transparent','#22EEDD'
                ]
            }
            style = {styles.flexcontainer}
            >
                <LinearGradient
                start={{x: 1, y: 1}} end={{x: 0, y: 0}}
                colors = {
                    [
                        '#45F568','transparent'
                    ]
                }
                style = {styles.flexcontainer}
                >
                    <View
                    style = {styles.viewFirstContainer}
                    >
                        <Image
                        source={require('./awba-logo.png')}
                        ></Image>
                    </View>
                    <View
                    style = {styles.viewSecondContainer}
                    >
                        <TextInput
                        style = {styles.textInput}
                        >

                        </TextInput>
                        <TouchableOpacity
                        style = {styles.button}
                        >
                            <Text>Next</Text>
                        </TouchableOpacity>
                    </View>
                    <View
                    style = {styles.viewThirdContainer}
                    >

                    </View>
                </LinearGradient>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    flexcontainer: {
      flex: 1,
      width:'100%',
      alignItems: 'center',
      justifyContent: 'center',
    },
    viewFirstContainer:
    {
        flex: 1,
        width:"100%",
        alignItems: 'center',
      justifyContent: 'center',
    },
    viewSecondContainer:
    {
        flex: 1,
        width:"100%",
        alignItems: 'center',
      justifyContent: 'center',
    },
    textInput:
    {
        height:50,
        width:'80%',
        borderColor:'black',
        borderWidth:2,
        marginBottom:20,
    },
    button:
    {
        height:50,
        width:'80%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'white',
        elevation:10,
        shadowColor:'black',
        shadowOffset:{width:2,height:2},
        shadowOpacity:0.5,
        shadowRadius:5,
    },
    viewThirdContainer:
    {
        flex: 1,
        width:"100%",
        alignItems: 'center',
        justifyContent: 'center',
    }
  });