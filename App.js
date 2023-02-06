import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import LoginScreen from './screens/Login';
import SignUpScreen from './screens/SignUp';
import MyPager from './screens/Pager';

//Home Screen (Default)
import MyTabs from './screens/MyHomePage';

//Menu Screen
import MyProfile from './screens/MyMenu/MyProfile';
import Journal from './screens/MyMenu/Journal';
import FolderContent from './screens/MyMenu/JournalFolder/FolderContent';
import FolderContentView from './screens/MyMenu/JournalFolder/FolderContentView';

//Preachings Screen
import Videoscreen2 from './screens/MyPreachings/Videoscreen2';
import Videoscreen3 from './screens/MyPreachings/Videoscreen3';
import Videoscreen4 from './screens/MyPreachings/Videoscreen4';

//Discover Screen
import SongList from './screens/MyDiscover/SongList';
import MusicPlayer from './screens/MyDiscover/MusicPlayer';

//Bible Screen
import BookScreen2 from './screens/MyBible/BookScreen2';
import BookScreen3 from './screens/MyBible/BookScreen3';
import BookScreen4 from './screens/MyBible/BookScreen4';




const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{
          headerLeft: () => (
            false
          ),
          headerShown: false,
        }}
        />
        <Stack.Screen 
        name="SignUp" 
        component={SignUpScreen} 
        options={{
          headerLeft: () => (
            false
          ),
          headerShown: false,
        }}
        />
        <Stack.Screen 
        name="Pager" 
        component={MyPager} 
        options={{
          headerLeft: () => (
            false
          ),
          headerShown: false,
        }}
        />
        <Stack.Screen 
        name="MyTabs" 
        component={MyTabs} 
        options={{
          headerLeft: () => (
            false
          ),
          headerShown: false,
        }}
        />
        {/* Menu Profile */}
        <Stack.Screen 
        name="MyProfile" 
        component={MyProfile} 
        options={{
          headerLeft: () => (
            false
          ),
          headerShown: false,
        }}
        />
        <Stack.Screen 
        name="Videoscreen2" 
        component={Videoscreen2} 
        options={{
          headerLeft: () => (
            false
          ),
          headerShown: false,
        }}
        />
        <Stack.Screen 
        name="Videoscreen3" 
        component={Videoscreen3} 
        options={{
          headerLeft: () => (
            false
          ),
          headerShown: false,
        }}
        />
        <Stack.Screen 
        name="Videoscreen4" 
        component={Videoscreen4} 
        options={{
          headerLeft: () => (
            false
          ),
          headerShown: false,
        }}
        />
        <Stack.Screen 
        name="SongList" 
        component={SongList} 
        options={{
          headerLeft: () => (
            false
          ),
          headerShown: false,
        }}
        />
        <Stack.Screen 
        name="MusicPlayer" 
        component={MusicPlayer} 
        options={{
          headerLeft: () => (
            false
          ),
          headerShown: false,
        }}
        />
        <Stack.Screen 
        name="Journal" 
        component={Journal} 
        options={{
          headerLeft: () => (
            false
          ),
          headerShown: false,
        }}
        />
        <Stack.Screen 
        name="FolderContent" 
        component={FolderContent} 
        options={{
          headerLeft: () => (
            false
          ),
          headerShown: false,
        }}
        />
        <Stack.Screen 
        name="FolderContentView" 
        component={FolderContentView} 
        options={{
          headerLeft: () => (
            false
          ),
          headerShown: false,
        }}
        />
        <Stack.Screen 
        name="BookScreen2" 
        component={BookScreen2} 
        options={{
          headerLeft: () => (
            false
          ),
          headerShown: false,
        }}
        />
        <Stack.Screen 
        name="BookScreen3" 
        component={BookScreen3} 
        options={{
          headerLeft: () => (
            false
          ),
          headerShown: false,
        }}
        /><Stack.Screen 
        name="BookScreen4" 
        component={BookScreen4} 
        options={{
          headerLeft: () => (
            false
          ),
          headerShown: false,
        }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;