import { StyleSheet, Text, View, Image, Pressable, Alert} from 'react-native';

const BookScreen3 = ({navigation})=>{
    return(
        <View style={styles.container}>
            <View style={{marginTop:1, marginBottom:1}}>
                <View style={{flexDirection:'row'}}>
                    <Pressable  onPress={() => navigation.navigate('BookScreen2')}>
                        <Image source={require('../../images/Tabs/Bible/back.png')}
                        style={{ marginTop: 30,marginLeft: 15 }}/>
                    </Pressable>
                    <View>
                        <Text style={{fontSize:22,fontWeight:'600',marginLeft: 70,
                            marginTop:30}}>SELECT A VERSE</Text>
                        <Image source={require('../../images/Tabs/Bible/linegray.png')}
                        style={{marginLeft:70, width:164, height: 7}}/>
                    </View>
                </View>
            </View>
            <View style={{backgroundColor:'#EBE9E9',height:700,borderTopRightRadius:13,borderTopLeftRadius:13,
                    marginTop:40,marginLeft:-7}}>
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
                    <Pressable onPress={() => Alert.alert('4')}>
                        <Text style={styles.numberchapter}>4</Text>
                    </Pressable>
                    <Pressable onPress={() => Alert.alert('5')}>
                        <Text style={styles.numberchapter}>5</Text>
                    </Pressable>
                </View>
                </View>
                <View style={{flexDirection:'row',paddingTop:40,marginLeft:-17}}>
                    <Pressable onPress={() => navigation.navigate('BookScreen4')}>
                        <Text style={styles.numberchapter}>6</Text>
                    </Pressable>
                    <Pressable onPress={() => Alert.alert('7')}>
                        <Text style={styles.numberchapter}>7</Text>
                    </Pressable>
                    <Pressable onPress={() => Alert.alert('8')}>
                        <Text style={styles.numberchapter}>8</Text>
                    </Pressable>
                    <Pressable onPress={() => Alert.alert('9')}>
                        <Text style={styles.numberchapter}>9</Text>
                    </Pressable>
                    <Pressable onPress={() => Alert.alert('10')}>
                        <Text style={styles.numberchapter}>10</Text>
                    </Pressable>
                </View>
                 <View style={{flexDirection:'row',marginLeft:10,paddingTop:40,marginLeft:-25}}>
                    <Pressable onPress={() => Alert.alert('11')}>
                        <Text style={{ fontSize:15,fontWeight:'500',marginLeft: 70}}>11</Text>
                    </Pressable>
                    <Pressable onPress={() => Alert.alert('12')}>
                        <Text style={{ fontSize:15,fontWeight:'500',marginLeft: 54}}>12</Text>
                    </Pressable>
                    <Pressable onPress={() => Alert.alert('13')}>
                        <Text style={{ fontSize:15,fontWeight:'500',marginLeft: 58}}>13</Text>
                    </Pressable>
                    <Pressable onPress={() => Alert.alert('14')}>
                        <Text style={{ fontSize:15,fontWeight:'500',marginLeft: 55}}>14</Text>
                    </Pressable>
                    <Pressable onPress={() => Alert.alert('15')}>
                        <Text style={{ fontSize:15,fontWeight:'500',marginLeft: 60}}>15</Text>
                    </Pressable>
                </View>
                <View style={{flexDirection:'row',marginLeft:10,paddingTop:40,marginLeft:-25}}>
                    <Pressable onPress={() => Alert.alert('16')}>
                        <Text style={{ fontSize:15,fontWeight:'500',marginLeft: 70}}>16</Text>
                    </Pressable>
                    <Pressable onPress={() => Alert.alert('17')}>
                        <Text style={{ fontSize:15,fontWeight:'500',marginLeft: 54}}>17</Text>
                    </Pressable>
                    <Pressable onPress={() => Alert.alert('18')}>
                        <Text style={{ fontSize:15,fontWeight:'500',marginLeft: 58}}>18</Text>
                    </Pressable>
                    <Pressable onPress={() => Alert.alert('19')}>
                        <Text style={{ fontSize:15,fontWeight:'500',marginLeft: 55}}>19</Text>
                    </Pressable>
                    <Pressable onPress={() => Alert.alert('20')}>
                        <Text style={{ fontSize:15,fontWeight:'500',marginLeft: 60}}>20</Text>
                    </Pressable>
                </View>
                <View style={{flexDirection:'row',marginLeft:10,paddingTop:40,marginLeft:-25}}>
                    <Pressable onPress={() => Alert.alert('21')}>
                        <Text style={{ fontSize:15,fontWeight:'500',marginLeft: 70}}>21</Text>
                    </Pressable>
                    <Pressable onPress={() => Alert.alert('22')}>
                        <Text style={{ fontSize:15,fontWeight:'500',marginLeft: 54}}>22</Text>
                    </Pressable>
                    <Pressable onPress={() => Alert.alert('23')}>
                        <Text style={{ fontSize:15,fontWeight:'500',marginLeft: 58}}>23</Text>
                    </Pressable>
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
        marginLeft: 65
    }
});

export default BookScreen3;