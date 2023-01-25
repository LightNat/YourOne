import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Button, Image, ImageBackground ,Pressable, Alert, FlatList } from 'react-native';

const Videoscreen3 = (props) => {
    return(
    <View style={style.container}>
        <View style={style.stevenimage}>
            <ImageBackground source={require('../../images/Tabs/Preachings/stevscreen3speech.png')}
                style ={style.picture}>
                <Pressable onPress={()=> console.warn("Play")}>
                    <Text style={style.textplay}>Play</Text>
                </Pressable>
                <View style={style.backgroundwhite}>
                    <Text style={style.stevenname}>Steven Furtick</Text>
                    <Text style={{fontSize: 30, fontWeight: '700', marginLeft: 33,
                    marginTop: 35}}>When anxiety attacks</Text>
                    <Text style={{fontSize: 16, fontWeight:'700',color: '#6A6A6A',
                        marginLeft: 35,}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi et dapibus leo, sit amet commodo magna.
                        {'\n'}{'\n'}Curabitur fermentum lobortis ante eu aliquet. Suspendisse accumsan condimentum orci sit amet suscipit. 
                    </Text>
                    
                </View>
            </ImageBackground>
        </View>
    </View>
    );
}
const style = StyleSheet.create({
    container:{
        marginTop:1,
        alignItems: 'center',
        resizeMode: 'contain'
    },
    stevenimage:{
        marginTop: 20,
    },
    picture:{
        marginTop: 10,
        resizeMode: 'cover',
        width: 409,
        height: 350,
    },
    textplay:{
        marginTop: 210,
        marginLeft: 21,
        backgroundColor: '#A4A1A1',
        width: 88,
        fontWeight: 'bold',
        color: '#FFFFFF',
        borderRadius: 8,
        textAlign: 'center',
        fontSize: 22,
        height: 35,
    },
    backgroundwhite:{ 
        backgroundColor: '#EBE9E9', 
        width:409,     
        marginTop: 20, 
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        height: 500
    },
    stevenname:{
        color: '#FFFFFF',
        backgroundColor: '#6B4198',
        fontSize: 21,
        fontWeight: 'bold',
        borderRadius: 50,
        textAlign: 'center',
        width: 170,
        marginTop: 23,
        marginLeft: 29,
        height: 40,
        paddingTop: 5,
    },
    black:{
        flexDirection: 'row',
    }
});
export default Videoscreen3;
	