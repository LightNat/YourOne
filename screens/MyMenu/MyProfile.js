import { View, Text, StyleSheet, Image, ScrollView, Pressable, Alert } from "react-native";

function MyProfile()
{
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
            
            
            
            <View style={styles.upperPart}>
                  
            </View>

            <View style={styles.lowerPart}>
                
                <View style={styles.profileImage}>
                    <Image source={require('../../images/Tabs/Menu/MyProfile/profile.png')}/>
                </View>
                
                <View style={styles.editButtonView}>
                    <Text style={styles.profileName}>John Russel David</Text>
                    <Pressable style={styles.editButton} onPress={() => Alert.alert('Edit Profile')}>
                        <Text style={styles.editButtonText}>Edit Profile</Text>
                    </Pressable>
                </View>

                <View style={styles.profileDetailsView}>
                    <Text style={styles.profileDetails}>@jr_david</Text>
                    <Text style={styles.profileDetails}>Philippines</Text>
                    <Text style={styles.profileDetails}>Member since 2022</Text>
                </View>
                
                <Text style={styles.profileText}>“It is of the Lord’s mercies that we are not consumed, because his compassions fail not. They are new every morning, great is thy faithfulness. ”</Text>
                <View style={styles.profileTextFooterView}>
                    <Text style={styles.profileTextFooter}>Lamentations 3: 22-23 KJV</Text>
                </View>

                <View style={styles.activityLabelView}>
                    <Text style={styles.activityLabel}>Activity</Text>
                </View>
                <ScrollView>
                    <View style={styles.scrollContent}>
                        

                        <View style={styles.scrollableContent}>
                            <View style={styles.scrollContentHeader}>
                                <Image source={require('../../images/Tabs/Menu/MyProfile/profile.png')}
                                style={styles.scrollableContentImage}
                                />
                                <View>
                                    <Text style={styles.scrollContentHeaderTextA}>HIGHLIGHTED</Text>
                                    <Text style={styles.scrollContentHeaderTextB}>May 23, 2022</Text>
                                </View>
                                
                                

                            </View>
                            
                            <View style={styles.scrollableContentTextView}>
                                <Text style={styles.scrollableContentText}>Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.</Text>
                            </View>

                            <View style={styles.scrollableContentFooterTextView}>
                                <Text style={styles.scrollableContentFooterText}>Philippians 4:6–7 (NIV)</Text>
                            </View>

                        </View>
                        
                        <View style={styles.scrollableContent}>
                            <View style={styles.scrollContentHeader}>
                                <Image source={require('../../images/Tabs/Menu/MyProfile/profile.png')}
                                style={styles.scrollableContentImage}
                                />
                                <View>
                                    <Text style={styles.scrollContentHeaderTextA}>HIGHLIGHTED</Text>
                                    <Text style={styles.scrollContentHeaderTextB}>May 23, 2022</Text>
                                </View>
                                
                                

                            </View>
                            
                            <View style={styles.scrollableContentTextView}>
                                <Text style={styles.scrollableContentText}>May the God of hope fill you with all joy and peace as you trust in Him, so that you may overflow with hope by the power of the Holy Spirit.</Text>
                            </View>

                            <View style={styles.scrollableContentFooterTextView}>
                                <Text style={styles.scrollableContentFooterText}>Romans 15:13 (NIV)</Text>
                            </View>

                        </View>

                        <View style={styles.scrollableContent}>
                            <View style={styles.scrollContentHeader}>
                                <Image source={require('../../images/Tabs/Menu/MyProfile/profile.png')}
                                style={styles.scrollableContentImage}
                                />
                                <View>
                                    <Text style={styles.scrollContentHeaderTextA}>HIGHLIGHTED</Text>
                                    <Text style={styles.scrollContentHeaderTextB}>May 23, 2022</Text>
                                </View>
                                
                                

                            </View>
                            
                            <View style={styles.scrollableContentTextView}>
                                <Text style={styles.scrollableContentText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                            </View>

                            <View style={styles.scrollableContentFooterTextView}>
                                <Text style={styles.scrollableContentFooterText}>Lorem Ipsum</Text>
                            </View>

                        </View>

                        <View>
                            {/* to create a space outside*/}
                            <Text></Text>
                        </View>

                    </View>
                </ScrollView>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    upperPart: {
        flex: 14,
        backgroundColor: 'rgb(93, 93, 93)',
        width: 395
    },
    lowerPart: {
        flex: 86,
        backgroundColor: 'rgb(255, 255, 255)',
        width: 395
    },
    profileImage: {
        marginTop: -40,
        left: 40
    },
    editButtonView: {
        justifyContent: 'space-between',
        alignItems: 'baseline',
        flexDirection: 'row',
    },
    editButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 5,
        width: 88,
        height: 31,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'rgb(217, 217, 217)',
        borderRadius: 13,
        top: -10,
        right: 30
    },
    editButtonText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 13,
    },
    profileName: {
        fontWeight: 'bold',
        fontSize: 18,
        left: 25,
        
    },
    profileDetailsView: {
        marginTop: -150
    },
    profileDetails: {
        fontSize: 13,
        lineHeight: 15,
        left: 25,
    },
    profileText: {
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 70,
        fontStyle: 'italic',
        fontSize: 12
    },
    profileTextFooterView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileTextFooter: {
        fontWeight: 'bold',
        fontSize: 12
    },
    scrollContent: {
        backgroundColor: 'rgb(235, 233, 233)',
        paddingTop: 5
    },
    activityLabelView: {
        backgroundColor: 'rgb(235, 233, 233)',
        borderTopLeftRadius: 13,
        borderTopRightRadius: 13
    },
    activityLabel: {
        fontSize: 25,
        fontWeight: 'bold',
        left: 20,
    },
    scrollableContent: {
        left: 20,
        backgroundColor: 'white',
        width: 350,
        borderRadius: 13,
        paddingBottom: 10,
        marginTop: 10,
        marginBottom: 10
    },
    scrollContentHeader: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        top: 6,
        left: 6,
        flexDirection: 'row',
    },
    scrollableContentImage: {
        width: 34,
        height: 33
    },
    scrollContentHeaderTextA: {
        lineHeight: 17,
        marginTop: 5,
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 6
    },
    scrollContentHeaderTextB: {
        lineHeight: 14,
        fontSize: 12,
        marginLeft: 6
    },
    scrollableContentTextView: {
        marginTop: 15,
        paddingHorizontal: 10
    },
    scrollableContentText: {
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 16
    },
    scrollableContentFooterTextView: {
        marginLeft: 24,
        marginTop: 24
    },
    scrollableContentFooterText: {
        fontWeight: 'bold',
        fontSize: 14
    }
})

export default MyProfile