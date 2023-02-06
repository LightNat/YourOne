import { StyleSheet, Text, View, ScrollView,TextInput, Pressable, Image, Alert} from 'react-native';

function BibleBook({navigation}) {
  return (
    <View style={styles.Container}>
        <View  style={{marginTop:1, marginBottom:1}}>
            <View style={{flexDirection:'row', marginLeft: 30, marginTop: 20}}>
                <View>
                    <Text style={{fontSize:22,fontWeight:'600',marginLeft: 70,
                        marginTop:30}}>SELECT A BOOK</Text>
                    <Image source={require('../../images/Tabs/Bible/linegray.png')}
                    style={{marginLeft:70, width:164, height: 7}}/>
                </View>
            </View>
            <View style={{flexDirection:'row',marginTop: 17, marginLeft:45}}>
                <Pressable onPress={() => console.warn("Old Testament")} >
                    <Text style={{backgroundColor:'black',color:'#FFFFFF',
                        borderRadius: 10,fontSize:16,height:38,width:150,textAlign:'center',
                        paddingTop:6, fontWeight:'600'}}>Old Testament
                    </Text>
                </Pressable>
                <Pressable onPress={() => console.warn("New Testament")}>
                    <Text style={{backgroundColor:'#6B4198',color:'#FFFFFF',
                        borderRadius: 10,fontSize:16,height:38,width:150,textAlign:'center',
                        paddingTop:6,marginLeft:10,fontWeight:'600'}}>New Testament
                    </Text>
                </Pressable>
            </View>
        </View>
        {/* For backgroundColor */}
        <View style={{backgroundColor:'#EBE9E9',borderTopRightRadius:13,borderTopLeftRadius:13,
            marginLeft:-8,marginTop:5}}> 
            {/* Search */}
            <View style={{marginTop:8,marginLeft:60,}}>
                <Text style={{fontSize:16,fontWeight:'400',fontSize:16,color:'#5E5E5E',
                    backgroundColor:'#FFFFFF',borderRadius:13,borderWidth:1,borderColor:'#BEBEBE',
                    paddingLeft: 10,paddingTop:5,height:37,width:281}}>
                </Text>
                    <TextInput style={{marginTop:-35, marginLeft: 18,fontSize:16,fontWeight:'400',
                        fontSize:16,color:'#5E5E5E',paddingTop:2}} placeholder='Search'/>
                        {/* SearchIcon */}
                        <Image source={require('../../images/Tabs/Bible/booksearch.png')}
                        style={{marginTop:-23,marginLeft: 248}}
                        />
            </View>
                <ScrollView style={{marginTop:10,marginBottom:300}}>
                    <View>
                      <Pressable onPress={() => navigation.navigate('BookScreen2')}>
                        <View style={styles.column1}>
                            <Image source={require('../../images/Tabs/Bible/candle.png')}
                            style={{resizeMode:'stretch',height:40,width:40,marginTop:5,marginLeft:10,}}/>
                            <Text style={styles.biblebooks}>Philippians</Text>
                            <Text style={styles.chapters}>4 Chapters</Text>
                            <Image source={require('../../images/Tabs/Bible/arrow.png')}
                            style={{marginLeft:15,marginTop:15}}/>
                        </View>
                      </Pressable>
                      <Pressable onPress={() => Alert.alert('Colossians')}>
                        <View style={styles.column1}>
                            <Image source={require('../../images/Tabs/Bible/candle.png')}
                            style={{resizeMode:'stretch',height:40,width:40,marginTop:5,marginLeft:10,}}/>
                    
                            <Text style={styles.biblebooks}>Colossians</Text>
                            
                            <Text style={styles.chapters}>4 Chapters</Text>
                            <Image source={require('../../images/Tabs/Bible/arrow.png')}
                            style={{marginLeft:15,marginTop:15}}/>
                        </View>
                      </Pressable>
                      <Pressable onPress={() => Alert.alert('1 Thessalonians')}>
                        <View style={styles.column1}>
                            <Image source={require('../../images/Tabs/Bible/candle.png')}
                            style={{resizeMode:'stretch',height:40,width:40,marginTop:5,marginLeft:10,}}/>
                    
                            <Text style={styles.biblebooks}>1 Thessalonians</Text>
                            
                            <Text style={{fontSize:16,
                            fontWeight: '500',
                            marginLeft: 45,
                            paddingTop: 15,}}>5 Chapters</Text>
                            <Image source={require('../../images/Tabs/Bible/arrow.png')}
                            style={{marginLeft:15,marginTop:15}}/>
                        </View>
                      </Pressable>
                      <Pressable onPress={() => Alert.alert('2 Thessalonians')}>
                        <View style={styles.column1}>
                            <Image source={require('../../images/Tabs/Bible/candle.png')}
                            style={{resizeMode:'stretch',height:40,width:40,marginTop:5,marginLeft:10,}}/>
                    
                            <Text style={styles.biblebooks}>2 Thessalonians</Text>
                            
                            <Text style={{fontSize:16,
                            fontWeight: '500',
                            marginLeft: 45,
                            paddingTop: 15,}}>3 Chapters</Text>
                            <Image source={require('../../images/Tabs/Bible/arrow.png')}
                            style={{marginLeft:15,marginTop:15}}/>
                        </View>
                      </Pressable>
                      <Pressable onPress={() => Alert.alert('1 Timothy')}>
                        <View style={styles.column1}>
                            <Image source={require('../../images/Tabs/Bible/candle.png')}
                            style={{resizeMode:'stretch',height:40,width:40,marginTop:5,marginLeft:10,}}/>
                    
                            <Text style={styles.biblebooks}>1 Timothy</Text>
                            
                            <Text style={{fontSize:16,
                            fontWeight: '500',
                            marginLeft: 100,
                            paddingTop: 15,}}>6 Chapters</Text>
                            <Image source={require('../../images/Tabs/Bible/arrow.png')}
                            style={{marginLeft:15,marginTop:15}}/>
                        </View>
                      </Pressable>
                      <Pressable onPress={() => Alert.alert('2 Timothy')}>
                        <View style={styles.column1}>
                            <Image source={require('../../images/Tabs/Bible/candle.png')}
                            style={{resizeMode:'stretch',height:40,width:40,marginTop:5,marginLeft:10,}}/>
                    
                            <Text style={styles.biblebooks}>2 Timothy</Text>
                            
                            <Text style={{fontSize:16,
                            fontWeight: '500',
                            marginLeft: 100,
                            paddingTop: 15,}}>4 Chapters</Text>
                            <Image source={require('../../images/Tabs/Bible/arrow.png')}
                            style={{marginLeft:15,marginTop:15}}/>
                        </View>
                      </Pressable>
                      <Pressable onPress={() => Alert.alert('Titus')}>
                        <View style={styles.column1}>
                            <Image source={require('../../images/Tabs/Bible/candle.png')}
                            style={{resizeMode:'stretch',height:40,width:40,marginTop:5,marginLeft:10,}}/>
                    
                            <Text style={styles.biblebooks}>Titus</Text>
                            
                            <Text style={{fontSize:16,
                            fontWeight: '500',
                            marginLeft: 140,
                            paddingTop: 15,}}>3 Chapters</Text>
                            <Image source={require('../../images/Tabs/Bible/arrow.png')}
                            style={{marginLeft:15,marginTop:15}}/>
                        </View>
                      </Pressable>
                      <Pressable onPress={() => Alert.alert('Philemon')}>
                        <View style={styles.column1}>
                            <Image source={require('../../images/Tabs/Bible/candle.png')}
                            style={{resizeMode:'stretch',height:40,width:40,marginTop:5,marginLeft:10,}}/>
                    
                            <Text style={styles.biblebooks}>Philemon</Text>
                            
                            <Text style={{fontSize:16,
                            fontWeight: '500',
                            marginLeft: 109,
                            paddingTop: 15,}}>1 Chapter</Text>
                            <Image source={require('../../images/Tabs/Bible/arrow.png')}
                            style={{marginLeft:18,marginTop:15}}/>
                        </View>
                      </Pressable>
                      <Pressable onPress={() => Alert.alert('Hebrews')}>
                        <View style={styles.column1}>
                            <Image source={require('../../images/Tabs/Bible/candle.png')}
                            style={{resizeMode:'stretch',height:40,width:40,marginTop:5,marginLeft:10,}}/>
                    
                            <Text style={styles.biblebooks}>Hebrews</Text>
                            
                            <Text style={{fontSize:16,
                            fontWeight: '500',
                            marginLeft: 100,
                            paddingTop: 15,}}>13 Chapters</Text>
                            <Image source={require('../../images/Tabs/Bible/arrow.png')}
                            style={{marginLeft:15,marginTop:15}}/>
                        </View>
                      </Pressable>
                      <Pressable onPress={() => Alert.alert('James')}>
                        <View style={styles.column1}>
                            <Image source={require('../../images/Tabs/Bible/candle.png')}
                            style={{resizeMode:'stretch',height:40,width:40,marginTop:5,marginLeft:10,}}/>
                    
                            <Text style={styles.biblebooks}>James</Text>
                            
                            <Text style={{fontSize:16,
                            fontWeight: '500',
                            marginLeft: 126,
                            paddingTop: 15,}}>5 Chapters</Text>
                            <Image source={require('../../images/Tabs/Bible/arrow.png')}
                            style={{marginLeft:15,marginTop:15}}/>
                        </View>
                      </Pressable>
                    </View>
                </ScrollView>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container:{
      alignContent:'center',
      marginLeft:9
  },
  column1:{
      backgroundColor:'#FFFFFF',
      //borderColor: 'orange',
      //borderWidth: 1,
      flexDirection: 'row',
      marginLeft: 10,
      height:52,
      width:370,
      marginTop:5,
      marginBottom:10,
      borderRadius:8,
      elevation: 15,

  },
  biblebooks:{
      fontSize:18,
      fontWeight: '600',
      paddingTop: 14,
      marginLeft:10,
  },
  chapters:{
      fontSize:16,
      fontWeight: '500',
      marginLeft: 90,
      paddingTop: 16,
      
  }
});

export default BibleBook