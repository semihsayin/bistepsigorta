import React ,{Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    ImageBackground,
    TextInput,
    Dimensions,
    KeyboardAvoidingView
} from 'react-native';
import { Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import Dialog, {DialogButton, DialogContent, DialogFooter, DialogTitle} from "react-native-popup-dialog";

const Height =(Dimensions.get('window').height);
const Width =(Dimensions.get('window').width);


const Avatar1='https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg';
const Avatar2='https://www.w3schools.com/howto/img_avatar.png';
const Avatar3='https://www.w3schools.com/w3images/avatar2.png';
const Avatar4='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi9sitF0CsqMxHsa2kuI_aJOWYZ2Ss-nxA0hOIJfPwwViR2C4';
const Avatar5='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRan4tTj-Kl7gO4z7OKoldS3VIt16oHs-qW67k8uPlDmRU5IhpnWw';
const Avatar6='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlEyXyr25qSJ5OL7lwjBWDPZ8ZkuxDa-stOPCLWwSm91rIUJ-k';
const Avatar7='https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/98381915/original/9a98da91fcc1709763e92016d13756af640abcb7/design-minimalist-flat-line-vector-avatar-of-you.jpg';
const Avatar8= 'https://i.pinimg.com/236x/86/4e/77/864e7739244f963c3edbb129bb4a5fbf--avatar.jpg';
const Avatar9='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIsO2Q04-CXQaQoa_oOxZfbSdKUZ_PlLx-NzKKuGSIhrBhG1RXWQ';
export default class SettingPage extends  Component{

    state = {
        nickNameSettings: '',
        boySettings:'',
        kiloSettings: '',
        emailSettings: '',
        visible:false,
        defaultAnimationDialog: false,
        key:'',
        Avatar:Avatar1,
    };

    static navigationOptions = { //back butonu

        header: null,






    };

    changeTick = (a) =>{



        if(a===1) {
            this.setState({key:a});
            this.setState({Avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'})
        }

        else if(a===2){

            this.setState({key:a});
            this.setState({Avatar: 'https://www.w3schools.com/howto/img_avatar.png'})

        }

        else if(a===3){

            this.setState({key:a});
            this.setState({Avatar: 'https://www.w3schools.com/w3images/avatar2.png'})

        }

        else if(a===4){

            this.setState({key:a});
            this.setState({Avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvi9sitF0CsqMxHsa2kuI_aJOWYZ2Ss-nxA0hOIJfPwwViR2C4'})

        }

        else if(a===5){

            this.setState({key:a});
            this.setState({Avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRan4tTj-Kl7gO4z7OKoldS3VIt16oHs-qW67k8uPlDmRU5IhpnWw'})

        }

        else if(a===6){

            this.setState({key:a});
            this.setState({Avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlEyXyr25qSJ5OL7lwjBWDPZ8ZkuxDa-stOPCLWwSm91rIUJ-k'})

        }

        else if(a===7){

            this.setState({key:a});
            this.setState({Avatar: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/98381915/original/9a98da91fcc1709763e92016d13756af640abcb7/design-minimalist-flat-line-vector-avatar-of-you.jpg'})

        }

        else if(a===8){

            this.setState({key:a});
            this.setState({Avatar: 'https://i.pinimg.com/236x/86/4e/77/864e7739244f963c3edbb129bb4a5fbf--avatar.jpg'})

        }

        else if(a===9){

            this.setState({key:a});
            this.setState({Avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIsO2Q04-CXQaQoa_oOxZfbSdKUZ_PlLx-NzKKuGSIhrBhG1RXWQ'})

        }

        else{

            return 0
        }
    };


    render(){

        return(



            <View style={styles.container}>



                <View style={{flex:0.06}}/>

                <View style={{flex:0.04,flexDirection:'row'}}>

                    <View style={{flex:0.05,}}/>
                    <TouchableOpacity

                        onPress={() => {
                            this.props.navigation.navigate('ProfilePage')
                        }}>
                        <Text style={{fontSize:Height*0.028,}}>İptal</Text>
                    </TouchableOpacity>
                    <View style={{flex:0.9  }}/>

                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('ProfilePage')
                        }}
                    >
                        <Text style={{fontSize:Height*0.028,color:'#4c98e9'}}>Kaydet</Text>
                    </TouchableOpacity>

                </View>
                <View style={{flex:0.05}}/>



                <View style={styles.avatar}>
                    <Avatar
                        rounded
                        onPress={() => {
                            this.setState({ defaultAnimationDialog:true });
                        }}

                        source={{
                            uri:
                            this.state.Avatar
                        }}

                        size='xlarge'

                        style={{height:Height*0.14,width:Height*0.14,   }}

                        showEditButton
                        editButton={{size:Height*0.042}}


                    />


                    <Text style={{fontSize:Height*0.028,fontWeight:'500',color:'#CCCCCC',marginTop:10,fontFamily: 'Poppins-Medium'}}>Profil Fotografini Degistir</Text>

                </View>
                <View style={{flex:0.09}}/>


                <View style={styles.dataChange}>

                    <View style={{flexDirection:'row'}} >
                    <View>


                        <TextInput
                            value={this.state.nickNameSettings}
                            fontSize = {Height*0.028}
                            fontWeight = '200'
                            placeholder=' Kullanici Adi'
                            placeholderTextColor='#CCCCCC'
                            onChangeText={(nickNameSettings) => this.setState({ nickNameSettings })}
                            style={styles.inputStyle}/>

                    </View>

                        <View style={{flex:0.5}}/>
                    <View >


                        <TextInput
                            value={this.state.emailSettings}
                            keyboardType='email-address'
                            placeholder=' E-Mail'
                            placeholderTextColor='#CCCCCC'
                            fontSize = {Height*0.028}
                            fontWeight = '200'
                            onChangeText={(emailSettings) => this.setState({ emailSettings })}
                            style={styles.inputStyle}/>

                    </View>

                    </View>

                <View style={{flex:0.05}}/>

                    <View style={{flexDirection:'row'}}>

                    <View >


                        <TextInput
                            value={this.state.boySettings}
                            keyboardType='numeric'
                            placeholder=' Boy'
                            placeholderTextColor='#CCCCCC'
                            fontSize = {Height*0.028}
                            fontWeight = '200'
                            onChangeText={(boySettings) => this.setState({ boySettings })}
                            style={styles.inputStyle}/>

                    </View>

                        <View style={{flex:0.5}}/>

                    <View >


                        <TextInput
                            value={this.state.kiloSettings}
                            keyboardType='numeric'
                            placeholder=' Kilo'
                            placeholderTextColor='#CCCCCC'
                            fontSize = {Height*0.028}
                            fontWeight = '200'
                            onChangeText={(kiloSettings) => this.setState({ kiloSettings })}
                            style={styles.inputStyle}/>

                    </View>

                           </View>



                </View>




                <Dialog
                    onDismiss={() => {
                        this.setState({defaultAnimationDialog: false});
                    }}
                    width={1}
                    height={1}
                    visible={this.state.defaultAnimationDialog}
                    rounded
                    actionsBordered
                    style={{alignItems:'center',justifyContent:'center'}}

                    footer={
                        <DialogFooter style={{height:Height,alignItems:'center',justifyContent:'center'}}>
                            <View >
                                <View style={{flexDirection:'row',marginLeft:Height*0.0238,marginTop:Height*0.042,}}>
                                    <Avatar
                                        key={'key-1'}
                                        rounded

                                        onPress={() =>
                                            this.changeTick(1)
                                        }

                                        source={{
                                            uri:
                                            Avatar1,
                                        }}

                                        size='large'


                                        editButton={this.state.key === 1 ? { name: 'md-checkmark', type: 'ionicon', color: 'white', underlayColor: '#000',style:{backgroundColor:'blue'} }:  { name: 'md-checkmark', type: 'ionicon', color: 'transparent', underlayColor: '#000',style:{backgroundColor:'transparent'} }}
                                        showEditButton



                                        size='large'





                                    />
                                    <Avatar
                                        rounded
                                        onPress={() =>
                                            this.changeTick(2)
                                        }

                                        source={{
                                            uri:
                                            Avatar2,
                                        }}

                                        size='large'


                                        editButton={this.state.key === 2 ? { name: 'md-checkmark', type: 'ionicon', color: 'white', underlayColor: '#000',style:{backgroundColor:'blue'} }:  { name: 'md-checkmark', type: 'ionicon', color: 'transparent', underlayColor: '#000',style:{backgroundColor:'transparent'} }}
                                        showEditButton




                                    />
                                    <Avatar
                                        rounded
                                        onPress={() =>
                                            this.changeTick(3)
                                        }

                                        source={{
                                            uri:
                                            Avatar3,
                                        }}

                                        size='large'


                                        editButton={this.state.key === 3 ? { name: 'md-checkmark', type: 'ionicon', color: 'white', underlayColor: '#000',style:{backgroundColor:'blue'} }:  { name: 'md-checkmark', type: 'ionicon', color: 'transparent', underlayColor: '#000',style:{backgroundColor:'transparent'} }}
                                        showEditButton


                                        size='large'


                                    />
                                </View>
                                <View style={{flexDirection:'row',marginLeft:17,marginTop:30,}}>
                                    <Avatar
                                        key={'key-1'}
                                        rounded

                                        onPress={() =>
                                            this.changeTick(4)
                                        }

                                        source={{
                                            uri:
                                            Avatar4,
                                        }}

                                        size='large'


                                        editButton={this.state.key === 4 ? { name: 'md-checkmark', type: 'ionicon', color: 'white', underlayColor: '#000',style:{backgroundColor:'blue'} }:  { name: 'md-checkmark', type: 'ionicon', color: 'transparent', underlayColor: '#000',style:{backgroundColor:'transparent'} }}
                                        showEditButton


                                        size='large'





                                    />
                                    <Avatar
                                        rounded
                                        onPress={() =>
                                            this.changeTick(5)
                                        }

                                        source={{
                                            uri:
                                            Avatar5,
                                        }}

                                        size='large'


                                        editButton={this.state.key === 5 ? { name: 'md-checkmark', type: 'ionicon', color: 'white', underlayColor: '#000',style:{backgroundColor:'blue'} }:  { name: 'md-checkmark', type: 'ionicon', color: 'transparent', underlayColor: '#000',style:{backgroundColor:'transparent'} }}
                                        showEditButton




                                    />
                                    <Avatar
                                        rounded
                                        onPress={() =>
                                            this.changeTick(6)
                                        }

                                        source={{
                                            uri:
                                            Avatar6,
                                        }}

                                        size='large'


                                        editButton={this.state.key === 6 ? { name: 'md-checkmark', type: 'ionicon', color: 'white', underlayColor: '#000',style:{backgroundColor:'blue'} }:  { name: 'md-checkmark', type: 'ionicon', color: 'transparent', underlayColor: '#000',style:{backgroundColor:'transparent'} }}
                                        showEditButton


                                        size='large'


                                    />
                                </View>

                                <View style={{flexDirection:'row',marginLeft:17,marginTop:30,}}>
                                    <Avatar
                                        key={'key-1'}
                                        rounded

                                        onPress={() =>
                                            this.changeTick(7)
                                        }

                                        source={{
                                            uri:
                                            Avatar7,
                                        }}

                                        size='large'


                                        editButton={this.state.key === 7 ? { name: 'md-checkmark', type: 'ionicon', color: 'white', underlayColor: '#000',style:{backgroundColor:'blue'} }:  { name: 'md-checkmark', type: 'ionicon', color: 'transparent', underlayColor: '#000',style:{backgroundColor:'transparent'} }}
                                        showEditButton


                                        size='large'





                                    />
                                    <Avatar
                                        rounded
                                        onPress={() =>
                                            this.changeTick(8)
                                        }

                                        source={{
                                            uri:
                                            Avatar8,
                                        }}

                                        size='large'


                                        editButton={this.state.key === 8 ? { name: 'md-checkmark', type: 'ionicon', color: 'white', underlayColor: '#000',style:{backgroundColor:'blue'} }:  { name: 'md-checkmark', type: 'ionicon', color: 'transparent', underlayColor: '#000',style:{backgroundColor:'transparent'} }}
                                        showEditButton




                                    />
                                    <Avatar
                                        rounded
                                        onPress={() =>
                                            this.changeTick(9)
                                        }

                                        source={{
                                            uri:
                                            Avatar9,
                                        }}

                                        size='large'


                                        editButton={this.state.key === 9 ? { name: 'md-checkmark', type: 'ionicon', color: 'white', underlayColor: '#000',style:{backgroundColor:'blue'} }:  { name: 'md-checkmark', type: 'ionicon', color: 'transparent', underlayColor: '#000',style:{backgroundColor:'transparent'} }}
                                        showEditButton


                                        size='large'


                                    />
                                </View>


                                <View style={{alignItems:'center'}}>
                                    <TouchableOpacity style={{marginTop:20,height:50,width:150,borderRadius:7,}}
                                                      onPress={() => {
                                                          this.setState({  defaultAnimationDialog: false,});
                                                      }}>



                                        <ImageBackground
                                            source={require('./assets/bg.png')}


                                            style={{

                                                height: 50,
                                                width: 150,
                                                alignItems:'center',justifyContent:'center'
                                            }}

                                            imageStyle={{ borderRadius: 8 }}
                                        >




                                            <Text style={{fontSize:20,color:'white'}}>Kaydet</Text>



                                        </ImageBackground>


                                    </TouchableOpacity>

                                </View>
                            </View>




                        </DialogFooter>

                    }
                >

                </Dialog>

            </View>


        )

    }



}

const styles = StyleSheet.create({

    container:{
        flex:1,



    },
    avatar:{

        flex:0.1,
        alignItems:'center',
        justifyContent:'center'



    },

    dataChange:{

        flex:0.6,

        alignItems: 'center',



    },

    inputStyle:{
        borderWidth:2.5,
        width:Height*0.21,
        height:Height*0.056,
        borderRadius:5,
        fontWeight:'500',
        borderColor:'#9B9B9B',
        fontFamily: 'Poppins-Medium'




    }



});