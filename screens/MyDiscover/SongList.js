import {Text, View, StyleSheet, Image, Pressable, Alert, ScrollView} from 'react-native';

const SongList = ({navigation}) =>
{
    return(
        <View style={styles.page}>
            <View style={styles.upperPart}>
                <View style={styles.headerPart}>
                    <View style={styles.upperItemsLeft}>
                        <Text style={styles.upperItemsLeftText}>Hillsong United</Text>
                    </View>
                    <View style={styles.upperItemsRight}>
                        <Pressable onPress={() => Alert.alert('Search Song')}>
                            <Image source={require('../../images/Tabs/Discover/SongList/searchButton.png')}/>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.details}>
                    <Pressable onPress={() => Alert.alert('Shuffle Song')}>
                        <View style={styles.details1}>
                            
                                <Image source={require('../../images/Tabs/Discover/SongList/shuffleHeader.png')}/>
                                <Text style={styles.detailsText}> Shuffle</Text>
                            
                        </View>
                    </Pressable>
                    <View style={styles.details2}>
                            <Text style={styles.detailsText}>50 Songs</Text>
                    </View>
                    <Pressable onPress={() => Alert.alert('Edit Song')}>
                        <View>
                            <Text style={styles.detailsText}>Edit</Text>
                        </View>
                    </Pressable>
                </View>
                
            </View>
            
            <View style={styles.scrollablePart}>
                <ScrollView>
                    <Pressable onPress={() => navigation.navigate('MusicPlayer')}>
                        <View style={styles.musicItems}>
                            <View style={styles.musicItemImageView}>
                                <Image source={require('../../images/Tabs/Discover/SongList/hillsongIcon.png')}/>
                            </View>
                            
                            <View style={styles.musicItemTextView}>
                                <View>
                                    <Text style={styles.musicItemtextA}>Oceans (Where Feet May Fail)</Text>
                                </View>
                                <View>
                                    <Text style={styles.musicItemtextB}>Hillsong United</Text>
                                </View>
                            </View>
                        </View>
                    </Pressable>
                    <View style={styles.musicItemDivider}>
                        <Image source={require('../../images/Tabs/Discover/SongList/musicItemDivider.png')}/>
                    </View>
                    <Pressable onPress={() => Alert.alert('Hossana')}>
                        <View style={styles.musicItems}>
                            <View style={styles.musicItemImageView}>
                                <Image source={require('../../images/Tabs/Discover/SongList/hillsongIcon.png')}/>
                            </View>
                            
                            <View style={styles.musicItemTextView}>
                                <View>
                                    <Text style={styles.musicItemtextA}>Hossana</Text>
                                </View>
                                <View>
                                    <Text style={styles.musicItemtextB}>Hillsong United</Text>
                                </View>
                            </View>
                        </View>
                    </Pressable>
                    <View style={styles.musicItemDivider}>
                        <Image source={require('../../images/Tabs/Discover/SongList/musicItemDivider.png')}/>
                    </View>
                    <Pressable onPress={() => Alert.alert('At the Cross')}>
                        <View style={styles.musicItems}>
                            <View style={styles.musicItemImageView}>
                                <Image source={require('../../images/Tabs/Discover/SongList/hillsongIcon.png')}/>
                            </View>
                            
                            <View style={styles.musicItemTextView}>
                                <View>
                                    <Text style={styles.musicItemtextA}>At the Cross</Text>
                                </View>
                                <View>
                                    <Text style={styles.musicItemtextB}>Hillsong United</Text>
                                </View>
                            </View>
                        </View>
                    </Pressable>
                    <View style={styles.musicItemDivider}>
                        <Image source={require('../../images/Tabs/Discover/SongList/musicItemDivider.png')}/>
                    </View>
                    <Pressable onPress={() => Alert.alert('Here I Am To Worship')}>
                        <View style={styles.musicItems}>
                            <View style={styles.musicItemImageView}>
                                <Image source={require('../../images/Tabs/Discover/SongList/hillsongIcon.png')}/>
                            </View>
                            
                            <View style={styles.musicItemTextView}>
                                <View>
                                    <Text style={styles.musicItemtextA}>Here I Am To Worship</Text>
                                </View>
                                <View>
                                    <Text style={styles.musicItemtextB}>Hillsong United</Text>
                                </View>
                            </View>
                        </View>
                    </Pressable>
                    <View style={styles.musicItemDivider}>
                        <Image source={require('../../images/Tabs/Discover/SongList/musicItemDivider.png')}/>
                    </View>
                    <Pressable onPress={() => Alert.alert('What A Beautiful Name')}>
                        <View style={styles.musicItems}>
                            <View style={styles.musicItemImageView}>
                                <Image source={require('../../images/Tabs/Discover/SongList/hillsongIcon.png')}/>
                            </View>
                            
                            <View style={styles.musicItemTextView}>
                                <View>
                                    <Text style={styles.musicItemtextA}>What A Beautiful Name</Text>
                                </View>
                                <View>
                                    <Text style={styles.musicItemtextB}>Hillsong United</Text>
                                </View>
                            </View>
                        </View>
                    </Pressable>
                    <View style={styles.musicItemDivider}>
                        <Image source={require('../../images/Tabs/Discover/SongList/musicItemDivider.png')}/>
                    </View>
                    <Pressable onPress={() => Alert.alert('How Great Is Our God')}>
                        <View style={styles.musicItems}>
                            <View style={styles.musicItemImageView}>
                                <Image source={require('../../images/Tabs/Discover/SongList/hillsongIcon.png')}/>
                            </View>
                            
                            <View style={styles.musicItemTextView}>
                                <View>
                                    <Text style={styles.musicItemtextA}>How Great Is Our God</Text>
                                </View>
                                <View>
                                    <Text style={styles.musicItemtextB}>Hillsong United</Text>
                                </View>
                            </View>
                        </View>
                    </Pressable>
                    <View style={styles.musicItemDivider}>
                        <Image source={require('../../images/Tabs/Discover/SongList/musicItemDivider.png')}/>
                    </View>
                    <Pressable onPress={() => Alert.alert('Came To My Rescue')}>
                        <View style={styles.musicItems}>
                            <View style={styles.musicItemImageView}>
                                <Image source={require('../../images/Tabs/Discover/SongList/hillsongIcon.png')}/>
                            </View>
                            
                            <View style={styles.musicItemTextView}>
                                <View>
                                    <Text style={styles.musicItemtextA}>Came To My Rescue</Text>
                                </View>
                                <View>
                                    <Text style={styles.musicItemtextB}>Hillsong United</Text>
                                </View>
                            </View>
                        </View>
                    </Pressable>
                    <View style={styles.musicItemDivider}>
                        <Image source={require('../../images/Tabs/Discover/SongList/musicItemDivider.png')}/>
                    </View>
                    <Pressable onPress={() => Alert.alert("Eagle's Wings")}>
                        <View style={styles.musicItems}>
                            <View style={styles.musicItemImageView}>
                                <Image source={require('../../images/Tabs/Discover/SongList/hillsongIcon.png')}/>
                            </View>
                            
                            <View style={styles.musicItemTextView}>
                                <View>
                                    <Text style={styles.musicItemtextA}>Eagle's Wings</Text>
                                </View>
                                <View>
                                    <Text style={styles.musicItemtextB}>Hillsong United</Text>
                                </View>
                            </View>
                        </View>
                    </Pressable>
                    <View style={styles.musicItemDivider}>
                        <Image source={require('../../images/Tabs/Discover/SongList/musicItemDivider.png')}/>
                    </View>
                    <Pressable onPress={() => Alert.alert('King Of Kings')}>
                        <View style={styles.musicItems}>
                            <View style={styles.musicItemImageView}>
                                <Image source={require('../../images/Tabs/Discover/SongList/hillsongIcon.png')}/>
                            </View>
                            
                            <View style={styles.musicItemTextView}>
                                <View>
                                    <Text style={styles.musicItemtextA}>King Of Kings</Text>
                                </View>
                                <View>
                                    <Text style={styles.musicItemtextB}>Hillsong United</Text>
                                </View>
                            </View>
                        </View>
                    </Pressable>
                    <View style={styles.musicItemDivider}>
                        <Image source={require('../../images/Tabs/Discover/SongList/musicItemDivider.png')}/>
                    </View>
                    <Pressable onPress={() => Alert.alert('Rest in You')}>
                        <View style={styles.musicItems}>
                            <View style={styles.musicItemImageView}>
                                <Image source={require('../../images/Tabs/Discover/SongList/hillsongIcon.png')}/>
                            </View>
                            
                            <View style={styles.musicItemTextView}>
                                <View>
                                    <Text style={styles.musicItemtextA}>Rest in You</Text>
                                </View>
                                <View>
                                    <Text style={styles.musicItemtextB}>Hillsong United</Text>
                                </View>
                            </View>
                        </View>
                    </Pressable>
                    
                </ScrollView>
            </View>
            <View style={styles.lowerPart}>
                <View style={styles.playingPart}>
                    <View style={styles.playingSongImage}>
                        <Image source={require('../../images/Tabs/Discover/SongList/hillsongPlay.png')}/>
                    </View>
                    <View style={styles.playingTextView}>
                        <View>
                            <Text style={styles.playingTextA}>Hillsong United</Text>
                            <Text style={styles.playingTextB}>Oceans (Where Feet...</Text>
                        </View>
                    </View>
                    <View style={styles.playButtonView}>
                        <Pressable onPress={() => Alert.alert('Play Song')}>
                            <Image source={require('../../images/Tabs/Discover/SongList/playButton.png')}/>
                        </Pressable>
                    </View>
                    <View style={styles.nextButtonView}>
                        <Pressable onPress={() => Alert.alert('Play Next Song')}>
                            <Image source={require('../../images/Tabs/Discover/SongList/nextButton.png')}/>
                        </Pressable>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: 395,
        alignItems: 'center',
        marginTop: 30,
    },
    upperPart: {
        width: 395,
        flex: 18,
    },
    headerPart: {
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    upperItemsLeft: {
        marginTop: 10,
        marginRight: 70
    },
    upperItemsLeftText: {
        backgroundColor: 'white',
        fontSize: 33,
        fontWeight: '800',
        paddingHorizontal: 5,
        borderRadius: 13
    },
    upperItemsRight: {
        marginTop: 16,
        marginRight: 20
    },
    details: {
        flexDirection: 'row',
        marginTop: 50,
        marginLeft: 20
    },
    details1: {
        flexDirection: 'row',
        marginRight: 50
    },
    details2: {
        marginRight: 140
    },
    detailsText: {
        fontWeight: '400',
        fontSize: 15
    },
    scrollablePart: {
        flex: 70,
        width: 395,
        backgroundColor: 'white',
    },
    musicItems: {
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 9
    },
    musicItemImageView: {
        marginLeft: 10
    },
    musicItemTextView: {
        marginTop: 6,
        marginLeft: 10
    },
    musicItemtextA: {
        fontWeight: '500',
        fontSize: 19
    },
    musicItemtextB: {
        fontWeight: '300',
        fontSize: 15,
        fontStyle: 'italic'
    },
    musicItemDivider: {
        alignItems: 'center'
    },
    lowerPart: {
        flex: 12,
        backgroundColor: 'black',
        width: 395,
        
    },
    playingPart: {
        alignContent: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginTop: 15
    },
    playingSongImage: {
        marginLeft: 20
    },
    playingTextView: {
        marginTop: 4,
        marginLeft: 20
    },
    playingTextA: {
        fontWeight: '500',
        fontSize: 20,
        color: 'white'
    },
    playingTextB: {
        fontWeight: '400',
        fontSize: 16,
        color: 'white'
    },
    playButtonView: {
        marginTop: 10,
        marginLeft: 20
    },
    nextButtonView: {
        marginTop: 16,
        marginLeft: 20
    }
})

export default SongList