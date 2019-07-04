import React,{Component} from 'react';
import {Text, View, Image, Dimensions} from 'react-native';

import { createBottomTabNavigator, createAppContainer,createStackNavigator} from 'react-navigation';
const Height =(Dimensions.get('window').height);




// screens
import PedometerSensor from "./PedometerSensor";
import ProfilePage from "./ProfilePage";
import RankingPage from "./RankingPage";
import GiftPage from "./GiftPage";
import Icon from 'react-native-vector-icons/Ionicons';
import SettingPage from "./SettingPage";


const ProfileStack = createStackNavigator({
    ProfilePage:{

        screen:ProfilePage

    },

    SettingPage:{
        screen:SettingPage


    }



})



const TabNavigator = createBottomTabNavigator({


        Profile: {
            screen: ProfileStack,
            navigationOptions:{
                tabBarIcon:({ tintColor }) => (<Icon name="ios-person" size={Height*0.042} color={tintColor} />)


            },
        },

        RankingPage:{
            screen: RankingPage,
            navigationOptions:{
                tabBarIcon:({ tintColor }) => (<Icon name="md-podium" size={Height*0.042} color={tintColor} />)


            },


        },
        Home: {
            screen: PedometerSensor,
            navigationOptions: {
                tabBarIcon: ({tintColor}) => (<Image  source={require('./assets/bisigortaci.png'
                )}
                                                      style={{borderRadius:(Height*0.098)/2,height:Height*0.098,width:Height*0.098,marginBottom:30,

                                                      }}
                />)
            }



        },
        Gift:{
            screen: GiftPage,
            navigationOptions:{
                tabBarIcon:({ tintColor }) => (<Icon name="ios-gift" size={Height*0.042} color={tintColor} />)


            },


        },
        Challange:{
            screen: ProfilePage,
            navigationOptions:{
                tabBarIcon:({ tintColor }) => (<Icon name="md-contacts" size={Height*0.042} color={tintColor} />)


            },


        },

    },

    {
        tabBarOptions: {
            activeTintColor: 'red',
            inactiveTintColor: '#586589',






            showLabel:false

        },
        initialRouteName:'Gift',




    });





const TabContainer = createAppContainer(TabNavigator);

export default class Router extends Component {



    static navigationOptions = { //back butonu

        header: null,






    };



    render() {


        return (


            <TabContainer/>




        );
    }
}













