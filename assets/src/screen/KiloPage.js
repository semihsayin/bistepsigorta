import React,{Component} from 'React';
import {Text, View, StyleSheet, TextInput,TouchableOpacity,AsyncStorage} from 'react-native';
import {Font} from "expo";

const blue = '#1273DE'
const gray = '#B7BBBF'


export default class KiloPage extends Component {


    async componentDidMount() {

        this.setState({fontLoaded: true});
    }

    state = {
        kilo:'168',
        fontLoaded:'false'
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

        if(this.state.kilo > 500){

            return gray
        }
        else if(this.state.kilo <  30){

            return gray
        }
        else{
            return blue
        }


    }

    controllButton(){

        if(this.state.kilo > 500 || this.state.kilo < 30){

            return true
        }
        else{
            return false
        }
    }

    async handlechange(kilo) {
        await AsyncStorage.setItem('kilo', this.state.kilo);
        this.props.navigation.navigate('BoyPage')


    }

    componentWillMount(){
        AsyncStorage.getItem('kilo').then( value => this.setState({kilo: value}) );
    }

    render(){
        return(


            <View style={styles.container}>
                <View>
                    {   this.state.fontLoaded ?(
                        <Text style={styles.kilo}>
                            Lütfen vücut ağırlığınızı giriniz
                        </Text>
                    ):null
                    }
                </View>


                <View style={styles.vw1}>
                    {this.state.fontLoaded ? (
                        <TextInput
                            value={this.state.kilo}
                            maxLength={3}
                            fontSize={52}
                            fontWeight='200'
                            onChangeText={(kilo) => this.setState({kilo})}
                            keyboardType='number-pad'
                            autoFocus={true}
                            marginLeft={20}
                            marginTop={20}
/>
                    ):null
                    }


                    <Text style={styles.text1}> kg </Text>
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

    kilo:{
        fontSize:37,
        marginLeft:20,
        marginTop:20,
        fontWeight: 'bold',
        color:'#262121'
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
        marginTop:20,


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
        color:'white', fontSize:18,

    },

    empty:{
        flex:0.11,




    },

    empty2:{
        flex:0.24,

    }




})