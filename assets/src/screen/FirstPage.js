import React, { Component } from 'react';
import {Text, TouchableOpacity,  View, StyleSheet,Image,ScrollView,AsyncStorage} from 'react-native';
import Dialog, {DialogTitle, DialogContent, DialogFooter, DialogButton,} from 'react-native-popup-dialog';
import {Font} from "expo";


export default class FirstPage extends React.Component {




    async componentDidMount() {

        this.setState({fontLoaded: true});
    }



    static navigationOptions = { //back butonu
        headerBackTitle: 'Geri',
        headerStyle: {

            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            shadowColor: 'transparent'
        }
    };

    state = {
        cinsiyet: '',
        defaultAnimationDialog: false,
        fontLoaded: false,

    };


    onClickedw = () => { //woman buttton function

        this.setState({cinsiyet: 'kadin'});
        AsyncStorage.setItem('cinsiyet', 'kadin');
        this.props.navigation.navigate('AgePage')

    };

    onClickedm = () => { //man button function

        this.setState({cinsiyet: 'erkek'});
        AsyncStorage.setItem('cinsiyet', 'kadin');
        this.props.navigation.navigate('AgePage')

    };

    onClickeda = () => { //belirtilmemis button function


        this.setState({
            defaultAnimationDialog: true,
        });


    };

    onYesButton = () => {
        this.setState({cinsiyet: 'belirtilmemis'});
        this.setState({defaultAnimationDialog: false});
        AsyncStorage.setItem('cinsiyet', 'belirtilmemis');
        this.props.navigation.navigate('AgePage')


    };

    render() {


        return (
            <View style={styles.container}>


                <View style={styles.vw1}>{
                    this.state.fontLoaded ? (
                    <Text style={styles.textc}>Cinsiyetiniz?</Text>
                    ):null
                }
                </View>



                <View style={styles.vw2}>
                    <TouchableOpacity
                        style={styles.loginScreenButton}

                        onPress={() => {
                            this.onClickedw()
                        }}
                    >
                        <Image
                            source={require('./assets/female.png')}
                            style={styles.imagestyle}


                        />

                        <View style={{flex:0.4}}/>
                        {
                            this.state.fontLoaded ? (
                                <Text style={styles.loginText}>Kadın</Text>
                            ) : null
                        }
                    </TouchableOpacity>
                </View>

                <View style={styles.vw2}>
                    <TouchableOpacity
                        style={styles.loginScreenButton}
                        onPress={() => {
                            this.onClickedm()
                        }}


                    >

                        <Image
                            source={require('./assets/male.png')}
                            style={styles.imagestyle}


                        />
                        <View style={{flex:0.4}}/>
                        { this.state.fontLoaded ? (
                            <Text style={styles.loginText}>Erkek</Text>
                        ):null
                        }
                    </TouchableOpacity>

                </View>





                <View style={{flex:0.1}}/>
            </View>
        );


    }

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',

    },

    vw1: {
        flex:0.2,



    },


    vw2: {
        flex: 0.6,
        justifyContent: 'center',
        alignItems: 'center',



    },

    loginScreenButton: {

        backgroundColor: 'white',


    },


    loginText: {
        color: 'black',
        textAlign: 'center',
        fontSize: 25,
    },

    textc: {
        color: 'black',
        fontSize: 40,
        alignItems: 'center',
    },

    imagestyle: {
        height: 110,
        width: 110,

    },

    imageStyle2:{
        height: 110,
        width: 110,
        marginLeft:10,



    }


})


