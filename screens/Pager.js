import React from 'react';
import { StyleSheet, View, Text, Button, Pressable, Alert, Image } from 'react-native';
import PagerView from 'react-native-pager-view';

function MyPager  ({navigation}) {
  return (
    <View style={{ flex: 1 }}>
      <PagerView style={styles.viewPager} initialPage={0}>
        
        <View style={styles.page1} key="1">
        
        <View style={styles.upperBody1}>
          <Image source={require('../images/OnBoarding/Slide1_OnBoarding.png')}
          style={styles.image1}
          />
        </View>

        <View style={styles.lowerBody1}>
          <View style={styles.headerView1} >
              <Text style={styles.headerA1}>
                Watch
              <Text style={styles.headerB1}> Preachings</Text>
              </Text>
          </View>

          <View style={styles.contentView1}> 
            <Text style={styles.baseText1}>
              {'    Watch'}
              <Text style={styles.innerText1}> preachings of different pastors with different topics anytime and anywhere.</Text>
            </Text>
          </View>

          <View style={styles.sliderA1}>
            <Image source={require('../images/OnBoarding/SliderA1_OnBoarding.png')}
            style={{width: 34, height: 6, borderRadius: 5}}
            />
          </View>

          <View style={styles.sliderB1}>
            <Image source={require('../images/OnBoarding/SliderB1_OnBoarding.png')}
              style={{width: 34, height: 6, borderRadius: 5}}
              />
          </View>
          
          <View style={styles.sliderC1}>
            <Image source={require('../images/OnBoarding/SliderC1_OnBoarding.png')}
              style={{width: 34, height: 6, borderRadius: 5}}
              />
          </View>

        </View>

        </View>
        
        <View style={styles.page2} key="2">

          <View style={styles.upperBody2}>
            <Image source={require('../images/OnBoarding/Slide2_OnBoarding.png')}
            style={styles.image2}
            />
          </View>

          <View style={styles.lowerBody2}>
          <View style={styles.headerView2} >
              <Text style={styles.headerA2}>
                Listen
              <Text style={styles.headerB2}> to Worship Songs</Text>
              </Text>
          </View>

          <View style={styles.contentView2}> 
            <Text style={styles.baseText2}>
              {'    Listen'}
              <Text style={styles.innerText2}> and
                <Text style={styles.baseText2}> sing along
                  <Text style={styles.innerText2}> to thousands of Worship Songs from your favorite composers</Text>
                </Text>
              </Text>
            </Text>
          </View>

          <View style={styles.sliderA2}>
            <Image source={require('../images/OnBoarding/SliderA2_OnBoarding.png')}
            style={{width: 34, height: 6, borderRadius: 5}}
            />
          </View>

          <View style={styles.sliderB2}>
            <Image source={require('../images/OnBoarding/SliderB2_OnBoarding.png')}
              style={{width: 34, height: 6, borderRadius: 5}}
              />
          </View>
          
          <View style={styles.sliderC2}>
            <Image source={require('../images/OnBoarding/SliderC2_OnBoarding.png')}
              style={{width: 34, height: 6, borderRadius: 5}}
              />
          </View>

        </View>
        </View>
        
       
        <View style={styles.page3} key="3">

        <View style={styles.upperBody3}>
          <Image source={require('../images/OnBoarding/Slide3_OnBoarding.png')}
          style={{width: 220, height: 240}}
          />
        </View>
        
        <View style={styles.lowerBody3}>
          <View style={styles.headerView3} >
            <Text style={styles.headerA3}>
              Write  your own 
            <Text style={styles.headerB3}> Journal</Text>
            </Text>
          </View>
          
          <View style={styles.contentView3}> 
            <Text style={styles.baseText3}>
              {'    Write'}
              <Text style={styles.innerText3}> your notes, devotion and lessons you have learned from the bible.</Text>
            </Text>
          </View>

          <View style={styles.sliderA3}>
            <Image source={require('../images/OnBoarding/SliderA3_OnBoarding.png')}
            style={{width: 34, height: 6, borderRadius: 5}}
            />
          </View>

          <View style={styles.sliderB3}>
            <Image source={require('../images/OnBoarding/SliderA3_OnBoarding.png')}
              style={{width: 34, height: 6, borderRadius: 5}}
              />
          </View>
          
          <View style={styles.sliderC3}>
            <Image source={require('../images/OnBoarding/SliderC3_OnBoarding.png')}
              style={{width: 34, height: 6, borderRadius: 5}}y
              />
          </View>
          
          <View style={styles.buttonView3}>
            <Pressable style={styles.button3} onPress={() => navigation.navigate('MyTabs')}>
              <Text style={styles.buttonText3}>FINISH</Text>
            </Pressable>
          </View>
        </View>
        </View>
        
      </PagerView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewPager: {
    flex: 1,
    
  },
  //Page1
  page1: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: 'rgb(0, 0, 0)'
  },
  upperBody1:{
    flex: 0.5,
    justifyContent: 'center',
  },
  lowerBody1: {
    alignItems: 'center',
    backgroundColor: 'rgb(255, 255, 255)',
    flex: 0.5,
    borderTopLeftRadius: 25,
    width: 395
  },
  image1: {
    width: 300,
    height: 300,
    marginTop: 50
  },
  headerView1: {
    top: 30,
    right: 50,
  },
  headerA1: {
    fontSize: 30,
    color: 'rgb(93, 93, 93)',
    fontWeight: 'bold'
  },
  headerB1: {
    color: 'black',
    fontWeight: 'bold'
  },
  contentView1: { 
    top: 50,
    flexDirection: 'row',
    padding: 20,
  },
  baseText1: {
    fontWeight: 'normal',
    fontSize: 23,
    color: 'black'
  },
  innerText1: {
    color: 'rgb(93, 93, 93)'
  },
  sliderA1: {
    top: 155,
    right: 150
  },
  sliderB1: {
    top: 149,
    right: 115
  },
  sliderC1: {
    top: 143,
    right: 79
  },
  image1: {
    width: 300,
    height: 300,
    marginTop: 50
  },

  //Page2
  page2: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: 'rgb(255, 255, 255)'
  },
  upperBody2:{
    flex: 0.5,
    justifyContent: 'center',
  },
  lowerBody2: {
    alignItems: 'center',
    backgroundColor: 'rgb(0, 0, 0)',
    flex: 0.5,
    borderTopLeftRadius: 25,
    width: 395
  },
  headerView2: {
    top: 30,
    right: 10,
  },
  headerA2: {
    fontSize: 30,
    color: 'rgb(93, 93, 93)',
    fontWeight: 'bold'
  },
  headerB2: {
    color: 'black',
    color: 'rgb(255, 255, 255)',
    fontWeight: 'bold',
  },
  contentView2: { 
    top: 50,
    flexDirection: 'row',
    padding: 20,
  },
  baseText2: {
    fontWeight: 'normal',
    fontSize: 23,
    color: 'rgb(255, 255, 255)'
  },
  innerText2: {
    color: 'rgb(93, 93, 93)'
  },
  sliderA2: {
    top: 155,
    right: 150
  },
  sliderB2: {
    top: 149,
    right: 115
  },
  sliderC2: {
    top: 143,
    right: 79
  },


  //Page3
  page3: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: 'rgb(0, 0, 0)'
  },
  upperBody3:{
    flex: 0.5,
    justifyContent: 'center',
  },
  lowerBody3: {
    alignItems: 'center',
    backgroundColor: 'rgb(255, 255, 255)',
    flex: 0.5,
    borderTopLeftRadius: 25,
    width: 395
  },
  buttonView3: {
    top: 120,
    left: 120
  },
  button3: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    borderRadius: 13
  },
  buttonText3: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    color: 'white'
  },
  headerView3: {
    top: 30,
    right: 20,
  },
  headerA3: {
    fontSize: 30,
    color: 'rgb(93, 93, 93)',
    fontWeight: 'bold'
  },
  headerB3: {
    color: 'black',
    fontWeight: 'bold'
  },
  contentView3: { 
    top: 50,
    flexDirection: 'row',
    padding: 20,
  },
  baseText3: {
    fontWeight: 'normal',
    fontSize: 23,
    color: 'black'
  },
  innerText3: {
    color: 'rgb(93, 93, 93)'
  },
  sliderA3: {
    top: 155,
    right: 150
  },
  sliderB3: {
    top: 149,
    right: 115
  },
  sliderC3: {
    top: 143,
    right: 79
  }
});

export default MyPager;