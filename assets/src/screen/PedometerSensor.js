import Expo from "expo";
import React,{Component} from "react";
import { Pedometer } from "expo";
import {StyleSheet, Text, View, Picker, Dimensions, Image, TouchableOpacity} from "react-native";
import PercentageCircle from 'react-native-percentage-circle';
import RNPickerSelect from 'react-native-picker-select';
import { Ionicons } from '@expo/vector-icons';
import { AnimatedCircularProgress } from 'react-native-circular-progress';





const end = new Date();
const start = new Date();

const Width =(Dimensions.get('window').width * 0.420);
const Height =(Dimensions.get('window').height * 0.3);

const size =(Dimensions.get('window').width * 0.04);




const days = [
    {
        label: 'Bugün',
        value: 'Bugün',
    },
    {
        label: 'Dün',
        value: 'Dün',
    },
    {
        label: 'Hafta',
        value: 'Hafta',
    },
    {   label:'Ay',
        value: 'Ay',

    },
];





export default class PedometerSensor extends React.Component {



    state = {
        isPedometerAvailable: "checking",
        todayStepCount: 0,
        yesterdayStepCount: 0,
        weekStepCount: 0,
        monthStepCount: 0,
        currentStepCount: 0,
        graphicValueDay: 0,
        graphicValueYesterday: 0,
        graphicValueWeek: 0,
        graphicValueMonth: 0,
        dayKm:0,
        yesterdayKm:0,
        weekKm:0,
        month:0,
        weight:77,
        height:177,
        caloriesBurnedPerMile:0,
        strip:0,
        stepCountMile:0,
        conversationFactor:0,
        caloriesBurnedDay:0,
        caloriesBurnedYesterday:0,
        caloriesBurnedWeek:0,
        caloriesBurnedMonth:0,




    };













    componentDidMount() {
        this._subscribe();
    }

    componentWillUnmount() {
        this._unsubscribe();
    }

    _subscribe = () => {
        this._subscription = Pedometer.watchStepCount(result => {
            this.setState({
                currentStepCount: result.steps
            });
        });

        Pedometer.isAvailableAsync().then(
            result => {
                this.setState({
                    isPedometerAvailable: String(result)
                });
            },
            error => {
                this.setState({
                    isPedometerAvailable: "Could not get isPedometerAvailable: " + error
                });
            }
        );
        const end = new Date();
        const start = new Date();
        const start2 = new Date();
        const start3 = new Date();
        const start4 = new Date();
        start.setDate(end.getDate() - 1);
        start.setHours(24, 0, 0);
        start2.setDate(end.getDate() - 2);
        start2.setHours(24, 0, 0);
        start3.setDate(end.getDate() - end.getDay());
        start3.setHours(24, 0, 0);
        start4.setDate(end.getDate() - end.getDate());
        start4.setHours(24, 0, 0);
        console.log(start)
        console.log(start2)
        Pedometer.getStepCountAsync(start, end).then(
            result => {
                this.setState({ todayStepCount: result.steps });
                this.setState({graphicValueDay: parseInt((100 * result.steps) / 10000) });
                this.setState({ dayKm: parseInt(result.steps * 0.000762)});
                this.setState({caloriesBurnedPerMile: (0.57 * 0.22 * this.state.weight)});
                this.setState({strip: this.state.height / 0.415});
                this.setState({stepCountMile: 160934.4 / this.state.strip});
                this.setState({conversationFactor: this.state.caloriesBurnedPerMile / this.state.stepCountMile});
                this.setState({caloriesBurnedDay: parseInt(result.steps * this.state.conversationFactor)});

            },
            error => {
                this.setState({
                    pastStepCount: "Could not get stepCount: " + error
                });
            }
        );
        Pedometer.getStepCountAsync(start2, start).then(
            result => {
                this.setState({ yesterdayStepCount: result.steps });
                this.setState({graphicValueYesterday: parseInt((100 * result.steps) / 10000) });
                this.setState({ yesterdayKm: parseInt(result.steps * 0.000762)});
                this.setState({caloriesBurnedPerMile: (0.57 * 0.22 * this.state.weight)});
                this.setState({strip: this.state.height / 0.415});
                this.setState({stepCountMile: 160934.4 / this.state.strip});
                this.setState({conversationFactor: this.state.caloriesBurnedPerMile / this.state.stepCountMile});
                this.setState({caloriesBurnedYesterday: parseInt(result.steps * this.state.conversationFactor)});
            },
            error => {
                this.setState({
                    pastStepCount: "Could not get stepCount: " + error
                });
            }
        );
        Pedometer.getStepCountAsync(start3, end).then(
            result => {
                this.setState({ weekStepCount: result.steps });
                this.setState({graphicValueWeek: parseInt((100 * result.steps) / 70000) });
                this.setState({ weekKm: parseInt(result.steps * 0.000762)});
                this.setState({caloriesBurnedPerMile: (0.57 * 0.22 * this.state.weight)});
                this.setState({strip: this.state.height / 0.415});
                this.setState({stepCountMile: 160934.4 / this.state.strip});
                this.setState({conversationFactor: this.state.caloriesBurnedPerMile / this.state.stepCountMile});
                this.setState({caloriesBurnedWeek: parseInt(result.steps * this.state.conversationFactor)});
            },
            error => {
                this.setState({
                    pastStepCount: "Could not get stepCount: " + error
                });
            }
        );
        Pedometer.getStepCountAsync(start4, end).then(
            result => {
                this.setState({ monthStepCount: result.steps });
                this.setState({graphicValueMonth: parseInt((100 * result.steps) / 300000) });
                this.setState({ monthKm: parseInt(result.steps * 0.000762)});
                this.setState({caloriesBurnedPerMile: (0.57 * 0.22 * this.state.weight)});
                this.setState({strip: this.state.height / 0.415});
                this.setState({stepCountMile: 160934.4 / this.state.strip});
                this.setState({conversationFactor: this.state.caloriesBurnedPerMile / this.state.stepCountMile});
                this.setState({caloriesBurnedMonth: parseInt(result.steps * this.state.conversationFactor)});
            },
            error => {
                this.setState({
                    pastStepCount: "Could not get stepCount: " + error
                });
            }
        );
    };

