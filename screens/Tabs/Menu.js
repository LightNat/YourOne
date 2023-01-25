import { Text, View, StyleSheet, Image, Pressable, Alert} from 'react-native';

function HamburgerMenu({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={styles.page}>
            
            <View style={styles.menuLabelView}>
                <Image source={require('../../images/Tabs/Menu/menu_logo.png')}
                style={styles.menuHeaderImage}
                />
                <Text style={styles.menuLabelText}>  YourOne</Text>
            </View>
            
            <View style={styles.menuUnderlineView}>
                <Image source={require('../../images/Tabs/Menu/menu_underline.png')}
                style={styles.menuUnderline}
                />
            </View>
            
            <View style={styles.contentView}>
                
                <Pressable style={styles.button} onPress={() => navigation.navigate('MyProfile')}>
                        <Image source={require('../../images//Tabs/Menu/profile.png')}
                        style={styles.imageProfile}
                        />
                        <Text style={styles.text}>John Russel David</Text>
                </Pressable>

                <Pressable style={styles.button} onPress={() => Alert.alert("Notification")}>
                    <Image source={require('../../images/Tabs/Menu/notification.png')}
                    style={styles.image}
                    />
                    <Text style={styles.text}>Notification</Text>
                </Pressable>

                <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}>
                    <Image source={require('../../images/Tabs/Menu/notebook.png')}
                    style={styles.image}
                    />
                    <Text style={styles.text}>Word of the day!</Text>
                </Pressable>

                <Pressable style={styles.button} onPress={() => navigation.navigate('Discover')}>
                    <Image source={require('../../images/Tabs/Menu/music.png')}
                    style={styles.image}
                    />
                    <Text style={styles.text}>Music</Text>
                </Pressable>

                <Pressable style={styles.button} onPress={() => Alert.alert("Videos")}>
                    <Image source={require('../../images/Tabs/Menu/videos.png')}
                    style={styles.image}
                    />
                    <Text style={styles.text}>Videos</Text>
                </Pressable>

                <Pressable style={styles.button} onPress={() => Alert.alert("Highlights")}>
                    <Image source={require('../../images/Tabs/Menu/highlights.png')}
                    style={styles.image}/>
                    <Text style={styles.text}>Highlights</Text>
                </Pressable>

                <Pressable style={styles.button} onPress={() => Alert.alert("Bookmarks")}>
                    <Image source={require('../../images/Tabs/Menu/bookmarks.png')}
                    style={styles.image}/>
                    <Text style={styles.text}>Bookmarks</Text>
                </Pressable>

            </View>

            <View style={styles.dividerView}>
                <Image source={require('../../images/Tabs/Menu/divider.png')}
                style={styles.divider}
                />
            </View>
            
            <View style={styles.contentView2}>
                
                <Pressable style={styles.button} onPress={() => Alert.alert("Share")}>
                    <Image source={require('../../images/Tabs/Menu/share.png')}
                    style={styles.image}
                    />
                    <Text style={styles.text}>Share YourOne</Text>
                </Pressable>

                <Pressable style={styles.button} onPress={() => Alert.alert("Settings")}>
                    <Image source={require('../../images/Tabs/Menu/settings.png')}
                    style={styles.image}
                    />
                    <Text style={styles.text}>Settings</Text>
                </Pressable>

                <Pressable style={styles.button} onPress={() => Alert.alert("Language")}>
                    <Image source={require('../../images/Tabs/Menu/language.png')}
                    style={styles.image}
                    />
                    <Text style={styles.text}>Language</Text>
                </Pressable>

                <Pressable style={styles.button} onPress={() => Alert.alert("Help")}>
                    <Image source={require('../../images/Tabs/Menu/help.png')}
                    style={styles.image}
                    />
                    <Text style={styles.text}>Help</Text>
                </Pressable>

                <Pressable style={styles.button} onPress={() => Alert.alert("About")}>
                    <Image source={require('../../images/Tabs/Menu/about.png')}
                    style={styles.image}
                    />
                    <Text style={styles.text}>About</Text>
                </Pressable>

            </View>
                        
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: 395,
        marginTop: 30,
    },
    menuLabelView: {
        top: 16,
        left: 40,
        flexDirection: 'row'
    },
    menuLabelText: {
        fontSize: 35,
        fontWeight: 'bold'
    },
    menuHeaderImage: {
        width: 20,
        height: 40 
    },
    menuUnderlineView: {
        alignItems: 'center'
    },
    menuUnderline: {
        top: 25,
        width: 315,
    },
    contentView: {
        marginLeft: 30,
        marginTop: 40
    },
    button: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        paddingBottom: 20
    },
    text: {
        fontWeight: 'bold',
        marginLeft: 30,
        fontSize: 17
    },
    imageProfile:{
        width: 39,
        height: 38
    },
    image:{
        width: 25,
        height: 26,
        marginLeft: 6
    },
    dividerView: {
        alignItems: 'center',
        top: -5
    },
    divider: {
        width: 315
    },
    contentView2: {
        marginLeft: 30,
        marginTop: 20
    },
})

export default HamburgerMenu