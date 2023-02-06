import { StyleSheet, Text, View, ScrollView, Image ,Pressable, Alert} from 'react-native';

const BookScreen4 = ({navigation})=>{
    return(
        <View style={styles.container}>
            <View style={{marginTop:1, marginBottom:1}}>
                <View style={{flexDirection:'row'}}>
                    <Pressable  onPress={() => navigation.navigate('BookScreen3')}>
                        <Image source={require('../../images/Tabs/Bible/back.png')}
                        style={{ marginTop: 30,marginLeft: 20 }}/>
                    </Pressable>
                    <View style={{alignItems:'center'}}>
                        <Text style={{fontSize:22,fontWeight:'600',marginLeft: 120,
                            marginTop:30}}>BOOK</Text>
                        <Image source={require('../../images/Tabs/Bible/linegray.png')}
                        style={{marginLeft:120, width:60, height: 7,resizeMode:'stretch',borderRadius:10}}/>
                    </View>
                </View>
            </View>
            <View style={{backgroundColor:'#FFFFFF',height:700,borderTopRightRadius:13,borderTopLeftRadius:13,marginTop: 30}}>
                <View style={{flexDirection:'row',alignContent:'center',alignItems:'center',}}>
                    <Pressable  onPress={() => console.warn("Previous Chapter")}>
                    <Image source={require('../../images/Tabs/Bible/left.png')}
                    style={{marginLeft: 20,marginTop: 25}}/>
                    </Pressable>
                    <Text style={{marginLeft:13,paddingTop:20,fontSize:10,fontWeight:'600',color:'#4B4B4B'}}>Previous Chapter</Text>
                    <Text style={{fontSize:18,fontWeight:'600',paddingTop:21,paddingLeft:35}}>Philippians 4</Text>
                    <Text style={{marginLeft:30,paddingTop:20,fontSize:10,fontWeight:'600',color:'#4B4B4B'}}>Next Chapter</Text>
                    <Pressable  onPress={() => console.warn("Next Chapter")}>
                    <Image source={require('../../images/Tabs/Bible//right.png')}
                    style={{marginLeft: 20,marginTop: 25}}/>   
                    </Pressable>
                </View>
                <ScrollView style={{marginTop:30,marginBottom:110}}>
                    <View style={{marginTop:-30}}>
                        <Text style={{fontSize:16,fontWeight:'600',padding:30,}}>Closing Appeal for Steadfastness and Unity</Text>
                        <View style={{paddingLeft:20,paddingRight:20,marginTop:-25}}>
                            <Text style={{fontSize:15,}}>   1 Therefore, my brothers and sisters, you whom I love and long for, my joy and crown, stand firm in the Lord in this way, dear friends!
                            {'\n'}   2 I plead with Euodia and I plead with Syntyche to be of the same mind in the Lord. 3Yes, and I ask you, my true companion, help these women since they have contended at my side in the cause of the gospel, along with Clement and the rest of my co-workers, whose names are in the book of life.
                            </Text>
                            <Text style={{fontSize:16,fontWeight:'600',paddingTop:20,}}>Final Exhortations</Text>
                            <Text style={{fontSize:15,}}>    4 Rejoice in the Lord always. I will say it again: Rejoice! 5Let your gentleness be evident to all. The Lord is near. 6Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. 7And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.
                            {'\n'}   8 Finally, brothers and sisters, whatever is true, whatever is noble, whatever is right, whatever is pure, whatever is lovely, whatever is admirable—if anything is excellent or praiseworthy—think about such things. 9 Whatever you have learned or received or heard from me, or seen in me—put it into practice. And the God of peace will be with you.</Text>
                            <Text style={{fontSize:16,fontWeight:'600',paddingTop:20,}}>Thanks for Their Gifts</Text>
                            <Text>   10 I rejoiced greatly in the Lord that at last you renewed your concern for me. Indeed, you were concerned, but you had no opportunity to show it. 11 I am not saying this because I am in need, for I have learned to be content whatever the circumstances. 12 I know what it is to be in need, and I know what it is to have plenty. I have learned the secret of being content in any and every situation, whether well fed or hungry, whether</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        
        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        alignContent:'center',
        backgroundColor:'#EBE9E9',
        paddingTop: 10,
        marginTop: 20
    },
   
});

export default BookScreen4;