    _unsubscribe = () => {
        this._subscription && this._subscription.remove();
        this._subscription = null;
    };


    render() {




        return (



            <View style={styles.container}>

                <View style={{flex:0.4}}/>

                <View  style={styles.picker}>

                    <RNPickerSelect
                        placeholder={{}}
                        items={days}
                        onValueChange={(itemValue, itemPosition, itemIndex) =>
                            this.setState({dayselect: itemValue, labelselect: itemPosition})
                        }
                        style={pickerSelectStyles}

                        Icon={() => {
                            return <Ionicons name="md-arrow-dropdown" size={19} color="black" style={{marginTop:15,marginRight:13,fontWeight:600 }} />;
                        }}
                    />
                </View>


                <View style={styles.empty}/>




                <View style={styles.graph}>
                    <Grabasd  a = {this.state.labelselect} b = {this.state.graphicValueDay} c = {this.state.graphicValueYesterday} d = {this.state.graphicValueWeek} e ={this.state.graphicValueMonth}  f={this.state.graphicValueDay}
                              g={this.state.todayStepCount} h={this.state.yesterdayStepCount} i={this.state.weekStepCount} j={this.state.monthStepCount}
                    />
                </View>
                <View style={styles.empty}/>





                <View style={styles.data}>

                    <View style ={styles.step}>
                        <View style={styles.bigGroup}>
                            <Image
                                source={require('./assets/run.png')}
                                style={styles.imagestyle}
                            />
                            <View style={styles.group}>
                                <StepFunc a = {this.state.labelselect} days = {this.state.todayStepCount} yes={this.state.yesterdayStepCount} weeks={this.state.weekStepCount} months={this.state.monthStepCount} ns={this.state.todayStepCount}/>

                            </View>
                        </View>
                        <View style={styles.textStep}>
                            <Text style={{color:'#EFDD3A',fontSize:size ,fontWeight:'500'}}>Adım Sayısı</Text>
                        </View>
                    </View>





                    <View style={styles.step}>

                        <View style={styles.bigGroup}>
                            <Image
                                source={require('./assets/road.png')}
                                style={styles.imagestyle}
                            />
                            <View style={styles.group}>
                                <KmFunc a = {this.state.labelselect} dkm = {this.state.dayKm} ykm = {this.state.yesterdayKm} wkm = {this.state.weekKm} mkm = {this.state.monthKm} nkm ={this.state.dayKm}  />
                                <Text  style={{fontSize:size,marginTop:8,fontWeight:'400' }}>km</Text>

                            </View>
                        </View>
                        <View style={styles.textStep}>
                            <Text style={{color:'#8CBFF3',fontSize:size ,fontWeight:'500'}}>Mesafe</Text>
                        </View>
                    </View>
                    <View style={styles.step}>



                        <View style={styles.bigGroup}>
                            <Image
                                source={require('./assets/fire.png')}
                                style={styles.imagestyle}
                            />
                            <View style={styles.group}>
                                <CalFunc a = {this.state.labelselect} dcal = {this.state.caloriesBurnedDay} ycal = {this.state.caloriesBurnedYesterday} wcal = {this.state.caloriesBurnedWeek} mcal = {this.state.caloriesBurnedMonth}  ncal={this.state.caloriesBurnedDay} />


                            </View>
                        </View>
                        <View style={styles.textStep}>
                            <Text style={{color:'#E52323',fontSize:size,fontWeight:'500'}}>Yakılan Kalori</Text>
                        </View>
                    </View>


                </View>


                <View style={styles.empty}/>
                <View style={styles.empty}/>







            </View>



        );


    }

