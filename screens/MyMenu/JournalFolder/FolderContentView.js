import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, Alert} from 'react-native';

const FolderContentView = () => 
{
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.page}>
                <View style={styles.headerPart}>
                    <View style={{marginRight: 100}}>
                        <Image source={require('../../../images/Tabs/Menu/MyJournal/backArrow.png')}/>
                    </View>
                <View style={{marginRight: 120}}>
                    <View>
                        <Text style={{fontWeight: '600', fontSize: 24}}>Bible Class</Text>
                    </View>
                    <View>
                        <Image source={require('../../../images/Tabs/Menu/MyJournal/lineHeader.png')}/>
                    </View>
                </View>
            </View>
            <View style={styles.bodyPart}>
                <View style={styles.scrollableContent}>
                  <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Text style={{fontWeight: '600', fontSize: 14}}>18th July, '22</Text>
                    <Text style={{fontWeight: '600', fontSize: 14}}>Friday</Text>
                  </View>
                  <View style={{alignItems: 'center', marginTop: 15}}>
                    <Image source={require('../../../images/Tabs/Menu/MyJournal/contentLine.png')}/>
                  </View>
                  <View style={{alignItems: 'center'}}>
                    <Image source={require('../../../images/Tabs/Menu/MyJournal/board.png')}/>
                  </View>
                  <View style={{marginTop: 30}}>
                    <Text style={{fontSize: 20, fontWeight: '800'}}>Type Something</Text>
                  </View>
                  <Text></Text>
                  <Text style={styles.contentText}>Lorem ipsum dolor</Text>
                  <Text style={styles.contentText}>sit amet,</Text>
                  <Text style={styles.contentText}>consectetur</Text>
                  <Text style={styles.contentText}>adipiscing elit.</Text>
                  <Text></Text>
                  <Text style={styles.contentText}>Lorem ipsum dolor sit amet,</Text>
                  <Text style={styles.contentText}>consectetur adipiscing elit. Morbi et</Text>
                  <Text style={styles.contentText}>dapibus leo, sit amet commodo magna.</Text>
                  <Text></Text>
                  <Text style={styles.contentText}>Curabitur fermentum lobortis ante eu</Text>
                  <Text style={styles.contentText}>Aliquet. Suspendisse accumsan</Text>
                  <Text style={styles.contentText}>condimentum orci sit amet suscipit.</Text>

                  <View style={{alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', marginTop: 60}}>
                    <View>
                        <Pressable onPress={() => Alert.alert('delete')}>
                            <Image source={require('../../../images/Tabs/Menu/MyJournal/delete.png')}/>
                        </Pressable> 
                    </View>
                    <View style={{alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row'}}>
                        <View style={styles.itemImages}>
                            <Pressable onPress={() => Alert.alert('edit')}>
                                <Image source={require('../../../images/Tabs/Menu/MyJournal/edit.png')}/>
                            </Pressable>
                        </View>
                        <View style={styles.itemImages}>
                            <Pressable onPress={() => Alert.alert('copy')}>
                                <Image source={require('../../../images/Tabs/Menu/MyJournal/copy.png')}/>
                            </Pressable>
                        </View>
                        <View style={styles.itemImages}>
                            <Pressable onPress={() => Alert.alert('highlight')}>
                                <Image source={require('../../../images/Tabs/Menu/MyJournal/highlight.png')}/>
                            </Pressable>
                        </View>
                        <View style={styles.itemImages}>
                            <Pressable onPress={() => Alert.alert('add image')}>
                                <Image source={require('../../../images/Tabs/Menu/MyJournal/image.png')}/>
                            </Pressable>
                        </View>
                    </View>
                </View>
                
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
        marginTop: 30,
    },
    headerPart: {
        flex: 11,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      bodyPart: {
        flex: 90,
      },
      scrollableContent: {
        marginTop: 18,
        backgroundColor: 'white',
        width: 395,
        padding: 20,
        borderRadius: 13,
        flex: 1
      },
      contentText: {
        fontWeight: '600',
        fontSize: 16,
        color: 'rgb(106, 106, 106)',
        lineHeight: 18.75
      },
      itemImages: {
        margin: 10
      }
})

export default FolderContentView