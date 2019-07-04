import React, {Component} from "react";

import {createStackNavigator,createAppContainer} from "react-navigation";
import FirstPage from "./assets/src/screen/FirstPage";
import AgePage from "./assets/src/screen/AgePage";
import KiloPage from "./assets/src/screen/KiloPage";
import BoyPage from "./assets/src/screen/BoyPage";
import Router from "./assets/src/screen/Router";
import SettingPage from "./assets/src/screen/SettingPage";
import PedometerSensor from "./assets/src/screen/PedometerSensor";
import Splash from "./assets/src/screen/Splash";
import {AsyncStorage} from "react-native";


const cinsiyetNavigator = createStackNavigator({
  FirstPage: FirstPage,
  PedometerSensor:PedometerSensor,
  AgePage:AgePage,
  KiloPage:KiloPage,
  BoyPage:BoyPage,
  Router:Router,
  Splash:Splash,

},{initialRouteName:"Router"


});
const ageNavigator = createStackNavigator({
  FirstPage: FirstPage,
  PedometerSensor:PedometerSensor,
  AgePage:AgePage,
  KiloPage:KiloPage,
  BoyPage:BoyPage,
  Router:Router,

},{initialRouteName:"AgePage"


});
const kiloNavigator = createStackNavigator({
  FirstPage: FirstPage,
  PedometerSensor:PedometerSensor,
  AgePage:AgePage,
  KiloPage:KiloPage,
  BoyPage:BoyPage,
  Router:Router,

},{initialRouteName:"KiloPage"


});
const boyNavigator = createStackNavigator({
  FirstPage: FirstPage,
  PedometerSensor:PedometerSensor,
  AgePage:AgePage,
  KiloPage:KiloPage,
  BoyPage:BoyPage,
  Router:Router,

},{initialRouteName:"BoyPage"


});
const pedoNavigator = createStackNavigator({
  FirstPage: FirstPage,
  PedometerSensor:PedometerSensor,
  AgePage:AgePage,
  KiloPage:KiloPage,
  BoyPage:BoyPage,
  Router:Router,

},{initialRouteName:"PedometerSensor"



});


const RouterNavigator = createStackNavigator({
  FirstPage: FirstPage,
  PedometerSensor: PedometerSensor,
  AgePage: AgePage,
  KiloPage: KiloPage,
  BoyPage: BoyPage,
  Router: Router,

},{initialRouteName:'Router'

});






const CinsiyetContainer = createAppContainer(cinsiyetNavigator);
const AgeContainer = createAppContainer(ageNavigator);
const KiloContainer = createAppContainer(kiloNavigator);
const BoyContainer = createAppContainer(boyNavigator);
const PedoContainer = createAppContainer(pedoNavigator);
const RouterContainer = createAppContainer((RouterNavigator));


export default class App extends Component {
  state = {
    cinsiyet: '',
    age: '',
    kilo: '',
    boy:'',
    secilen: ''

  };

  async componentWillMount(){
    await AsyncStorage.getItem('cinsiyet').then( value => this.setState({cinsiyet: value}) );
    await AsyncStorage.getItem('age').then( value => this.setState({age: value}) );
    await AsyncStorage.getItem('kilo').then( value => this.setState({kilo: value}) );
    await AsyncStorage.getItem('boy').then( value => this.setState({boy: value}) );

    if (this.state.cinsiyet == null) {
      this.setState({secilen: CinsiyetContainer})
    }
    else {
      this.setState({secilen: PedoContainer})
    }
  }


  render() {
    return (
        <CinsiyetContainer/>
    );
  }



}