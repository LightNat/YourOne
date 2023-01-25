import React from 'react';
import { Text, View, StyleSheet, ScrollView, Image, SafeAreaView, TextInput, Pressable, Alert } from 'react-native';

function Home() {

  //for text input
  const [text, onChangeText] = React.useState(null);

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
        
        <View style={styles.upperPart}>
          
          <View style={styles.header}>
            <Text style={styles.headerText}>YourOne</Text>
            <View style={styles.headerImage}>
              <Image source={require('../../images/Tabs/Home/home_logo.png')}
              style={styles.homeLogo}
              />
            </View>
          </View>

          <View style={styles.inputTypeView}>
            <SafeAreaView>
              <TextInput
                  style={styles.inputType}
                  onChangeText={onChangeText}
                  value={text}
                  placeholder="Search"
                  keyboardType="numeric"
                  backgroundColor="rgb(236, 236, 236)"
                />
            </SafeAreaView>
          </View>

          <ScrollView>
            <View style={styles.scrollPart}>
              
              <View>
                <Image source={require('../../images/Tabs/Home/verse.png')}
                style={styles.verseImage}
                />
              </View>

              <View style={styles.wordOfTheDayView}>
                <Text style={styles.wordOfTheDayText}>Word of the Day!</Text>
                <View style={styles.wordOfTheDayContentView}>
                  <Text style={styles.wordOfTheDayContentText}>“It is of the Lord’s mercies that we are not consumed, because his compassions fail not. They are new every morning, great is thy faithfulness. ”</Text>
                  <Text style={styles.wordOfTheDayContentHeaderText}>Lamentations 3: 22-23 KJV</Text>
                </View>
              </View>

              <View style={styles.preachingsView}>
                <Text style={styles.preachingsText}>Preachings</Text>
                <View style={styles.seeAllPreachings}>
                  <Pressable onPress={() => Alert.alert('In Your Life')}>
                    <Image source={require('../../images/Tabs/Home/preachingsImage.png')}
                    style={styles.preachingsImage}
                    />
                  </Pressable>
                  <View style={styles.preachingsButton}>
                    <Pressable onPress={() => Alert.alert('See all Preachings')}>
                      <Text style={styles.seeAllText}>See all</Text>
                    </Pressable>
                  </View>
                </View>
              </View>

              <View style={styles.slidePreachingView}>
                <ScrollView horizontal={true}>
                  <View style={styles.slidePreachingViewItems}>
                    <Pressable style={styles.slidePreachingViewItems} onPress={() => Alert.alert('When anxiety attacks')}>
                      <Image source={require('../../images/Tabs/Home/whenAnxietyAttacks.png')}
                      style={styles.slidePreachingImage}
                      />
                      <Text style={styles.slidePreachingText}>When anxiety attacks</Text>
                    </Pressable>
                  </View>

                  <View style={styles.slidePreachingViewItems}>
                    <Pressable style={styles.slidePreachingViewItems} onPress={() => Alert.alert('Bars and battle')}>
                      <Image source={require('../../images/Tabs/Home/barsAndBattle.png')}
                      style={styles.slidePreachingImage}
                      />
                      <Text style={styles.slidePreachingText}>Bars and Battle</Text>
                    </Pressable>
                  </View>

                  <View style={styles.slidePreachingViewItems}>
                    <Pressable style={styles.slidePreachingViewItems} onPress={() => Alert.alert('Lorem ipsum')}>
                      <Image source={require('../../images/Tabs/Home/whenAnxietyAttacks.png')}
                      style={styles.slidePreachingImage}
                      />
                      <Text style={styles.slidePreachingText}>Lorem Ipsum</Text>
                    </Pressable>
                  </View>

                </ScrollView>
              </View>

              <View style={styles.preachingDividerView}>
                <Image source={require('../../images/Tabs/Home/preachingDivider.png')}
                style={styles.preachingDividerImage}
                />
              </View>
              
              <View style={styles.musicViewA}>
                <Text style={styles.musicTextA}>Browse Music</Text>
                <ScrollView horizontal={true}>
                  
                  <View>
                    <View style={styles.musicItemContainerA}> 
                      <Pressable onPress={() => Alert.alert('New Wine')}>
                        <View style={styles.musicItemsImageView}>
                          <Image source={require('../../images/Tabs/Home/musicItemA1.png')}
                          style={styles.musicItemsImageA}
                          />
                        </View>
                      </Pressable>
                      <Pressable onPress={() => Alert.alert('No Label')}>
                        <View>
                          <Image source={require('../../images/Tabs/Home/musicItemA2.png')}
                          style={styles.musicItemsImageA}
                          />
                        </View>
                      </Pressable>
                    </View>
                    <View style={styles.musicItemATextView}>
                      <Pressable onPress={() => Alert.alert('New Wine')}>
                        <Text style={styles.musicItemAText}>New Wine</Text>
                      </Pressable>
                    </View>
                  </View>

                  <View>
                    <View style={styles.musicItemContainerBView}>
                      <Text style={styles.recentlyPlayed}>Recently Played</Text>
                      <View style={styles.musicItemContainerB}>
                        <Pressable onPress={() => Alert.alert('The blessing')}>
                          <View>
                            <Image source={require('../../images/Tabs/Home/theBlessing.png')}
                            style={styles.musicItemsImageB}
                            />
                            <Text style={styles.musicItemContainerBTextView}>The Blessing</Text>
                          </View>
                        </Pressable>
                        <Pressable onPress={() => Alert.alert('All for love')}>
                          <View>
                            <Image source={require('../../images/Tabs/Home/allForLove.png')}
                            style={styles.musicItemsImageB}
                            />
                            <Text style={styles.musicItemContainerBTextView}>All For Love</Text>
                          </View>
                        </Pressable>
                        <Pressable onPress={() => Alert.alert('Dessert song')}>
                          <View>
                            <Image source={require('../../images/Tabs/Home/dessertSong.png')}
                            style={styles.musicItemsImageB}
                            />
                            <Text style={styles.musicItemContainerBTextView}>Desert Song</Text>
                          </View>
                        </Pressable>
                      </View>
                    </View>
                  </View>

                  <View>
                    <View style={styles.musicItemContainerCView}>
                      <Text style={styles.recommended}>Recommended</Text>
                      <View style={styles.musicItemContainerC}>
                        <Pressable onPress={() => Alert.alert('Chris Tomlin')}>
                          <View>
                            <Image source={require('../../images/Tabs/Home/chrisTomlin.png')}
                            style={styles.musicItemsImageC}
                            />
                            <Text style={styles.musicItemContainerCTextView}>Chris Tomlin</Text>
                          </View>
                        </Pressable>
                        <Pressable onPress={() => Alert.alert('Chris Tomlin')}>
                          <View>
                            <Image source={require('../../images/Tabs/Home/planetShakers.png')}
                            style={styles.musicItemsImageC}
                            />
                            <Text style={styles.musicItemContainerCTextView}>Planetshakers</Text>
                          </View>
                        </Pressable>
                        <Pressable onPress={() => Alert.alert('Hillsong Worship')}>
                          <View>
                            <Image source={require('../../images/Tabs/Home/hillsongWorship.png')}
                            style={styles.musicItemsImageC}
                            />
                            <Text style={styles.musicItemContainerCTextView}>Hillsong Worship</Text>
                          </View>
                        </Pressable>
                        <Pressable onPress={() => Alert.alert('Don Moen')}>
                          <View>
                            <Image source={require('../../images/Tabs/Home/donMoen.png')}
                            style={styles.musicItemsImageC}
                            />
                            <Text style={styles.musicItemContainerCTextView}>Don Moen</Text>
                          </View>
                        </Pressable>
                      </View>
                    </View>
                  </View>

                </ScrollView>
              </View>

              <View style={styles.booksView}>
                <Text style={styles.bookLabel}>Books</Text>
                <View style={styles.bookUpper}>
                  <View>
                    <Image source={require('../../images/Tabs/Home/purposeDriven.png')}
                    style={styles.purposeDriven}
                    />
                  </View>
                  <View style={styles.authorView}>
                    <Text style={styles.authorLabel}>Author</Text>
                    <View>
                      <Image source={require('../../images/Tabs/Home/bookAuthor.png')}
                      style={styles.bookAuthor}
                      />
                    </View>
                  </View>
                  <View>
                    <View style={styles.authorDetailsView}>
                      <Text style={styles.authorName}>Rick Warren</Text>
                      <Text style={styles.authorPlaceA}>Saddleback</Text>
                      <Text style={styles.authorPlaceB}>Church</Text>
                    </View>
                  </View>
                  
                </View>
              </View>

              <View style={styles.seeAllBooksView}>
                <Pressable onPress={() => Alert.alert('See all books')}>
                  <Text style={styles.seeAllBooks}>See all</Text>
                </Pressable>
              </View>

              <View style={styles.bookView}>
                <View>
                  <Pressable onPress={() => Alert.alert('Book1')}>
                    <Image source={require('../../images/Tabs/Home/book1.png')}
                    style={styles.bookImage}
                    />
                  </Pressable>
                </View>
                <View>
                  <Pressable onPress={() => Alert.alert('Book2')}>
                    <Image source={require('../../images/Tabs/Home/book2.png')}
                    style={styles.bookImage}
                    />
                  </Pressable>
                </View>
                <View>
                  <Pressable onPress={() => Alert.alert('Book3')}>
                    <Image source={require('../../images/Tabs/Home/book3.png')}
                    style={styles.bookImage}
                    />
                  </Pressable>
                </View>
                <View>
                  <Pressable onPress={() => Alert.alert('Book4')}>
                    <Image source={require('../../images/Tabs/Home/book4.png')}
                    style={styles.bookImage}
                    />
                  </Pressable>
                </View>
              </View>

            </View>
          </ScrollView>

        </View>



      </View>
    );
}

