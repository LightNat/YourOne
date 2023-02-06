import { StyleSheet, Text, View, Image, Pressable, Alert} from 'react-native';

const BookScreen2 = ({navigation})=>{

    return(
        <View style={styles.container}>  
            <View style={{marginTop:1, marginBottom:1}}>
                <View style={{flexDirection:'row'}}>
                    <Pressable  onPress={() => navigation.navigate('BibleBook')}>
                        <Image source={require('../../images/Tabs/Bible/back.png')}
                        style={{ marginTop: 30,marginLeft: 15 }}/>
                    </Pressable>
                    <View>
                        <Text style={{fontSize:22,fontWeight:'600',marginLeft: 50,
                            marginTop:30}}>SELECT A CHAPTER</Text>
                        <Image source={require('../../images/Tabs/Bible/linegray.png')}
                        style={{marginLeft:50, width:206, height: 7}}/>
                    </View>
                </View>
            </View>
            <View style={{backgroundColor:'#EBE9E9',height:700,borderTopRightRadius:13,borderTopLeftRadius:13,
                    marginTop:20,marginLeft:-7}}>
                <View style={{marginTop:10}}>
                    <Text style={{alignSelf:'center',borderRadius:8,width:390,height:45,textAlign:'center',
                    elevation:10,backgroundColor:'#FFFFFF',fontSize:22,fontWeight:'700',paddingTop:5}}>Philippians</Text>
                    <Image source={require('../../images/Tabs/Bible/down.png')}
                    style={{marginLeft:360,marginTop:-30}}/>
                    <View style={{flexDirection:'row',paddingTop:50,marginLeft:-17}}>
                    <Pressable onPress={() => Alert.alert('1')}>
                        <Text style={styles.numberchapter}>1</Text>
                    </Pressable>
                    <Pressable onPress={() => Alert.alert('2')}>
                        <Text style={styles.numberchapter}>2</Text>
                    </Pressable>
                    <Pressable onPress={() => Alert.alert('3')}>
                        <Text style={styles.numberchapter}>3</Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('BookScreen3')}>
                        <Text style={styles.numberchapter}>4</Text>
                    </Pressable>
                    </View>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        alignContent:'center',
        marginLeft:9,
        marginTop: 20
    },
    numberchapter:{
        fontSize:15,
        fontWeight:'500',
        marginLeft: 60
    }
});

export default BookScreen2;