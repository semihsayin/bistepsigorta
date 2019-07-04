import React,{Component} from 'react';
import {View,ScrollView,Image,StyleSheet} from 'react-native';
import {Card, CardItem, Button,Text, Body } from 'native-base';
import { Font , AppLoading} from 'expo';







export default class GiftPage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            response:[
                    {
                        "id":1,
                        "display":"LimeGreen",
                        "imgURL":"",
                        "goal":"17897",
                        "goal_type":"1",
                        "purchase_count":778,
                        "is_active":0,
                        "created_at":null,
                        "updated_at":null
                    },
                ],
            cardList: '',
        };
    }
    componentWillMount = async () =>  {
        await Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
        });
        fetch("http://89.252.178.57/api/badges")
            .then(response =>{
                console.log(response._bodyInit);
                this.setState({response: JSON.parse(response._bodyInit)});
            }).catch(function(err) {
            console.log(err);
        });
        this.setState({ loading: true })
    }

    render(){

        console.log(this.state.response);

        if(this.state.loading){
            return(
                <View style={styles.gift}>
                    <ScrollView >
                        {this.state.response.map(item=>{
                            return(
                                <Card style={{marginTop:40, marginBottom:30, height:200,width:350,backgroundColor:'red'}} elevation={5} >

                                    <CardItem cardBody>
                                        <Image source={{uri: item.imgURL}} style={{height: 200, width: 100, flex: 1}}/>
                                    </CardItem>
                                    <CardItem>
                                        <Body>
                                            <Button full  style={{borderRadius:0,}}>
                                                <Text>{item.display}</Text>
                                            </Button>
                                        </Body>

                                    </CardItem>
                                </Card>
                            )
                        })}
                        <View style={{height:50,}}></View>
                    </ScrollView>
                </View>


            )
        }
        return null







    }

}
function Gift(props) {
    return(
        <Card style={{marginTop:50,height:200,width:350,backgroundColor:'red'}}>

            <CardItem cardBody>
                <Image source={{uri: props.IMG}} style={{height: 200, width: 100, flex: 1,borderRadius:10,}}/>
            </CardItem>
            <CardItem>
                <Body>
                    <Button full  style={{borderRadius:8,}}>
                        <Text>{props.Name}</Text>
                    </Button>
                </Body>

            </CardItem>
        </Card>
    )
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