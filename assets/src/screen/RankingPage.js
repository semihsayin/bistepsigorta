import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, ImageBackground, Dimensions} from 'react-native';
import {LinearGradient} from "expo";


const Height2 =(Dimensions.get('window').height * 0.367);
const Gold=(Dimensions.get('window').height * 0.14);
const PuanFont=(Dimensions.get('window').height *0.0420);
const LoginHe=(Dimensions.get('window').height*0.3)

const Height =(Dimensions.get('window').height);
const Width =(Dimensions.get('window').height);



export default class RankingPage extends Component {




    static navigationOptions = { //back butonu

        header: null,
        headerStyle: {
            borderBottomWidth: 0,
            backgroundColor: '#459AF7',
            headerLeft:null,


        },
        headerLeft:null,





    };







    render() {


        return (


            <View style={styles.container}>


                <View style={styles.headBackground}>

                    <ImageBackground source={require('./assets/bg.png')} style={{width: '100%', height:Height2}}>
                        <View style={{flex:0.2}}/>
                        <View style={{flex:0.5}}>
                            <Text style={styles.logo}> Puan Siralamasi</Text>

                        </View>

                    </ImageBackground>

                </View>

                <View style={{flex:0.175}}/>

                <View style={{alignItems:'center'}}>
                    <View style={styles.loginArea}>


                        <View style={styles.silverarea}>
                            <View style={{flex:0.8}}/>


                            <Image
                                source={require('./assets/bisigortaci.png')}
                                style={{  height:Height*0.084,
                                    width:Height*0.084, borderRadius:(Height*0.084)/2}}/>



                            <Text style={styles.textStyle}>BiAdim</Text>
                            <View style={{flex:0.4}}/>

                            <LinearGradient  start={{x: 0, y: 0.5}} end={{x:1, y: 1}}
                                             locations={[0,0.5,]} colors={['#D5D6D8', '#B6B8BC',]} style={styles.silver}>
                                <Text style={{alignItems:'center',justifyContent: 'center',fontSize:Height*0.04,color:'white'}}

                                >2</Text>
                            </LinearGradient>

                        </View>



                        <View style={styles.goldarea}>

                            <Image
                                source={require('./assets/bisigortaci.png')}
                                style={{  height:Height*0.1,
                                    width:Height*0.1, borderRadius:(Height*0.1)/2}}/>



                            <Text style={styles.textStyle}>BiAdim</Text>
                            <View style={{flex:0.4}}/>

                            <LinearGradient  start={{x: 0, y: 0.5}} end={{x:1, y: 1}}
                                             locations={[0,0.5,]} colors={['#F3BF55', '#F7DA6E',]} style={styles.gold}>
                                <Text style={{alignItems:'center',justifyContent: 'center',fontSize:Height*0.04,color:'white'}}

                                >1</Text>
                            </LinearGradient>

                        </View>


                        <View style={styles.bronzarea}>
                            <View style={{flex:0.8}}/>

                            <Image
                                source={require('./assets/bisigortaci.png')}
                                style={{  height: Height*0.07,
                                    width:Height*0.07, borderRadius:(Height*0.07)/2,}}/>



                            <Text style={styles.textStyle}>BiAdim</Text>
                            <View style={{flex:0.4}}/>

                            <LinearGradient  start={{x: 0.75, y: 0.75}} end={{x:1, y: 1}}
                                             locations={[0,0.5,]} colors={['#C3955F', '#D2B087',]} style={styles.bronze}>
                                <Text style={{alignItems:'center',justifyContent: 'center',fontSize:Height*0.04,color:'white'}}

                                >3</Text>
                            </LinearGradient>
                        </View>
                    </View>



                </View>



                <ScrollView style={ {flex:2}}>
                    <View style={styles.rank}>
                        <Text style={styles.rankTextStyle}>4</Text>
                        <View style={{flex:0.050}}/>

                        <Image
                            source={require('./assets/bisigortaci.png')}
                            style={styles.rankImageStyle}/>
                        <View style={{flex:0.050}}/>

                        <Text style={styles.rankTextStyle}>BiAdim</Text>
                        <View style={{flex:0.9}}/>
                        <Text style={styles.rankTextStyle2}>3000</Text>


                    </View>
                    <View style={styles.rank}>
                        <Text style={styles.rankTextStyle}>5</Text>
                        <View style={{flex:0.050}}/>

                        <Image
                            source={require('./assets/bisigortaci.png')}
                            style={styles.rankImageStyle}/>
                        <View style={{flex:0.050}}/>

                        <Text style={styles.rankTextStyle}>BiAdim</Text>
                        <View style={{flex:0.9}}/>
                        <Text style={styles.rankTextStyle2}>3000</Text>


                    </View>

                    <View style={styles.rank}>
                        <Text style={styles.rankTextStyle}>6</Text>
                        <View style={{flex:0.050}}/>

                        <Image
                            source={require('./assets/bisigortaci.png')}
                            style={styles.rankImageStyle}/>
                        <View style={{flex:0.050}}/>

                        <Text style={styles.rankTextStyle}>BiAdim</Text>
                        <View style={{flex:0.9}}/>
                        <Text style={styles.rankTextStyle2}>3000</Text>


                    </View>
                    <View style={styles.rank}>
                        <Text style={styles.rankTextStyle}>7</Text>
                        <View style={{flex:0.050}}/>

                        <Image
                            source={require('./assets/bisigortaci.png')}
                            style={styles.rankImageStyle}/>
                        <View style={{flex:0.050}}/>

                        <Text style={styles.rankTextStyle}>BiAdim</Text>
                        <View style={{flex:0.9}}/>
                        <Text style={styles.rankTextStyle2}>3000</Text>


                    </View>
                    <View style={styles.rank}>
                        <Text style={styles.rankTextStyle}>8</Text>
                        <View style={{flex:0.050}}/>

                        <Image
                            source={require('./assets/bisigortaci.png')}
                            style={styles.rankImageStyle}/>
                        <View style={{flex:0.050}}/>

                        <Text style={styles.rankTextStyle}>BiAdim</Text>
                        <View style={{flex:0.9}}/>
                        <Text style={styles.rankTextStyle2}>3000</Text>


                    </View>
                    <View style={styles.rank}>
                        <Text style={styles.rankTextStyle}>9</Text>
                        <View style={{flex:0.050}}/>

                        <Image
                            source={require('./assets/bisigortaci.png')}
                            style={styles.rankImageStyle}/>
                        <View style={{flex:0.050}}/>

                        <Text style={styles.rankTextStyle}>BiAdim</Text>
                        <View style={{flex:0.9}}/>
                        <Text style={styles.rankTextStyle2}>3000</Text>


                    </View>
                    <View style={styles.rank}>
                        <Text style={styles.rankTextStyle}>10</Text>
                        <View style={{flex:0.050}}/>

                        <Image
                            source={require('./assets/bisigortaci.png')}
                            style={styles.rankImageStyle}/>
                        <View style={{flex:0.050}}/>

                        <Text style={styles.rankTextStyle}>BiAdim</Text>
                        <View style={{flex:0.9}}/>
                        <Text style={styles.rankTextStyle2}>3000</Text>


                    </View>
                    <View style={styles.rank}>
                        <Text style={styles.rankTextStyle}>11</Text>
                        <View style={{flex:0.050}}/>

                        <Image
                            source={require('./assets/bisigortaci.png')}
                            style={styles.rankImageStyle}/>
                        <View style={{flex:0.050}}/>

                        <Text style={styles.rankTextStyle}>BiAdim</Text>
                        <View style={{flex:0.9}}/>
                        <Text style={styles.rankTextStyle2}>3000</Text>


                    </View>
                    <View style={styles.rank}>
                        <Text style={styles.rankTextStyle}>12</Text>
                        <View style={{flex:0.050}}/>

                        <Image
                            source={require('./assets/bisigortaci.png')}
                            style={styles.rankImageStyle}/>
                        <View style={{flex:0.050}}/>

                        <Text style={styles.rankTextStyle}>BiAdim</Text>
                        <View style={{flex:0.9}}/>
                        <Text style={styles.rankTextStyle2}>3000</Text>


                    </View>
                    <View style={styles.rank}>
                        <Text style={styles.rankTextStyle}>13</Text>
                        <View style={{flex:0.050}}/>

                        <Image
                            source={require('./assets/bisigortaci.png')}
                            style={styles.rankImageStyle}/>
                        <View style={{flex:0.050}}/>

                        <Text style={styles.rankTextStyle}>BiAdim</Text>
                        <View style={{flex:0.9}}/>
                        <Text style={styles.rankTextStyle2}>3000</Text>


                    </View>

                    <View style={styles.rank}>
                        <Text style={styles.rankTextStyle}>14</Text>
                        <View style={{flex:0.050}}/>

                        <Image
                            source={require('./assets/bisigortaci.png')}
                            style={styles.rankImageStyle}/>
                        <View style={{flex:0.050}}/>

                        <Text style={styles.rankTextStyle}>BiAdim</Text>
                        <View style={{flex:0.9}}/>
                        <Text style={styles.rankTextStyle2}>3000</Text>


                    </View>

                    <View style={styles.rank}>
                        <Text style={styles.rankTextStyle}>15</Text>
                        <View style={{flex:0.050}}/>

                        <Image
                            source={require('./assets/bisigortaci.png')}
                            style={styles.rankImageStyle}/>
                        <View style={{flex:0.050}}/>

                        <Text style={styles.rankTextStyle}>BiAdim</Text>
                        <View style={{flex:0.9}}/>
                        <Text style={styles.rankTextStyle2}>3000</Text>


                    </View>

                    <View style={styles.rank}>
                        <Text style={styles.rankTextStyle}>16</Text>
                        <View style={{flex:0.050}}/>

                        <Image
                            source={require('./assets/bisigortaci.png')}
                            style={styles.rankImageStyle}/>
                        <View style={{flex:0.050}}/>

                        <Text style={styles.rankTextStyle}>BiAdim</Text>
                        <View style={{flex:0.9}}/>
                        <Text style={styles.rankTextStyle2}>3000</Text>


                    </View>

                    <View style={styles.rank}>
                        <Text style={styles.rankTextStyle}>17</Text>
                        <View style={{flex:0.050}}/>

                        <Image
                            source={require('./assets/bisigortaci.png')}
                            style={styles.rankImageStyle}/>
                        <View style={{flex:0.050}}/>

                        <Text style={styles.rankTextStyle}>BiAdim</Text>
                        <View style={{flex:0.9}}/>
                        <Text style={styles.rankTextStyle2}>3000</Text>


                    </View>

                    <View style={styles.rank}>
                        <Text style={styles.rankTextStyle}>18</Text>
                        <View style={{flex:0.050}}/>

                        <Image
                            source={require('./assets/bisigortaci.png')}
                            style={styles.rankImageStyle}/>
                        <View style={{flex:0.050}}/>

                        <Text style={styles.rankTextStyle}>BiAdim</Text>
                        <View style={{flex:0.9}}/>
                        <Text style={styles.rankTextStyle2}>3000</Text>


                    </View>

                    <View style={styles.rank}>
                        <Text style={styles.rankTextStyle}>19</Text>
                        <View style={{flex:0.050}}/>

                        <Image
                            source={require('./assets/bisigortaci.png')}
                            style={styles.rankImageStyle}/>
                        <View style={{flex:0.050}}/>

                        <Text style={styles.rankTextStyle}>BiAdim</Text>
                        <View style={{flex:0.9}}/>
                        <Text style={styles.rankTextStyle2}>3000</Text>


                    </View>


                    <View style={styles.rank}>
                        <Text style={styles.rankTextStyle}>20</Text>
                        <View style={{flex:0.050}}/>

                        <Image
                            source={require('./assets/bisigortaci.png')}
                            style={styles.rankImageStyle}/>
                        <View style={{flex:0.050}}/>

                        <Text style={styles.rankTextStyle}>BiAdim</Text>
                        <View style={{flex:0.9}}/>
                        <Text style={styles.rankTextStyle2}>3000</Text>


                    </View>



                </ScrollView>

                <View style={{flex:0.160}}/>

                <View style={styles.OurRank}>
                    <Text style={{fontSize:Height*0.03,fontWeight:'700',fontFamily: 'Poppins-Medium'}}>Sizin Siraniz</Text>

                    <View style={styles.rank}>
                        <Text style={styles.rankTextStyle}>2000</Text>
                        <View style={{flex:0.050}}/>
                        <Image
                            source={require('./assets/bisigortaci.png')}
                            style={{  height: Height*0.05,
                                width: Height*0.05, borderRadius:(Height*0.05)/2,}}/>
                        <View style={{flex:0.050}}/>
                        <Text style={styles.rankTextStyle}>BiAdim</Text>
                        <View style={{flex:0.9}}/>
                        <Text style={styles.rankTextStyle2}>3000</Text>


                    </View>
                </View>







            </View>





        );
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        paddingVertical: 65,

    },

