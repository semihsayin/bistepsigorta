import React, {Component} from "react";

import {Text, AsyncStorage} from "react-native";

export default class Splash extends Component {
    state= {
        boy:'',

    };
    async componentWillMount() {
        await AsyncStorage.getItem('boy').then( value => this.setState({boy: value}) );
        if(this.state.cinsiyet != null) {
            this.props.navigation.navigate('Router')
        }
        else {
            this.props.navigation.navigate('FirstPage')
        }
    }
    render(){
        return (
            <Text> selaaaaaa </Text>
        )
    }
}