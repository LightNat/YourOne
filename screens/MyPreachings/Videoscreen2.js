import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button, Image, ImageBackground ,Pressable, Alert, FlatList } from 'react-native';

const Videoscreen2 = ({navigation}) => {
	return(
    <View style={style.container1}>
        <View>
            <Text style={style.header}>Steven Furtick</Text>
        </View>
        <ScrollView>
            <View style={style.speech1design}>
                <ImageBackground source={require('../../images/Tabs/Preachings/stevenspeech1.png')}
                    style ={style.speech1picture}>
                    <Pressable onPress={()=> navigation.navigate('Videoscreen3')}>
                        <Text style={style.buttonplay1}>Play</Text>
                    </Pressable>
                </ImageBackground>
            </View>
            <View style={style.container2}>             
                <View>
                    <Text style={style.titledescrip}>When anxiety attacks</Text>
                    <Text style={style.descriptext}>Lorem ipsum dolor sit amets,{"\n"}consectetur adipiscing elit.</Text>
                    <View style={{flex: 1, height:2, backgroundColor: '#C1C1C1', width:350, marginLeft: 20,
                        marginTop: 10}}>
                    </View>
                </View>
            </View>
            <View style={style.speech1design}>
                <ImageBackground source={require('../../images/Tabs/Preachings/stevenspeech2.png')}
                    style ={style.speech1picture}>
                    <Pressable onPress={()=> console.warn("Play")}>
                        <Text style={style.buttonplay1}>Play</Text>
                    </Pressable>
                </ImageBackground>
            </View>
            <View style={style.container2}>             
                    <View>
                        <Text style={style.titledescrip}>Bars and Battle</Text>
                        <Text style={style.descriptext}>Lorem ipsum dolor sit amets,{"\n"}consectetur adipiscing elit.</Text>
                        <View style={{flex: 1, height:2, backgroundColor: '#C1C1C1', width:350, marginLeft: 20,
                            marginTop: 10}}>
                        </View>
                    </View>
            </View>
            <View style={style.speech1design}>
                <ImageBackground source={require('../../images/Tabs/Preachings/stevenspeech1.png')}
                    style ={style.speech1picture}>
                    <Pressable onPress={()=> console.warn("Play")}>
                        <Text style={style.buttonplay1}>Play</Text>
                    </Pressable>
                </ImageBackground>
            </View>
            <View style={style.container2}>             
                    <View>
                        <Text style={style.titledescrip}>When anxiety attacks</Text>
                        <Text style={style.descriptext}>Lorem ipsum dolor sit amets,{"\n"}consectetur adipiscing elit.</Text>
                        <View style={{flex: 1, height:1, backgroundColor: '#C1C1C1', width:350, marginLeft: 20,
                            marginTop: 10}}>
                        </View>
                    </View>
            </View>
        </ScrollView>    
    </View>
    );
}
const style = StyleSheet.create({
    container1:{
        marginLeft: 10,
        //alignItems: 'center',
    },
    container2:{
        
    },
    header:{
        marginTop: 40,
        width: 240,
        fontSize: 33,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ECECEC',
        borderRadius: 10,
        marginLeft: 5,
        paddingLeft: 12,
    },
    speech1design:{
        marginTop: 13,
        resizeMode: "cover",
		width: 150, 
		height: 200,
		border: 60, 
		marginLeft: 10,
    },
    speech1picture:{
        resizeMode: "contain",
		marginTop: 2,
		width: 350, 
		height: 192,
        
    },
    buttonplay1:{
        backgroundColor: '#A4A1A1',
        width:60,
        fontSize: 16,
        color: '#FFFFFF',
        textAlign: 'center',
        borderRadius: 8,
        marginLeft: 32,
        marginTop: 140,
    },
    titledescrip:{
        fontSize: 23,
        fontWeight: 'bold',   
        marginLeft: 55,
        marginTop: 6
    },
    descriptext:{
        color: '#6A6A6A',
        fontWeight:'bold',
        marginLeft: 59,
        fontSize: 16,
        
        
        
    }
});
    export default Videoscreen2;

