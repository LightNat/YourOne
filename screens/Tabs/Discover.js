import { ScrollView, Text, View, StyleSheet, Image, Pressable, Alert } from 'react-native';

function Discover({navigation}) {
    return (
      
      <View style={styles.page}>
        <View style={styles.myHeader}>
          <Text style={styles.headertext}>Music</Text>
          <Image source={require('../../images/Tabs/Discover/discoverUnderline.png')}/>
        </View>
        <View style={styles.scrollPart}>
          <ScrollView>

            <View style={styles.content}>
              <Pressable onPress={() => Alert.alert('Matt Redman')}>
                <View style={styles.contentImage}>
                  <Image source={require('../../images/Tabs/Discover/mattRedman.png')}/>
                  <View style={styles.contentTextView}>
                    <Text style={styles.contentText}>Matt Redman</Text>
                  </View>
                </View>
              </Pressable>
              <Pressable onPress={() => Alert.alert('Scoot Stapp')}>
                <View style={styles.contentImage}>
                  <Image source={require('../../images/Tabs/Discover/scootStapp.png')}/>
                  <View style={styles.contentTextView}>
                    <Text style={styles.contentText}>Scoot Stapp</Text>
                  </View>
                </View>
              </Pressable>
            </View>

            <View style={styles.content}>
              <Pressable onPress={() => navigation.navigate('SongList')}>
                <View style={styles.contentImageA}>
                  <Image source={require('../../images/Tabs/Discover/annieGarratt.png')}/>
                  <View style={styles.contentTextView}>
                    <Text style={styles.contentText}>Annie Garratt</Text>
                  </View>
                </View>
              </Pressable>
              <Pressable onPress={() => Alert.alert('Chris Tomlin')}>
                <View style={styles.contentImageA}>
                  <Image source={require('../../images/Tabs/Discover/chris.png')}/>
                  <View style={styles.contentTextView}>
                    <Text style={styles.contentText}>Chris Tomlin</Text>
                  </View>
                </View>
              </Pressable>
            </View>

            <View style={styles.content}>
              <Pressable onPress={() => Alert.alert('Lauren Daigle')}>
                <View style={styles.contentImageB}>
                  <Image source={require('../../images/Tabs/Discover/laurenDaigle.png')}/>
                  <View style={styles.contentTextView}>
                      <Text style={styles.contentText}>Lauren Daigle</Text>
                  </View>
                </View>
              </Pressable>
              <Pressable onPress={() => Alert.alert('Mark Hall')}>
                <View style={styles.contentImageB}>
                  <Image source={require('../../images/Tabs/Discover/markHall.png')}/>
                  <View style={styles.contentTextView}>
                      <Text style={styles.contentText}>   Mark Hall   </Text>
                  </View>
                </View>
              </Pressable>
            </View>
            
            <View style={styles.content}>
              <Pressable onPress={() => Alert.alert('Lorem Ipsum')}>
                <View style={styles.contentImageC}>
                  <Image source={require('../../images/Tabs/Discover/mattRedman.png')}/>
                  <View style={styles.contentTextView}>
                      <Text style={styles.contentText}>Lorem Ipsum</Text>
                  </View>
                </View>
              </Pressable>
              <Pressable onPress={() => Alert.alert('Lorem Ipsum')}>
                <View style={styles.contentImageC}>
                  <Image source={require('../../images/Tabs/Discover/scootStapp.png')}/>
                  <View style={styles.contentTextView}>
                      <Text style={styles.contentText}>Lorem Ipsum</Text>
                  </View>
                </View>
              </Pressable>
            </View>
            
          </ScrollView>
        </View>
        
      </View>
      
    );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: 395,
    alignItems: 'center',
    marginTop: 30
  },
  myHeader: {
    marginRight: 200
  },
  headertext: {
    fontSize: 28,
    fontWeight: '700'
  },
  scrollPart: {
    marginTop: 10,
    width: 360,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  content: {
    flexDirection: 'row',
  },
  contentImage: {
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 10
  },
  contentImageA: {
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 10,
    bottom: 30
  },
  contentImageB: {
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 10,
    bottom: 60
  },
  contentImageC: {
    justifyContent: 'center', 
    alignItems: 'center',
    padding: 10,
    bottom: 90
  },
  contentTextView: {
    bottom: 45,
    padding: 4,
    marginRight: 30,
    backgroundColor: 'rgb(222, 218, 216)',
    borderRadius: 10
  },
  contentText: {
    fontWeight: '600',
    fontSize: 16
  }
  
})

export default Discover