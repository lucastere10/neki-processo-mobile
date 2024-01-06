import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, ImageBackground, Text } from 'react-native';
import styles from './style';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { loginUser } from '../../service/auth/auth';

export const Login = ({ navigation, setAuth }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ImageBackground source={require('../../assets/images/loginBackground.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.input}>
          <Ionicons name="person-circle" size={24} color="#3F3335" />
          <TextInput
            style={[styles.inputText, {fontFamily:'Poppins-Regular'}]}
            placeholder="Nome"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <View></View>
        </View>

        <View style={styles.input}>
          <FontAwesome name="unlock-alt" size={24} color="#3F3335" />
          <TextInput
            style={[styles.inputText, {fontFamily:'Poppins-Regular'}]}
            placeholder="Senha"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <View></View>
        </View>

        <View>
          <Text style={[styles.Letras, { fontFamily: 'Poppins-Regular' }]} > Não possui conta? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text
              style={{ color: 'white', textAlign: 'center', fontFamily: 'Poppins-Regular' }}
            >Cadastre-se</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.Botao} onPress={() => {
          loginUser(username, password, setAuth);
        }
        }>
          <Text style={{ color: 'white', textAlign: 'center', fontSize: 20, fontFamily: 'Poppins-Bold' }}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