    renderTab = () => {
        return <View />
    }
}
function Grabasd(props) {
    if(props.a === 0) {
        return <AnimatedCircularProgress size={Width * 2}
                                         width={15}
                                         fill={props.b}
                                         tintColor="#00e0ff"
                                         backgroundColor="#3d5875"
                                         arcSweepAngle={300}
                                         rotation={210}
                                         lineCap="round"
        >

            {
                (fill) => (
                      <View style={{alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:60,}} >
                            {props.g}
                        </Text>

<Text style={{fontSize:20,color:'gray'}}> /10000</Text>
                      </View>
                )
            }
        </AnimatedCircularProgress>
    }

    else if(props.a === 1){
        return <AnimatedCircularProgress size={Width * 2}
                                         width={15}
                                         fill={props.c}
                                         tintColor="#00e0ff"
                                         backgroundColor="#3d5875"
                                         arcSweepAngle={300}
                                         rotation={210}
                                         lineCap="round"
        >

            {
                (fill) => (
                    <View style={{alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:60,}} >
                            {props.h}
                        </Text>

                        <Text style={{fontSize:20,color:'gray'}}> /10000</Text>
                    </View>
                )
            }
        </AnimatedCircularProgress>
    }
    else if(props.a === 2){
        return <AnimatedCircularProgress size={Width * 2}
                                         width={15}
                                         fill={props.d}
                                         tintColor="#00e0ff"
                                         backgroundColor="#3d5875"
                                         arcSweepAngle={300}
                                         rotation={210}
                                         lineCap="round"
        >

            {
                (fill) => (
                    <View style={{alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:60,}} >
                            {props.i}
                        </Text>

                        <Text style={{fontSize:20,color:'gray'}}> /70000</Text>
                    </View>
                )
            }
        </AnimatedCircularProgress>
    }
    else if(props.a === 3){
            return <AnimatedCircularProgress size={Width * 2}
                                             width={15}
                                             fill={props.e}
                                             tintColor="#00e0ff"
                                             backgroundColor="#3d5875"
                                             arcSweepAngle={300}
                                             rotation={210}
                                             lineCap="round"
            >

                {
                    (fill) => (
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontSize:60,}} >
                                {props.j}
                            </Text>

                            <Text style={{fontSize:20,color:'gray'}}> /300000</Text>
                        </View>
                    )
                }
            </AnimatedCircularProgress>
        }

    else if(props.a==null){
            return <AnimatedCircularProgress size={Width * 2}
                                             width={15}
                                             fill={props.b}
                                             tintColor="#00e0ff"
                                             backgroundColor="#3d5875"
                                             arcSweepAngle={300}
                                             rotation={210}
                                             lineCap="round"
            >

                {
                    (fill) => (
                        <View style={{alignItems:'center',justifyContent:'center'}}>
                            <Text style={{fontSize:60,}} >
                                {props.g}
                            </Text>

                            <Text style={{fontSize:20,color:'gray'}}> /10000</Text>
                        </View>
                    )
                }
            </AnimatedCircularProgress>
        }
    return null


}
function KmFunc(props) {
    if(props.a === 0){
        return  <Text style={{fontSize:size,marginTop:8,fontWeight:'700', marginLeft:8,}} >  {props.dkm} </Text>
    }
    else if(props.a === 1){
        return  <Text style={{fontSize:size,marginTop:8,fontWeight:'700', marginLeft:8,}} >  {props.ykm} </Text>
    }
    else if(props.a === 2){
        return  <Text style={{fontSize:size,marginTop:8,fontWeight:'700', marginLeft:8,}} >  {props.wkm} </Text>
    }
    else if(props.a === 3){
        return  <Text style={{fontSize:size,marginTop:8,fontWeight:'700', marginLeft:8,}} >  {props.mkm} </Text>
    }

    else if(props.a ==null){

        return <Text style={{fontSize:size,marginTop:8,fontWeight:'700', marginLeft:8,}}>  {props.nkm}  </Text>

    }
    return null
}
function CalFunc(props) {
    if(props.a === 0){
        return  <Text  style={{fontSize:size,marginTop:8,fontWeight:'700', marginLeft:12,}} > {props.dcal} </Text>
    }
    else if(props.a === 1){
        return  <Text style={{fontSize:size,marginTop:8,fontWeight:'700', marginLeft:8,}} >  {props.ycal} </Text>
    }
    else if(props.a === 2){
        return  <Text style={{fontSize:size,marginTop:8,fontWeight:'700', marginLeft:8,}} > {props.wcal} </Text>
    }
    else if(props.a === 3){
        return  <Text style={{fontSize:size,marginTop:8,fontWeight:'700', marginLeft:8,}} >  {props.mcal} </Text>
    }

    else if(props.a ==null){

        return <Text style={{fontSize:size,marginTop:8,fontWeight:'700', marginLeft:12,}} > {props.ncal} </Text>

    }
    return null
}

