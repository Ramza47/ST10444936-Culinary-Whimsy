// Login screen
import React, {useState} from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Button, SafeAreaView,  Image, Alert } from 'react-native';


const LoginPage = ({navigation}) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // This prompts the users to enter the username & password of their choice
  const handleLogin = () => {
      if (username && password) {
        navigation.navigate('HomePage'); // Navigates to Home screen after login
      } else {
        alert('Please enter both username and password.');
      }
    };

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.boldText}>Culinary Whimsy</Text>
  
        <View style={styles.mainPicture}>
          <Image style={styles.ImageSize}
          source={require('../img/whimsy.png')}
          />
        </View>

        <Text style={styles.boldText}>Welcome to Culinary Whimsy</Text>

        <View style={styles.InputFlex}>
        <Text>Username:</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
        value={username}
        onChangeText={setUsername}
        placeholder="Enter Username"
      />

      <Text>Password:</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 10, marginBottom: 20 }}
        value={password}
        onChangeText={setPassword}
        placeholder="Enter Password"
        secureTextEntry
      />

    

      <Button title="Login" onPress={handleLogin} />
    </View>
          </ScrollView>
      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FEFAE0',  // Light background color
    },
    scrollContainer: {
      flexGrow: 1,
      justifyContent: 'center',  // Center contents vertically
      alignItems: 'center',  // Center contents horizontally
      padding: 20,
    },

    logo: {
      fontSize: 28,
      fontWeight: 'bold',
      color: '#333',
    },

  mainPicture: {
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  ImageSize: {
    width: 200,
    height: 200,
  },

    boldText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',  // Darker color for visibility
      marginBottom: 20,  // Space below the text
    },
    
    InputFlex: {
      width: '100%',  // Full width for the input fields
      paddingHorizontal: 10,
    },
    HeadingText: {
      fontSize: 18,
      color: '#333',
      marginBottom: 5,  // Space below each heading
    },
    InputBoxs: {
      borderWidth: 1,
      borderColor: '#ccc',  // Light border color
      padding: 10,
      borderRadius: 8,  // Rounded input box
      marginBottom: 20,  // Space below each input box
      fontSize: 16,
      backgroundColor: '#fff',  // White background for input box
    },
    loginButton: {
      backgroundColor: '#4CAF50',  // Green login button
      color: '#fff',  // White text color
      padding: 10,
      borderRadius: 8,  // Rounded corners for the button
    },
  });
  
  export default LoginPage;