import react from 'react';
import { View, StyleSheet, Text, Image,ImageBackground, } from 'react-native';
import Slider from '@react-native-community/slider';
// npm install @react-native-community/slider --save
const Videoscreen4 = (props) => {


  return (
    <View style={styles.container}>
     
      <ImageBackground source={require('../../images/Tabs/Preachings/speech4.png')}
        style={styles.image}>
        <View style={styles.white} />
        <Slider
        style={{width: 650, height: 40,marginTop:-80,alignSelf:'center',}}
        minimumValue={1}
        maximumValue={100}
        minimumTrackTintColor="#6B4198"
        maximumTrackTintColor="black"
        thumbTintColor="#6B4198">
        </Slider>
        <View style={styles.player}>
            <Image source={require('../../images/Tabs/Preachings/prev.png')}
            style={{marginLeft:10}}/>
            <Image source={require('../../images/Tabs/Preachings/play.png')}
           style={{marginLeft:40}}/>
           <Image source={require('../../images/Tabs/Preachings/next.png')}
           style={{marginLeft:40}}/>
          
           <Text style={{fontWeight:'500',marginLeft:30,fontSize:16}}>00:00 / 10:30</Text>
           
           <View style={styles.player2}>
                <Image source={require('../../images/Tabs/Preachings/speaker.png')}
              style={{marginLeft:160}}/>
                <Image source={require('../../images/Tabs/Preachings/caption.png')}
              style={{marginLeft:30}}/>
                <Image source={require('../../images/Tabs/Preachings/settings.png')}
              style={{marginLeft:35}}/>
                <Image source={require('../../images/Tabs/Preachings/fullscreen.png')}
              style={{marginLeft:35}}/>
           </View>
        </View>
      </ImageBackground>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf:'center',
    padding:30,
    marginBottom:1,
    backgroundColor:"#EBE9E9"
  },
  image:{
    resizeMode:'stretch',
    width:780,
    height:380,
  },
  white:{
    backgroundColor:'#D9D9D9',
    height:80,
    width:780,
    marginTop:290,
    opacity: 0.7
  },
  ellipse:{
    height:10,
    width:670,
    marginTop:200
  },
  player:{
    flexDirection:'row'
  },
  player2:{
    marginLeft: 60,
    flexDirection:'row',
    alignItems:'center',
    marginTop:-10
  }
});

export default Videoscreen4;