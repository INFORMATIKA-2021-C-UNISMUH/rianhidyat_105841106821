
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React from "react";
import { useFonts } from 'expo-font';  


const TextInputCustom = ({name, color}) => {
  return (
    <TextInput
      placeholder={`Masukan ${name}`}
      style={{
        width: 344,
        height: 64,
        borderWidth: 1,
        borderColor: color,
        alignSelf: 'center',
        marginBottom: 10,
        alignItems: 'center',
        padding:10,
        color: color,
        backgroundColor:'white',
        shadowRadius:1,
        shadowColor:'black',
        shadowOpacity:0.2,
        minHeight:50,

      }}
      />
    )
  }
 const ButtonCustom = ({text, color}) => {     
  return (
    <View style={{
      width: 344,
      height: 50,
      backgroundColor: color,
      justifyContent: 'center',
      borderRadius: 20,
      alignItems: 'center',

    }}>
      <Text style={{
        textAlign: 'flex-start', 
        fontFamily: 'MetroSemibold',
        fontSize: 16,
      }}>{text}
      </Text>  
    </View>
  )
}
const LoginPage = ({navigation}) => {
  const [dapatFont] = useFonts({
    'MetroBlack': require('./assets/fonts/Metropolis-Black.otf'),
    'MetroBold': require('./assets/fonts/Metropolis-Bold.otf'),
    'MetroLight': require('./assets/fonts/Metropolis-Light.otf'),
    'MetroMedium': require('./assets/fonts/Metropolis-Medium.otf'),
    'MetroSemibold': require('./assets/fonts/Metropolis-SemiBold.otf'),
  });
  if (!dapatFont) {
    return <Text>Font Tidak Ditemukan..</Text>
  }
return (
  <View style={{
    flex:1,
    backgroundColor:'F5F5F5'
  }}>

    <View style={{
      flex:1,
      justifyContent:'flex-start',
      alignItems:'flex-start',
      paddingLeft:14,
      top:35
    }}>
      <Text style={{
        lineHeight:34,
        fontFamily:'MetroBold',
        fontSize:34,
      }}>
        Login
      </Text>
    </View>

    <View style={{
      flex:1,
      width:'100%',
      bottom:30,
      alignItems:'center',
      alignSelf:'center',
      fontFamily:'MetroMedium'
    }}>
      
      <TextInputCustom name='Email' color='#666666'/>
      <TextInputCustom name='Password' color='#666666'/>
    </View>

    <TouchableOpacity onPress={()=> navigation.navigate('Forgot Password')} style={{
      flex:1,
      alignItems:'flex-end',
      bottom:20,
      right:25,
    }}>
  
      <Text style={{
        fontSize:14,
        fontFamily:'MetroMedium',
      }}>
      Forgot your Password?
        </Text>
        </TouchableOpacity>

    <View style={{
      flex:1,
      alignItems:'center',
      bottom:120,
      width:'100%',
      fontFamily:'MetroSemiBold'
    }}>
      <TouchableOpacity onPress={() => navigation.navigate('MyTabs')} style={{
        width:'90%',
        height:50,
        backgroundColor:'red',
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        shadowColor:'black',
        shadowOpacity:0.2,
        shadowRadius:1,
        shadowOffset:{width:0, height:1},
      }}>
        <Text style={{
          color:'white',
          fontSize:16,
          fontFamily:'MetroSemibold',
        }}>LOGIN</Text>
      </TouchableOpacity>
    </View>

    <View style={{
      bottom:40,
      alignItems:'center',
    }}>
      <Text style={{
        fontFamily:'MetroMedium',
      }}>Or sign with your social account</Text>
    </View>

    <View style={{
      flexDirection:'row',
      alignSelf:'center',
      bottom:30,
      columnGap:20
    }}>
      <View style={{
        borderRadius:10,
        padding:10,
      }}>
        <Image source={require('./assets/google.png')} style={{
          width:50,
          height:30,
          resizeMode:'contain',
        }}/>
      </View>

      <View style={{
        borderRadius:20,
        padding:10,
      }}>
        <Image source={require('./assets/facebook.png')} style={{
          width:50,
          height:30,
          resizeMode:'contain',
        }}/>
      </View>
    </View>
  </View>

)
}

export default  LoginPage;














// import * as React from 'react';
// import { View, Text, Button, Image } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LoginPage from './LoginPage';
// import SignUpPage from './SignUpPage';
// import ForgotPassword from './ForgotPasswordPage';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeAktif from './assets/home-aktif.jpg';
// import HomeInaktif from './assets/home-inaktif.jpg';
// import Shop from './assets/shop.jpg';
// import ShopInaktif from './assets/shop-inaktif.jpg';
// import bagAKtif from './assets/bag-aktif.jpg';
// import bagInaktif from './assets/bag-inaktif.jpg';
// import favoriteAktif from './assets/favorite-aktif.jpg';
// import favoriteInaktif from './assets/favorite-inaktif.jpg';
// import profileAktif from './assets/profile-aktif.jpg';
// import profileInaktif from './assets/profile-inaktif.jpg';



// const Tab = createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="Home"
//         component={LoginPage}
//         options={{
//           headerShown: false,
//           tabBarIcon: ({ focused }) => (
//             <Image
//             source={focused ? HomeAktif : HomeInaktif}
//             style={{ width: 40, height: 40 }}
//             />
//           ),
//         }}
//       />
//         <Tab.Screen
//           name="Shop"
//           component={SignUpPage}
//           options={{
//             headerShown: false,
//             tabBarIcon: ({ focused }) => (
//               <Image
//                 source={focused ? Shop : ShopInaktif}
//                 style={{ width: 40, height: 40 }}
//               />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Bag"
//           component={LoginPage}
//           options={{
//             headerShown: false,
//             tabBarIcon: ({ focused }) => (
//               <Image
//                 source={focused ? bagAKtif : bagInaktif}
//                 style={{ width: 40, height: 40 }}
//               />
//             ),
//           }}
//         />
//         <Tab.Screen
//           name="Favorite"
//           component={ForgotPassword}
//           options={{
//             headerShown: false,
//             tabBarIcon: ({ focused }) => (
//               <Image
//                 source={focused ? favoriteAktif : favoriteInaktif}
//                 style={{ width: 40, height: 40 }}
//               />
//             ),
//           }}
//         />
//           <Tab.Screen
//           name="Profile"
//           component={ForgotPassword}
//           options={{
//             headerShown: false,
//             tabBarIcon: ({ focused }) => (
//               <Image
//                 source={focused ? profileAktif : profileInaktif}
//                 style={{ width: 40, height: 40 }}
//               />
//             ),
//           }}
//         />
//     </Tab.Navigator>
//   );
// }

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//       <Button
//         title="Go to Login"
//         onPress={() => navigation.navigate('Login')}
//       />
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={MyTabs} />
//         <Stack.Screen name="SignUp" component={SignUpPage} />
//         <Stack.Screen name="Login" component={LoginPage} />
//         <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
//         <Stack.Screen name="HomeScreen" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;
