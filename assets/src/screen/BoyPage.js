import React,{Component} from 'React';
import {Text, View, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView,AsyncStorage} from 'react-native';
import {Font} from "expo";
import axios from 'axios';

const blue = '#1273DE'
const gray = '#B7BBBF'



export default class BoyPage extends React.Component {

    async componentDidMount() {
        this.setState({fontLoaded: true});
    }

    state = {
        boy:'168',
        fontLoaded:true,
    };




    static navigationOptions = { //back butonu
        headerBackTitle: 'Geri',
        headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            shadowColor: 'transparent'
        }
    };

    changeColor(){

        if(this.state.boy > 250){

            return gray
        }
        else if(this.state.boy <140){

            return gray
        }
        else{
            return blue
        }


    }

    async componentDidMount(){
        await AsyncStorage.getItem('boy').then( value => this.setState({boy: value}) );
    }


    controllButton(){

        if(this.state.boy > 250 || this.state.boy < 140){

            return true
        }
        else{
            return false
        }
    }

    async handlechange(boy) {
        await AsyncStorage.setItem('boy', this.state.boy);
        // this.props.navigation.navigate('Router')
        const reqData = JSON.stringify({"username": 'alicanturker123321123' });
        axios({
            url: 'http://89.252.178.57/api/user',
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            data: reqData
        })
            .then(response  =>{
                console.log(response)
            }).catch(e=>{
                console.log(e)
        });

    }



    render(){
        return(


            <View style={styles.container}>


                <View>

                        <Text style={styles.boy}>
                            Lütfen boy ölçünüzü giriniz
                        </Text>


                </View>


                <View style={styles.vw1}>

                        <TextInput
                            value={this.state.boy}
                            maxLength={3}
                            fontSize={52}
                            fontWeight='200'
                            onChangeText={(boy) => this.setState({boy})}
                            keyboardType='number-pad'
                            autoFocus={true}
                            marginLeft={20}
                            marginTop={20}/>



                        <Text style={styles.text1}> cm </Text>

                </View>


                <View style={styles.empty}/>
                <View style={styles.empty}/>


                <View style={styles.buttonvw}>
                    <View style={styles.empty2}/>
                    <View style={styles.empty2}/>
                    <View style={styles.empty2}/>
                    <View style={styles.empty2}/>


                    <TouchableOpacity

                        disabled={this.controllButton()}
                        style={{
                            backgroundColor:this.changeColor(),      alignItems: 'center',
                            width: 90,
                            height: 48,
                            padding: 10,
                            borderWidth: 1,
                            borderColor: 'white',
                            borderRadius: 7,
                            marginRight: 10,}}
                        onPress={() => {
                            this.handlechange()
                        }}

                    >
                        <Text style={styles.buttonText}> Devam </Text>
                    </TouchableOpacity>

                </View>

            </View>






        )



    }

}



const styles = StyleSheet.create({

    container:{
        flex:1,


    },

    boy:{
        fontSize:37,
        marginLeft:20,
        marginTop:20,

    },

    buttonvw:{

        alignItems:'flex-start',
        flexDirection: 'row'

    },

    vw1:{

        flexDirection: 'row',
        marginTop: 40

    },
    text1:{
        fontSize:52,
        fontWeight: "100",
        marginTop:20

    },

    button: {

        alignItems: 'center',
        width: 90,
        height: 100,
        padding: 10,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 2,

    },

    buttonText:{
        color:'white', fontSize:18


    },

    empty:{
        flex:0.10,




    },

    empty2:{
        flex:0.24,

    }




})