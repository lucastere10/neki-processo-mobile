import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, ImageBackground, Text, ToastAndroid, Alert } from 'react-native';
import { styles } from './style';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { createUser } from '../../service/auth/auth';

export const Register = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isRepeatPasswordVisible, setIsRepeatPasswordVisible] = useState(false);

  return (
    <ImageBackground source={require('../../assets/images/registerBackground.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Cadastre-se</Text>

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
          <Ionicons name="at" size={24} color="#3F3335" />
          <TextInput
            style={[styles.inputText, { fontFamily: 'Poppins-Regular' }]}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
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

        <View style={styles.input}>
          <FontAwesome name="unlock-alt" size={24} color="#3F3335" />
          <TextInput
            style={[styles.inputTextPassword, { fontFamily: 'Poppins-Regular' }]}
            placeholder="Confirmar Senha"
            secureTextEntry={!isRepeatPasswordVisible}
            value={repeatPassword}
            onChangeText={(text) => setRepeatPassword(text)}
          />
          <TouchableOpacity onPress={() => setIsRepeatPasswordVisible(!isRepeatPasswordVisible)}>
            <FontAwesome name={isRepeatPasswordVisible ? "eye-slash" : "eye"} size={24} color="#3F3335" />
          </TouchableOpacity>
        </View>

        <View>
          <Text style={[styles.Letras, { fontFamily: 'Poppins-Regular' }]} > Já tem uma conta? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text
              style={{ color: 'white', textAlign: 'center', fontFamily: 'Poppins-Bold', fontSize:16 }}
            >Entrar</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.Botao}
          onPress={() => {
            // Verificar se todos os campos foram passados
            if (!username || !email || !password || !repeatPassword) {
              alert('Todos os campos são obrigatórios!');
              return;
            }

            // username com pelo menos 8 caracteres
            if (username.length < 8) {
              alert('Usuários precisam ter pelo menos 8 caracteres!');
              return;
            }

            // Verificar se o email é valido
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
              alert('Por favor insira um email válido!');
              return;
            }

            //  Verificar se a senha possui pelo menos 1 numero e 8 caracteres
            const passwordRegex = /^(?=.*\d).{8,}$/;
            if (!passwordRegex.test(password)) {
              alert('Senhas precisam ter pelo menos 8 caracteres e ter pelo menos 1 número!');
              return;
            }

            // Verificar se ambas as senhas são iguais
            if (password !== repeatPassword) {
              alert('Senhas não coincidem!');
              return;
            }

            // criar usuario
            createUser(username, email, password);
            navigation.navigate('Login');
          }}
        >
          <Text style={{ color: 'white', fontFamily: 'Poppins-Bold', fontSize: 20 }}>REGISTRAR</Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
};