function StepFunc(props){
    if(props.a === 0){
        return  <Text style={{fontSize:size,marginTop:8,fontWeight:'700', marginLeft:6,}} >  {props.days} </Text>
    }
    else if(props.a === 1){
        return  <Text style={{fontSize:size,marginTop:8,fontWeight:'700', marginLeft:6,}} > {props.yes} </Text>
    }
    else if(props.a === 2){
        return  <Text style={{fontSize:size,marginTop:8,fontWeight:'700', marginLeft:6,}} > {props.weeks} </Text>
    }
    else if(props.a === 3){
        return  <Text style={{fontSize:size,marginTop:8,fontWeight:'700', marginLeft:6,}} > {props.months} </Text>
    }

    else if(props.a==null){
        return <Text style={{fontSize:size,marginTop:8,fontWeight:'700', marginLeft:6,}}>{props.ns} </Text>

    }
    return null
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },


    empty:{
        flex:0.132,


    },


    empty2:{
        flex:0.06,


    },

    picker:{
        flex:0.25,


    },

    graph:{
        flex:1.5,

    },

    data:{
        flex:0.4,
        flexDirection:'row',

    },

    step:{
        flex:0.310,
        backgroundColor:'#F5F6FE',
        borderRadius:10,
        justifyContent: 'flex-start',
        flexDirection:'column',
        marginLeft:8,




    },

    bigGroup:{
        flex:1.2,
        flexDirection:'row',
        marginLeft:8,




    },

    imagestyle: {
        height: 25,
        width: 25,
        marginTop:17,


    },
    group:{
        flexDirection:'row',
        flex:1,
        marginTop:20,



    },
    textStep:{
        flex:0.7,
        alignItems:'center',
        justifyContent:'center'

    },

    tabButton:{
        flex:0.2,
        flexDirection:'row',
        marginBottom:15,



        alignItems:'flex-start',
        justifyContent:'flex-start',
        borderColor: 'rgba(164,164,164,0.93)',
        borderBottomWidth:0,
        borderTopWidth: 0.7,
        borderTopRightRadius:10,
        borderTopLeftRadius:10,

        borderRightWidth: 0.7,
        borderLeftWidth: 0.7,








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
        marginBottom:15,
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


    },
    KmFuncStyle:{
        fontSize:13,
        marginTop:8,
        fontWeight:'700',
        marginLeft:8,



    },



});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 18,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 2,
        borderColor: '#EFEEEE',
        borderRadius: 35,
        color: 'black',
        paddingRight: 30,
        shadowColor: 'black',
        shadowOpacity: .15,// to ensure the text is never behind the icon

    },

});


