import React,{Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, ImageBackground, Dimensions} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Tooltip, } from 'react-native-elements';

import Icon from 'react-native-vector-icons/Ionicons';

const Height =(Dimensions.get('window').height);
const Height1=(Dimensions.get('window').height)/0.0014

export default class ProfilePage extends Component{
    static navigationOptions = {

        header: null,
    };

    render(){

        return(


            <View style={styles.container}>



                <View style={{flex:0.07}}/>

                <View style={styles.profile}>
                    <View style={styles.profileName}>

                        <View style={{flex:0.12}}/>

                        <Text style={{fontSize:Height*0.028,fontWeight:'700',}}>Bi Adim</Text>

                        <View style={{flex:0.82}}/>


                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => {
                                this.props.navigation.navigate('SettingPage')
                            }}
                        >

                            <Icon name="md-settings" size={Height*0.035} />
                        </TouchableOpacity>
                    </View>

                    <View style={{flex:0.1}}/>

                    <View style={styles.picture}>
                        <View style={{flex:0.2}}/>
                        <Image
                            source={require('./assets/bisigortaci.png')}
                            style={styles.imageStyle}/>

                        <View style={{flex:0.2}}/>

                        <View style={styles.rankProfil}>
                            <Image
                                source={require('./assets/rankProfil.png')}
                                style={styles.iconImage}
                            />

                            <Text style={styles.rankProfilTest}>2328</Text>
                        </View>


                        <View style={{flex:0.2}}/>
                        <View style={styles.stepProfil}>

                            <Image
                                source={require('./assets/run.png')}
                                style={styles.iconImage}/>

                            <Text style={styles.rankProfilTest}>15215</Text>

                        </View>


                    </View>

                    <View style={{flex:0.09}}/>

                    <View style={styles.buttonSet}>



                        <View style={{flex:0.6,flexDirection:'row'}}>
                            <View style={{flex:0.17}}/>
                            <TouchableOpacity
                                style={{flex:0.3,height:Height*0.06,width:Height*0.30,borderRadius:7}}
                                activeOpacity={0.5}
                            >

                                <ImageBackground
                                    source={require('./assets/bg.png')}
                                    style={{

                                        height:Height*0.06,width:Height*0.30,
                                        alignItems:'center',justifyContent:'center'
                                    }}

                                    imageStyle={{ borderRadius: 7 }}
                                >

                                    <Text style={{color:'white',fontSize:Height*0.028,fontWeight:'600',}}>Follow</Text>
                                </ImageBackground>


                            </TouchableOpacity>
                        </View>



                        <View style={{flex:0.6,marginLeft:Height*0.2,}}>
                            <TouchableOpacity
                                style={{height:Height*0.063,width:Height*0.098,borderRadius:7,backgroundColor:'#e9e9fd'}}
                                activeOpacity={0.5}
                            >

                            </TouchableOpacity>

                        </View>
                    </View>



                    <View style={{flex:0.06}}/>

                    <View style={styles.dataProfile}>
                        <View style={styles.dataSet}>
                            <Text>   </Text>

                            <View style={styles.dataText}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{fontWeight:'700',fontSize:Height*0.023,}}>6125555</Text>

                                </View>



                                <Text style={{marginLeft:4,marginTop:7,fontSize:Height*0.0168,color:'#bdbdbd',}}>Adim Sayisi</Text>
                            </View>

                        </View>

                        <View style={styles.dataSet}>
                            <Text>   </Text>

