import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, ImageBackground, Text, Alert, Switch } from 'react-native';
import styles from './style';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { loginUser } from '../../service/auth/auth';

export const Login = ({ navigation, setAuth }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = () => {
    if (!username.trim()) {
      Alert.alert('Campo obrigatório', 'Por favor, insira seu nome');
      return;
    }
    if (!password.trim()) {
      Alert.alert('Campo obrigatório', 'Por favor, insira sua senha');
      return;
    }
  }

  return (
    <ImageBackground source={require('../../assets/images/loginBackground.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.input}>
          <Ionicons name="person-circle" size={24} color="#3F3335" />
          <TextInput
            style={[styles.inputText, { fontFamily: 'Poppins-Regular' }]}
            placeholder="Nome"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <View></View>
        </View>

        <View style={styles.input}>
          <FontAwesome name="unlock-alt" size={24} color="#3F3335" />
          <TextInput
            style={[styles.inputTextPassword, { fontFamily: 'Poppins-Regular' }]}
            placeholder="Senha"
            secureTextEntry={!isPasswordVisible}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <FontAwesome name={isPasswordVisible ? "eye-slash" : "eye"} size={24} color="#3F3335" />
          </TouchableOpacity>
        </View>
        {/* <View style={{ flexDirection: 'row', alignItems: 'center', alignContent: 'center' }}>
          <Switch
            value={rememberMe}
            onValueChange={setRememberMe}
          />
          <Text style={{ color: 'white', textAlign: 'center', fontFamily: 'Poppins-Regular' }}>Lembrar de Mim</Text>
        </View> */}

        <View>
          <Text style={[styles.Letras, { fontFamily: 'Poppins-Regular' }]} > Não possui conta? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text
              style={{ color: 'white', textAlign: 'center', fontFamily: 'Poppins-Bold', fontSize:16 }}
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
