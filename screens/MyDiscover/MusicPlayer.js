import {Text, View, StyleSheet, Image, Pressable, Alert} from 'react-native';

function MusicPlayer()
{
    return(
        <View style={styles.page}>
            <View style={styles.header}>
                <Text style={styles.headerTextA}>Hillsong United Playlist</Text>
                <Text style={styles.headerTextB}>Oceans</Text>
                <Text style={styles.headerTextB}>(Where Feet May Fail)...</Text>
            </View>
            <View style={styles.albumImageView}>
                <Image source={require('../../images/Tabs/Discover/MusicPlayer/yourOnePlayerAlbum.png')}
                style={styles.albumImage}
                />
            </View>
            <View style={styles.buffer}>
                <View>
                    <Image source={require('../../images/Tabs/Discover/MusicPlayer/playedPart.png')}/>
                </View>
                <View style={styles.bufferView}>
                    <Image source={require('../../images/Tabs/Discover/MusicPlayer/buffer.png')}/>
                </View>
                <View>
                    <Image source={require('../../images/Tabs/Discover/MusicPlayer/remainingPart.png')}
                    style={styles.playedPartImage}
                    />
                </View>
            </View>
            <View style={styles.songDurationView}>
                <Text style={styles.songDurationText}>1:10</Text>
                <Text style={styles.songDurationText}>3:15</Text>
            </View>

            <View style={styles.controls}>
                <View style={styles.controlRepeatView}>
                    <Pressable onPress={() => Alert.alert('repeat')}>
                        <Image source={require('../../images/Tabs/Discover/MusicPlayer/repeat.png')}/>
                    </Pressable>
                </View>
                <View>
                    <Pressable onPress={() => Alert.alert('previous')}>
                        <Image source={require('../../images/Tabs/Discover/MusicPlayer/previous.png')}/>
                    </Pressable>
                </View>
                <View>
                    <Pressable onPress={() => Alert.alert('pause')}>
                        <Image source={require('../../images/Tabs/Discover/MusicPlayer/pause.png')}/>
                    </Pressable>
                </View>
                <View>
                    <Pressable onPress={() => Alert.alert('next')}>
                        <Image source={require('../../images/Tabs/Discover/MusicPlayer/next.png')}/>
                    </Pressable>
                </View>
                <View>
                    <Pressable onPress={() => Alert.alert('shuffle')}>
                        <Image source={require('../../images/Tabs/Discover/MusicPlayer/shuffle.png')}/>
                    </Pressable>
                </View>
            </View>

            <View style={styles.options}>
                <View>
                    <Pressable onPress={() => Alert.alert('add song to favorite')}>
                        <Image source={require('../../images/Tabs/Discover/MusicPlayer/favorite.png')}/>
                    </Pressable>
                </View>
                <View>
                    <Pressable onPress={() => Alert.alert('remove song')}>
                        <Image source={require('../../images/Tabs/Discover/MusicPlayer/remove.png')}/>
                    </Pressable>
                </View>
                <View>
                    <Pressable onPress={() => Alert.alert('share song')}>
                        <Image source={require('../../images/Tabs/Discover/MusicPlayer/share.png')}/>
                    </Pressable>
                </View>
                <View>
                    <Pressable onPress={() => Alert.alert('more')}>
                        <Image source={require('../../images/Tabs/Discover/MusicPlayer/more.png')}/>
                    </Pressable>
                </View>
            </View>
            <View>
                <Text></Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: 395,
        alignContent: 'center',
        marginTop: 30,
    },
    header: {
        marginTop: 23,
        marginLeft: 35
    },
    headerTextA: {
        fontWeight: '700',
        fontSize: 24
    },
    headerTextB: {
        fontWeight: '400',
        fontSize: 23,
        lineHeight: 27
    },
    albumImageView: {
        alignItems: 'center',
        marginTop: 20
    },
    albumImage: {
        width: 270,
        height: 310
    },
    buffer: {
        marginTop: 60,
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    bufferView: {
        marginTop: -5
    },
    playedPartImage: {
        width: 187
    },
    songDurationView: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 50
    },
    songDurationText: {
        fontSize: 16,
        fontWeight: '500',
        color: 'rgb(123, 122, 122)'
    },
    controls: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        marginTop: 10
    },
    controlRepeatView: {
        marginTop: 10
    },
    options: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        marginTop: 50
    }
})

export default MusicPlayer;