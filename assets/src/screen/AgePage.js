import React,{Component} from 'React';
import {Text, View, StyleSheet, Picker, TextInput,TouchableOpacity,AsyncStorage} from 'react-native';
import {Font} from "expo";





export default class AgePage extends Component{
    async componentDidMount() {


        this.setState({fontLoaded: true});
    }



    state = {
        age:'1953 ',
        fontLoaded: 'false'

    };
    componentWillMount(){
        AsyncStorage.getItem('age').then( value => this.setState({age: value}) );
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

    handlechange(itemValue) {
        this.setState({age: itemValue});
        AsyncStorage.setItem('age', itemValue);
    }

    render(){
        return(
            <View style={styles.container}>
                <View style = {styles.vw1}>
                    {    this.state.fontLoaded ?(
                        <Text style={styles.firsttext}>Lütfen doğum yılınızı seçiniz</Text>
                    ):null
                    }
                </View>

                <View style={styles.empty}/>


                <View style = {styles.input}>

                    {   this.state.fontLoaded ?(
                        <TextInput value={this.state.age}
                                   maxLength={4}
                                   fontSize={52}
                                   fontWeight='300'
                                   editable={false}
                                   marginLeft={20}


                        />
                    ):null
                    }
                </View>

                <View style={styles.empty}/>
                <View style={styles.empty}/>

                <View style={styles.buttonvw}>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            this.props.navigation.navigate('KiloPage')
                        }}
                    >

                        {     this.state.fontLoaded ? (
                            <Text style={styles.buttonText}> Devam </Text>
                        ):null
                        }
                    </TouchableOpacity>

                </View>

                <View style = {styles.picker}>
                    <Picker
                        selectedValue={this.state.age}


                        style={{height:300, width: 375, borderRadius: 4, borderWidth: 0.5, borderColor: 'transparent',
                            backgroundColor:'#f7fafc'}}
                        onValueChange={(itemValue, itemIndex,itemLable) =>
                            this.handlechange(itemValue)
                        }>


                        <Picker.Item label="1953" value= "1953"/>
                        <Picker.Item label="1954" value= "1954"/>
                        <Picker.Item label="1955" value= "1955"/>
                        <Picker.Item label="1956" value= "1956"/>
                        <Picker.Item label="1957" value= "1957"/>
                        <Picker.Item label="1958" value= "1958"/>
                        <Picker.Item label="1959" value= "1959"/>
                        <Picker.Item label="1960" value= "1960"/>
                        <Picker.Item label="1961" value= "1961"/>
                        <Picker.Item label="1962" value= "1962"/>
                        <Picker.Item label="1963" value= "1963"/>
                        <Picker.Item label="1964" value= "1964"/>
                        <Picker.Item label="1965" value= "1965"/>
                        <Picker.Item label="1966" value= "1966"/>
                        <Picker.Item label="1967" value= "1967"/>
                        <Picker.Item label="1968" value= "1968"/>
                        <Picker.Item label="1969" value= "1969"/>
                        <Picker.Item label="1970" value= "1970"/>
                        <Picker.Item label="1971" value= "1971"/>
                        <Picker.Item label="1972" value= "1972"/>
                        <Picker.Item label="1973" value= "1973"/>
                        <Picker.Item label="1974" value= "1974"/>
                        <Picker.Item label="1975" value= "1975"/>
                        <Picker.Item label="1976" value= "1976"/>
                        <Picker.Item label="1977" value= "1977"/>
                        <Picker.Item label="1978" value= "1978"/>
                        <Picker.Item label="1979" value= "1979"/>
                        <Picker.Item label="1980" value= "1980"/>
                        <Picker.Item label="1981" value= "1981"/>
                        <Picker.Item label="1982" value= "1982"/>
                        <Picker.Item label="1983" value= "1983"/>
                        <Picker.Item label="1984" value= "1984"/>
                        <Picker.Item label="1985" value= "1985"/>
                        <Picker.Item label="1986" value= "1986"/>
                        <Picker.Item label="1987" value= "1987"/>
                        <Picker.Item label="1988" value= "1988"/>
                        <Picker.Item label="1989" value= "1989"/>
                        <Picker.Item label="1990" value= "1990"/>
                        <Picker.Item label="1991" value= "1991"/>
                        <Picker.Item label="1992" value= "1992"/>
                        <Picker.Item label="1993" value= "1993"/>
                        <Picker.Item label="1994" value= "1994"/>
                        <Picker.Item label="1995" value= "1995"/>
                        <Picker.Item label="1996" value= "1996"/>
                        <Picker.Item label="1997" value= "1997"/>
                        <Picker.Item label="1998" value= "1998"/>
                        <Picker.Item label="1999" value= "1999"/>
                        <Picker.Item label="2000" value= "2000"/>
                        <Picker.Item label="2001" value= "2001"/>
                        <Picker.Item label="2002" value= "2002"/>
                        <Picker.Item label="2003" value= "2003"/>
                        <Picker.Item label="2004" value= "2004"/>
                        <Picker.Item label="2005" value= "2005"/>





                    </Picker>
                </View>

            </View>

        )



    }

}




const styles = StyleSheet.create({

    container:{
        flex:1,



    },

    buttonvw:{


        alignItems:'flex-end',
        justifyContent:'flex-end',



    },

    vw1:{

        flex:0.5,
        alignItems: 'flex-start',


    },


    input:{

        flex:0.3,




    },



    firsttext:{
        fontSize:37,
        marginLeft:20,
        marginTop:20,
        fontWeight: 'bold',
        color:'#262121'



    },

    picker:{
        flex:0.8,
        alignItems: 'center',



    },

    button: {
        backgroundColor: '#1273DE',
        alignItems: 'flex-end',
        width: 90,
        height: 48,
        padding: 10,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 7,
        marginRight:10,
        marginBottom:15,
    },

    buttonText:{
        color:'white',
        fontSize:18,



    },
    empty:{
        flex:0.2,



    },





});