                            <View style={styles.dataText}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{fontWeight:'700',fontSize:Height*0.023,}}>6500</Text>
                                    <Text style={{fontSize:Height*0.0168,marginTop:Height*0.0056,marginLeft:Height*0.0056,fontWeight:'500',}}>Km</Text>
                                </View>



                                <Text style={{marginLeft:4,marginTop:7,fontSize:Height*0.0168,color:'#bdbdbd'}}>Mesafe</Text>
                            </View>

                        </View>
                        <View style={styles.dataSetLast}>
                            <Text>   </Text>

                            <View style={styles.dataTextLast}>
                                <View style={{flexDirection:'row'}}>
                                    <Text style={{fontWeight:'700',fontSize:Height*0.023,}}>3400</Text>
                                    <Text style={{fontSize:Height*0.0168,marginLeft:Height*0.0042,marginTop:Height*0.0056,fontWeight:'500',}}>Cal</Text>
                                </View>


                                <Text style={{marginTop:6,fontSize:Height*0.0168,color:'#bdbdbd'}}>Kalori</Text>

                            </View>

                        </View>


                    </View>

                    <View style={{flex:0.02,backgroundColor:'#f7f7fe',}}></View>

                    <View style={styles.rozetler}>
                        <View style={{flex:0.3}}/>

                        <View style={{flexDirection:'row'}}>
                            <Text style={{marginTop:10,marginLeft:20,fontWeight:'500',fontSize:Height*0.0252,}}>Kazanilan Basarilar</Text>
                            <View style={{flex:0.9}}/>

                            <Text style={{marginTop:10,color:'#667ad5',}}>daha fazla</Text>

                            <Ionicons name="md-arrow-dropright" size={23} color="#667ad5" style={{marginLeft:5,fontWeight:600,marginTop:8 }} />


                        </View>


                        <ScrollView horizontal={true} style={styles.scroll}>


                            <TouchableOpacity >

                                <Tooltip popover={<Text>1000 Adim Rozeti </Text>}
                                         backgroundColor={'#84a4f3'}

                                >
                                    <ImageBackground
                                        source={require('./assets/cup.png')}

                                        style={styles.imageStyle3}
                                    >
                                    </ImageBackground>
                                </Tooltip>

                            </TouchableOpacity>


                            <Text>       </Text>

                            <TouchableOpacity>

                                <Tooltip popover={<Text>1000 Adim Rozeti </Text>}
                                         backgroundColor={'#84a4f3'}

                                >
                                    <ImageBackground
                                        source={require('./assets/cup.png')}

                                        style={styles.imageStyle3}
                                    >
                                    </ImageBackground>
                                </Tooltip>

                            </TouchableOpacity>

                            <Text>       </Text>
                            <TouchableOpacity>

                                <Tooltip popover={<Text>1000 Adim Rozeti </Text>}
                                         backgroundColor={'#84a4f3'}

                                >
                                    <ImageBackground
                                        source={require('./assets/cup.png')}

                                        style={styles.imageStyle3}
                                    >
                                    </ImageBackground>
                                </Tooltip>

                            </TouchableOpacity>
                            <Text>       </Text>
                            <TouchableOpacity>

                                <Tooltip popover={<Text>1000 Adim Rozeti </Text>}
                                         backgroundColor={'#84a4f3'}

                                >
                                    <ImageBackground
                                        source={require('./assets/cup.png')}

                                        style={styles.imageStyle3}
                                    >
                                    </ImageBackground>
                                </Tooltip>

                            </TouchableOpacity>
                            <Text>       </Text>

                            <TouchableOpacity>

                                <Tooltip popover={<Text>1000 Adim Rozeti </Text>}
                                         backgroundColor={'#84a4f3'}

                                >
                                    <ImageBackground
                                        source={require('./assets/cup.png')}

                                        style={styles.imageStyle3}
                                    >
                                    </ImageBackground>
                                </Tooltip>

                            </TouchableOpacity>

                            <Text>      </Text>

                            <TouchableOpacity>

                                <Tooltip popover={<Text>1000 Adim Rozeti </Text>}
                                         backgroundColor={'#84a4f3'}

                                >
                                    <ImageBackground
                                        source={require('./assets/cup.png')}

                                        style={styles.imageStyle3}
                                    >
                                    </ImageBackground>
                                </Tooltip>

                            </TouchableOpacity>

                        </ScrollView>
                    </View>
                    <View style={{flex:0.02,backgroundColor:'#f7f7fe',}}></View>

                    <View style={styles.challange}>
                        <Text style={{marginTop:Height*0.014,marginLeft:Height*0.028,fontSize:Height*0.025,fontWeight:'500',}}>1-1 Challange</Text>


                        <View style={{flexDirection:'row',marginTop:15,}}>
                            <View style={{flex:0.3}}/>
                            <View style={{alignItems:'center'}}>
                                <Tooltip popover={<Text>Challange Birincilik </Text>}
                                         backgroundColor={'#84a4f3'}

                                >
                                    <Image source={require('./assets/first-medal.png')}
                                           style={styles.imageChallange}
                                    />

                                </Tooltip>
                                <Text style={{fontSize:Height*0.02,fontWeight:'500'}}> 2800</Text>
                            </View>

                            <View style={{flex:0.4}}/>

                            <View style={{alignItems:'center'}}>
                                <Tooltip popover={<Text>Challange Ikincilik </Text>}
                                         backgroundColor={'#84a4f3'}

                                >
                                    <Image source={require('./assets/second-medal.png')}
                                           style={styles.imageChallange}
                                    />

                                </Tooltip>
                                <Text style={{fontSize:Height*0.02,fontWeight:'500'}}> 2800</Text>
                            </View>
                        </View>
                    </View>

                </View>










            </View>









        );

    }


}
const styles = StyleSheet.create({


    container: {
        flex: 1,



    },
    profileName:{

        flexDirection:'row' ,

    },

    profile:{
        flex:0.855,




    },

    picture:{

        flexDirection:'row',


    },

    imageStyle:{
        height: Height*0.112,
        width: Height*0.112,
        borderRadius:(Height*0.112)/2,
        borderColor:'#e95950',
        borderWidth:2


    },

    rankProfil:{


        flexDirection:'row',
        marginTop:20,

    },
    rankProfilTest:{
        marginTop:Height*0.0084,
        marginLeft:Height*0.0112,
        fontWeight:'700',
        fontSize:Height*0.021,

    },

    stepProfil:{

        flexDirection:'row',
        marginTop:20

    },

    buttonSet:{
        flex:0.1,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
    },
    dataProfile:{
        flex:0.18,
        flexDirection:'row',
        borderBottomWidth: 0,
        borderRightWidth:0,
        borderLeftWidth:0,
        borderTopWidth:4,
        borderColor:'#fafafa',




    },
    dataSet:{


        flex:0.5,
        borderBottomWidth: 0,
        borderRightWidth:0,
        borderLeftWidth:0,
        borderTopWidth:0,
        borderColor:'#fafafa',
        paddingHorizontal: 20,
        marginBottom: 40,


    },


    dataSetLast:{

        flex:0.3,
        borderBottomWidth: 0,
        borderRightWidth:0,
        borderLeftWidth:0,
        borderTopWidth:0,
        borderColor:'#fafafa',
        paddingHorizontal: 20,
        marginRight:20,
        alignItems:'center',
        justifyContent:'center'



    },

    dataText:{



        borderBottomWidth: 0,
        borderRightWidth:4,
        borderLeftWidth:0,
        borderTopWidth:0,
        borderColor:'#fafafa',





    },

    dataTextLast:{
        flex:1,
        borderBottomWidth: 0,
        borderRightWidth:0,
        borderLeftWidth:0,
        borderTopWidth:0,
        borderColor:'#fafafa',
        alignItems:'center',




    },

    rozetler:{
        flex:0.350,
        alignItems:'flex-start',
        justifyContent:'flex-start',



    },

    scroll:{
        paddingHorizontal:20,
        paddingVertical:10,






    },

    tabButton:{

        flex:0.01,
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'flex-end',
        borderColor: 'rgba(164,164,164,0.93)',
        borderBottomWidth:0,
        borderTopWidth: 0.7,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        borderRightWidth: 0.7,
        borderLeftWidth: 0.7,
        marginTop:40,




    },

    button: {

        flexDirection:'row',
        width: 90,
        height: 48,
        padding: 10,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 7,
        marginRight:10,

    },

    imagestyle2: {
        flex:0.5,
        height: 32,
        width: 32,
    },

    iconButton:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:20,
        marginTop:20,
    },


    midImage:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginRight:18,
        marginTop:20,


    },

    imageStyle3:{
        height: Height*0.078,
        width: Height*0.078,



    },

    challange:{
        flex:0.3,
        alignItems:'flex-start'


    },

    imageChallange:{

        height: Height*0.1,
        width: Height*0.1,



    },

    iconImage:{
        height: Height*0.03,
        width: Height*0.03



    }








});