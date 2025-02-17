import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React from "react";
import { useFonts } from 'expo-font';

const TextInputCustom = ({ name, color }) => {
  return (
    <TextInput
      placeholder={`Masukan ${name}`}
      style={{
        width: '90%',
        height: 64,
        borderWidth: 1,
        borderColor: color,
        alignSelf: 'center',
        marginBottom: 10,
        alignItems: 'center',
        padding: 10,
        color: color,
        backgroundColor: 'white',
        shadowRadius: 1,
        shadowColor: 'black',
        shadowOpacity: 0.2,
        minHeight: 50,

      }}
    />
  )
}
const ButtonCustom = ({ text, color }) => {
  return (
    <View style={{
      width: '90%',
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

const SignUpPage = ({navigation}) => {

  const [dapatFont] = useFonts({
    'MetroBlack': require('./assets/fonts/Metropolis-Black.otf'),
    'MetroBold': require('./assets/fonts/Metropolis-Bold.otf'),
    'MetroLight': require('./assets/fonts/Metropolis-Light.otf'),
    'MetroMedium': require('./assets/fonts/Metropolis-Medium.otf'),
    'MetroSemibold': require('./assets/fonts/Metropolis-SemiBold.otf'),
  });

  if (!dapatFont)
    return <Text>Font Tidak Ditemukan..</Text>

  return (
    <View style={{
      flex: 1,
      backgroundColor: 'F5F5F5'
    }}>

      <View style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingLeft: 14,
        top: 35
      }}>
        <Text style={{
          lineHeight: 34,
          fontFamily: 'MetroBold',
          fontSize: 34,
        }}>
          Sign Up
        </Text>

      </View>

      <View style={{
        flex: 1,
        width: '100%',
        bottom: 20,
        alignItems: 'center',
        alignSelf: 'center',
        fontFamily: 'MetroMedium',
      }}>
        <TextInputCustom name='Name' color='#666666' />
        <TextInputCustom name='Email' color='#666666' />
        <TextInputCustom name='Password' color='#666666' />
      </View>

      <View style={{
        flex: 1,
        color: '#666666',
        alignItems: 'flex-end',
        right: 25,
        top:10
      }}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}> 
          <Text style={{
            fontSize: 14,
            fontFamily: 'MetroMedium',
            
          }}>
            Already have an account? Sign In
          </Text>
        </TouchableOpacity>
        
      </View>

      <TouchableOpacity>
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 100,
        width: '100%',
        fontFamily: 'MetroSemiBold'
      }}>
        <ButtonCustom color='red' text='SIGN UP' />
      </View>
      </TouchableOpacity>

      <View style={{
        bottom: 50,
        alignItems: 'center',
      }}>
        
        <Text style={{
          fontFamily: 'MetroMedium',
        }}>Or sign with your social account</Text>
      </View>

      <View style={{
        flexDirection: 'row',
        alignSelf: 'center',
        bottom: 30,
        columnGap: 20
      }}>
        <View style={{
          borderRadius: 10,
          padding: 10,
        }}>
          <Image source={require('./assets/google.png')} style={{
            width: 50,
            height: 30,
            resizeMode: 'contain',
          }} />
        </View>

        <View style={{
          borderRadius: 20,
          padding: 10,
        }}>
          <Image source={require('./assets/facebook.png')} style={{
            width: 50,
            height: 30,
            resizeMode: 'contain',
          }} />
        </View>
      </View>
    </View>
  )
}
export default SignUpPage;



