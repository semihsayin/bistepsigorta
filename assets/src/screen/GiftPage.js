import React,{Component} from 'react';
import {View,ScrollView,Image,StyleSheet,TouchableOpacity} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button,Text,Icon, Left, Body, Right } from 'native-base';
import axios from 'axios';









export default class GiftPage extends Component{





    render(){

        return(


            <View style={styles.gift}>




                <ScrollView >


                    <Card style={{marginTop:50,height:200,width:350,backgroundColor:'red'}}>

                        <CardItem cardBody>

                            <Image source={{uri: 'https://cdn.webrazzi.com/uploads/2017/07/bisigortaci.jpg'}} style={{height: 200, width: 100, flex: 1,borderRadius:10,}}/>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Button full  style={{borderRadius:8,}}>
                                    <Text>Hediyeyi Al</Text>
                                </Button>
                            </Body>

                        </CardItem>
                    </Card>

                    <Card style={{marginTop:100,height:200,width:350,}}>

                        <CardItem cardBody>
                            <Image source={{uri: 'https://cdn.webrazzi.com/uploads/2017/07/bisigortaci.jpg'}} style={{height: 200, width: null, flex: 1,borderRadius:10,}}/>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Button full  style={{borderRadius:8,}}>
                                    <Text>Hediyeyi Al</Text>
                                </Button>
                            </Body>

                        </CardItem>
                    </Card>

                    <Card style={{marginTop:100,height:200,width:350,}}>

                        <CardItem cardBody>
                            <Image source={{uri: 'https://cdn.webrazzi.com/uploads/2017/07/bisigortaci.jpg'}} style={{height: 200, width: null, flex: 1,borderRadius:10,}}/>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Button full  style={{borderRadius:8,}}>
                                    <Text>Hediyeyi Al</Text>
                                </Button>
                            </Body>

                        </CardItem>
                    </Card>



                    <View style={{height:100,}}></View>
                </ScrollView>
            </View>


        )






    }




}

const styles = StyleSheet.create({

    gift:{
        flex:1,
        alignItems: 'center',


    },

    GiftButton:{
        height: 50,
        width: null,
        backgroundColor:'blue',
        flex:1



    },



});