const styles = StyleSheet.create({
    upperPart: {
      flex: 1,
      width: 395,
      justifyContent: 'center', 
      alignItems: 'center',
    },
    scrollPart: {
      width: 295,
    },
    verseImage: {
      marginTop: 15,
      width: 295,
      height: 231
    },
    wordOfTheDayView:{
      marginTop: 15
    },
    wordOfTheDayText:{
      fontWeight: 'bold',
      fontSize: 25
    },
    wordOfTheDayContentView:{
      padding: 10,
      backgroundColor: 'rgb(236, 236, 236)',
      borderRadius: 13,
    },
    wordOfTheDayContentText:{
      fontSize: 20,
      lineHeight: 23,
      color: 'rgb(36, 36, 36)'
    },
    wordOfTheDayContentHeaderText:{
      paddingTop: 15,
      left: 10,
      fontSize: 20,
      lineHeight: 23,
      color: 'rgb(36, 36, 36)'
    },
    header: {
      justifyContent: 'flex-start',
      alignContent: 'flex-start',
      flexDirection: 'row',
      marginTop: 30,
      marginLeft: 23
    },
    headerText: {
      fontSize: 35,
      fontWeight: 'bold'
    },
    headerImage: {
      marginLeft: 150
    },
    homeLogo: {
      width: 52,
      height: 52
    },
    inputTypeView: {
      marginTop: 8,
      alignItems: 'center',
    },
    inputType: {
      height: 51,
      width: 338,
      margin: 12,
      borderWidth: 1,
      borderRadius: 13,
      padding: 10,
    },
    preachingsView: {
      marginTop: 15
    },
    preachingsButton: {
      marginLeft: 50,
      marginTop: 120
    },
    preachingsText: {
      fontWeight: 'bold',
      fontSize: 25
    },
    preachingsImage: {
      width: 200,
      height: 140,
      borderRadius: 13
    },
    seeAllPreachings: {
      justifyContent: 'flex-start',
      alignContent: 'flex-start',
      flexDirection: 'row',
    },
    seeAllText: {
      fontWeight: '500',
      fontSize: 13,
    },
    slidePreachingView: {
      marginTop: 15,
    },
    slidePreachingViewItems: {
      justifyContent: 'center', 
      alignItems: 'center',
      paddingRight: 10,
      flexDirection: 'column'
    },
    slidePreachingImage: {
      width: 106,
      height: 66,
      borderRadius: 13,
    },
    slidePreachingText: {
      fontWeight: '600',
      fontSize: 15,
    },
    preachingDividerView: {
      marginTop: 15,
    },
    preachingDividerImage: {
      width: 292,
      height: 2,
    },
    musicViewA:
    {
      marginTop: 15
    },
    musicTextA: {
      fontWeight: 'bold',
      fontSize: 25
    },
    musicItemContainerA: {
      backgroundColor: 'rgb(236, 236, 236)',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      paddingBottom: 40,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 20,
      borderRadius: 13,
    },
    musicItemsImageA: {
      width: 120,
      height: 117,
      borderRadius: 13
    },
    musicItemsImageView: {
      marginRight: 10
    },
    musicItemATextView: {
      left: 45,
      top: -30
    },
    musicItemAText: {
      fontWeight: '600',
      fontSize: 15,
      lineHeight: 17
    },
    musicItemContainerBView: {
      marginLeft: 20,
      backgroundColor: 'rgb(236, 236, 236)',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      padding: 20,
      borderRadius: 13
    },
    musicItemContainerB: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    recentlyPlayed: {
      fontSize: 23,
      fontWeight: '700'
    },
    musicItemsImageB: {
      width: 90,
      height: 90,
      borderRadius: 13,
      marginLeft: 5
    },
    musicItemContainerBTextView: {
      textAlign: 'center',
      justifyContent: 'center',
      fontSize: 15,
      fontWeight: '600'
    },
    musicItemContainerCView: {
      marginLeft: 20,
      backgroundColor: 'rgb(236, 236, 236)',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      padding: 20,
      borderRadius: 13
    },
    recommended: {
      fontSize: 23,
      fontWeight: '700'
    },
    musicItemContainerC: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    musicItemContainerCTextView: {
      textAlign: 'center',
      justifyContent: 'center',
      fontSize: 15,
      fontWeight: '600'
    },
    musicItemsImageC: {
      width: 90,
      height: 90,
      borderRadius: 100,
      marginLeft: 15
    },
    musicItemContainerCTextView: {
      textAlign: 'center',
      justifyContent: 'center',
      fontSize: 15,
      fontWeight: '600'
    },
    booksView:
    {
      marginTop: 15
    },
    bookUpper: {
      alignContent: 'center',
      justifyContent: 'space-evenly',
      flexDirection: 'row'
    },
    bookLabel: {
      fontWeight: 'bold',
      fontSize: 25
    },
    purposeDriven: {
      height: 120,
      width: 80
    },
    bookAuthor: {
      width: 55,
      height: 55,
      borderRadius: 100
    },
    authorLabel: {
      fontSize: 20,
      fontWeight: '700'
    },
    authorDetailsView: {
      marginTop: 30
    },
    authorName: {
      fontWeight: '600',
      fontSize: 20
    },
    authorPlaceA: {
      fontWeight: '400',
      fontSize: 15
    },
    authorPlaceB: {
      fontWeight: '400',
      fontSize: 15
    },
    seeAllBooksView: {
      marginLeft: 250
    },
    seeAllBooks: {
      fontSize: 13,
      fontWeight: '500',
    },
    bookView: {
      marginTop: 5,
      justifyContent: 'space-evenly',
      alignContent: 'center',
      flexDirection: 'row'
    },
    bookImage: {
      height: 103,
      width: 64,
      borderRadius: 13
    }
})

export default Home