    headBackground: {

        position: 'absolute',
        top: 0,
        left: 0,
        height:Height2,
        width: '100%',
        backgroundColor: '#459AF7'
    },

    logoDescription: {
        textAlign: 'center',
        color: '#f2f2f2'
    },
    loginArea: {
        height:LoginHe,
        width:Height*0.43,
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal: 20,
        flexDirection:'row',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 5,
        shadowColor: 'black',
        shadowOpacity: .2,
        shadowRadius: 3,
        shadowOffset: {
            width:0,
            height: 2
        },

    },

    logo: {
        textAlign: 'center',
        fontSize: PuanFont,
        fontWeight: 'bold',
        color: '#f2f2f2',
        fontFamily: 'Poppins-Medium'

    },

    gold:{

        marginTop:10,
        height:Height*0.14,
        width:Height*0.098,
        backgroundColor:'#F5D058',
        borderRadius:10,
        alignItems:'center',

    },

    silver:{

        height:Height*0.112,
        width:Height*0.098,
        borderRadius:10,
        alignItems: 'center',


    },

    bronze:{

        height:Height*0.098,
        width:Height*0.098,

        backgroundColor:'#C59864',
        borderRadius:10,
        alignItems:'center',


    },
    silverarea:{
        marginTop:Height*0.056,
        height:Height*0.112,
        width:Height*0.098,
        marginHorizontal:10,
        alignItems:'center',


        justifyContent:'center'




    },
    goldarea:{
        height:Height*0.14,
        width:Height*0.098,
        marginHorizontal:10,
        alignItems:'center',


        justifyContent:'center'



    },

    bronzarea:{
        marginTop:Height*0.0880,
        alignItems:'center',
        height:Height*0.098,
        width:Height*0.098,
        marginHorizontal:10,

        justifyContent:'center'



    },

    textStyle:{
        fontSize:Height*0.022,
        fontWeight:'100',
        color:'#BFC1C4'

    },

    rank:{

        flexDirection:'row',
        marginHorizontal:20,
        marginVertical:11,
        alignItems:'center',




    },


    rankImageStyle:{
        height: Height*0.04,
        width: Height*0.04,
        borderRadius:(Height*0.04)/2,


    },


    rankTextStyle:{
        fontWeight:'500',
        fontSize:Height *0.0275,
        color:'#6C767A',
        fontFamily:'Poppins-Medium'



    },
    rankTextStyle2:{
        fontWeight:'600',
        fontSize:Height *0.0275,

        color:'#7DD992',
        fontFamily: 'Poppins-Medium'
    } ,
    OurRank:{
        flex:0.3,
        alignItems:'center',
        justifyContent:'center',




    },








});



