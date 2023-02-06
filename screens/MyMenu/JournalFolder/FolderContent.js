import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Pressable, Alert} from 'react-native';

const FolderContent = ({navigation}) => 
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
            <ScrollView>
            <Pressable onPress={() => navigation.navigate('FolderContentView')}>
                <View style={styles.scrollableContent}>
                  <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Text style={{fontWeight: '600', fontSize: 14}}>18th July, '22</Text>
                    <Text style={{fontWeight: '600', fontSize: 14}}>Friday</Text>
                  </View>
                  <View style={{alignItems: 'center', marginTop: 15}}>
                    <Image source={require('../../../images/Tabs/Menu/MyJournal/contentLine.png')}/>
                  </View>
                  <Text style={{fontSize: 20, fontWeight: '800'}}>Type Something</Text>
                  <View style={{alignItems: 'center'}}>
                    <Image source={require('../../../images/Tabs/Menu/MyJournal/board.png')}/>
                  </View>
                  <Text style={styles.contentText}>Lorem ipsum dolor</Text>
                  <Text style={styles.contentText}>sit amet,</Text>
                  <Text style={styles.contentText}>consectetur</Text>
                  <Text style={styles.contentText}>adipiscing elit.</Text>
                  <Text></Text>
                  <Text style={styles.contentText}>Lorem ipsum dolor sit amet,</Text>
                  <Text style={styles.contentText}>consectetur adipiscing elit. Morbi et</Text>
                  <Text style={styles.contentText}>dapibus leo, sit amet commodo magna.</Text>
                </View>
                </Pressable>
                <Pressable onPress={() => Alert.alert('Content 2')}>
                <View style={styles.scrollableContent}>
                  <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Text style={{fontWeight: '600', fontSize: 14}}>17th July, '22</Text>
                    <Text style={{fontWeight: '600', fontSize: 14}}>Thursday</Text>
                  </View>
                  <View style={{alignItems: 'center', marginTop: 15}}>
                    <Image source={require('../../../images/Tabs/Menu/MyJournal/contentLine.png')}/>
                  </View>
                  <Text style={{fontSize: 20, fontWeight: '800'}}>Type Something 2</Text>
                  <View style={{alignItems: 'center'}}>
                    <Image source={require('../../../images/Tabs/Menu/MyJournal/board.png')}/>
                  </View>
                  <Text style={styles.contentText}>Lorem ipsum dolor</Text>
                  <Text style={styles.contentText}>sit amet,</Text>
                  <Text style={styles.contentText}>consectetur</Text>
                  <Text style={styles.contentText}>adipiscing elit.</Text>
                  <Text></Text>
                  <Text style={styles.contentText}>Lorem ipsum dolor sit amet,</Text>
                  <Text style={styles.contentText}>consectetur adipiscing elit. Morbi et</Text>
                  <Text style={styles.contentText}>dapibus leo, sit amet commodo magna.</Text>
                </View>
                </Pressable>
            </ScrollView>
            <View style={{alignItems: 'flex-end', bottom: 15, right: 20, position: 'absolute'}}>
              <Image source={require('../../../images/Tabs/Menu/MyJournal/addButton.png')}
              />
            </View>
          </View>
        </View>
      </View>
    );
};

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
    justifyContent: 'center'
  },
  bodyPart: {
    flex: 90,
  },
  scrollableContent: {
    marginTop: 18,
    marginBottom: 32,
    backgroundColor: 'white',
    width: 395,
    padding: 20,
    borderRadius: 13
  },
  contentText: {
    fontWeight: '600',
    fontSize: 16,
    color: 'rgb(106, 106, 106)',
    lineHeight: 18.75
  }
});

export default FolderContent