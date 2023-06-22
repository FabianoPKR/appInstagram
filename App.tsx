import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TextInput, TouchableOpacity, Platform } from 'react-native';
import { FontAwesome5 } from "@expo/vector-icons";
import { styles } from '../appInstagram/style ';
import { KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Feed from './feed';


export default function App() {
  const [logado, setLogado] = useState(false);

  const handleLogin = () => {
    setLogado(true);
  };

  if (logado) {
    return (
      <Feed />
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <StatusBar backgroundColor="#fff" translucent={false} />

            <Image source={require('../appInstagram/src/assets/logoInst.png')} resizeMode="center" style={styles.logo} />
            <TextInput placeholder="Celular, Username ou Email" style={styles.input} />
            <TextInput placeholder="Sua senha" secureTextEntry={true} style={styles.input} />

            <View style={styles.forgotContainer}>
              <TouchableOpacity>
                <Text style={styles.forgotText}>Esqueceu Sua Senha?</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginText}>Acessar</Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.facebookButton}>
              <FontAwesome5 name="facebook" size={25} color="#399fff" />
              <Text style={styles.facebookText}>Continue com o Facebook</Text>
            </TouchableOpacity>

            <View style={styles.divisor}>
              <View style={styles.linha}></View>
              <Text style={{ marginHorizontal: '3%' }}>OU</Text>
              <View style={styles.linha}></View>
            </View>

            <View style={styles.signUpContainer}>
              <Text style={styles.signUpText}>Não possui uma conta?</Text>
              <TouchableOpacity>
                <Text style={styles.signUpButton}>Cadastre-se</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
}


