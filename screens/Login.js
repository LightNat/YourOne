import React from 'react';
import { Button, View, Text, StyleSheet, Image, SafeAreaView, TextInput, Pressable, Alert } from 'react-native';

function LoginScreen({ navigation }) {

  //for text input
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.page}>

          <View style={styles.headerImageView}>
            <Image source={require('../images/Login/header_image.png')}/>
          </View>

          <View style={styles.headerWelcomeView}>
            <Image source={require('../images/Login/welcome_back.png')}
            style={styles.headerWelcome}
            />
          </View>
            
          <View style={styles.headerUnderlineView}>
            <Image source={require('../images/Login/underline.png')}
            style={styles.headerUnderline}
            />
          </View>

          <View style={styles.inputTypeView}>
            <SafeAreaView>
            <TextInput
                style={styles.inputType}
                onChangeText={onChangeText}
                value={text}
                placeholder="Email"
                keyboardType="numeric"
              />
              <TextInput
                style={styles.inputType}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Password"
                keyboardType="numeric"
              />
            </SafeAreaView>
            <Pressable  onPress={() => Alert.alert("Pressed!")}>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </Pressable>
            
          </View>

          <View style={styles.loginButtonView}>
            <Pressable style={styles.loginButton} onPress={() => navigation.navigate('Pager')}>
              <Text style={styles.loginButtonText}>LOGIN</Text>
            </Pressable>
          </View>

          <View>
            <Image source={require('../images/Login/login_underline.png')}
            style={styles.loginUnderlineA}
            />
          </View>

          <View style={styles.loginUnderlineTextView}>
            <Text style={styles.loginUnderlineText}>or</Text>
          </View>
          
          <View>
            <Image source={require('../images/Login/login_underline.png')}
            style={styles.loginUnderlineB}
            />
          </View>

          <View style={styles.loginThirdParty}>
            <Pressable onPress={() => Alert.alert("Pressed!")}>
              <Image source={require('../images/Login/login_google.png')}
              style={styles.loginGoogle}
              />
            </Pressable>

            <Pressable onPress={() => Alert.alert("Pressed!")}>
              <Image source={require('../images/Login/login_facebook.png')}
              style={styles.loginFacebook}
              />
            </Pressable>
          
            <Pressable onPress={() => Alert.alert("Pressed!")}>
              <Image source={require('../images/Login/login_apple.png')}
              style={styles.loginApple}
              />
            </Pressable>
          </View>

          <View style={styles.signUp}>
            <Text style={styles.signUpText}>Don't have an account?</Text>
            <Pressable>
              <Text style={styles.signUpPressable} onPress={() => navigation.navigate('SignUp')}> Sign Up</Text>
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
    marginTop: 30
  },
  headerImageView: {
    top: 40,
    left: 230
  },
  headerImage: {
    width: 150,
    height: 150,
  },
  headerWelcomeView: {
    bottom: 115,
    left: 28,
  },
  headerWelcome: {
    width: 160,
    height: 75
  },
  headerUnderlineView: {
    bottom: 100,
    left: 26,
  },
  headerUnderline: {
    width: 156,
    height: 12
  },
  inputTypeView: {
    alignItems: 'center',
    bottom: 40,
  },
  inputType: {
    height: 59,
    width: 304,
    margin: 12,
    borderWidth: 1,
    borderRadius: 13,
    padding: 10,
  },
  forgotPassword: {
    left: 100,
    fontWeight: 'bold',
  },
  loginButtonView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 20,
  },
  loginButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    width: 304,
    height: 59,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    borderRadius: 13
  },
  loginUnderlineA: {
    width: 120,
    height: 3,
    left: 50,
    top: 25
  },
  loginUnderlineTextView: {
    alignItems: 'center'
  },
  loginUnderlineText: {
    fontSize: 18,
    top: 10,
    fontWeight: 'bold'
  },
  loginUnderlineB: {
    width: 120,
    height: 3,
    left: 225,
  },
  loginGoogle: {
    width: 54,
    height: 54,
    
  },
  loginFacebook: {
    width: 54,
    height: 54,
  },
  loginApple: {
    width: 54,
    height: 54,
  },
  loginThirdParty: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 30
  },
  signUp: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 50
  },
  signUpText: {
    color: 'rgb(93, 93, 93)'
  },
  signUpPressable: {
    fontWeight: 'bold'
  }

});

  export default LoginScreen