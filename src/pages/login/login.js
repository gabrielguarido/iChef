/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable no-shadow */
import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Animated,
} from 'react-native';
import styles from './styles';
import api from '../../services/api';

const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function Login({navigation}) {
  const [offset] = useState(new Animated.ValueXY({x: 0, y: 30}));

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  /**
   * Login inputs bounce animation
   */
  useEffect(() => {
    Animated.spring(offset.y, {
      toValue: 0,
      speed: 4,
      bounciness: 20,
      useNativeDriver: true,
    }).start();
  }, [offset.y]);

  /**
   * Calls API's login function for authentication
   */
  login = async () => {
    try {
      const response = await api.post('auth/authenticate', {
        email: email,
        password: password,
      });

      setToken(response.data.token);

      alert('Sucesso!');
    } catch {
      alert('E-mail ou Senha inválidos! Por favor, revise suas credenciais.');
    }
  };

  return (
    <DismissKeyboard>
      <SafeAreaView style={styles.background}>
        <View style={styles.containerTop}>
          <Text style={styles.mainTitle}>iChef</Text>

          <Text style={styles.subTitle}>
            Faça login ou crie sua conta grátis
          </Text>
        </View>

        <Animated.View
          style={[
            styles.container,
            {
              transform: [{translateY: offset.y}],
            },
          ]}>
          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail..."
            autoCorrect={false}
            keyboardType="email-address"
            autoCapitalize="none"
            returnKeyType="next"
            onChangeText={(email) => setEmail(email)}
            defaultValue={email}
            onSubmitEditing={() => passwordInput.focus()}
          />

          <TextInput
            style={styles.input}
            placeholder="Digite sua senha..."
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="go"
            secureTextEntry
            onChangeText={(password) => setPassword(password)}
            defaultValue={password}
            ref={(input) => (passwordInput = input)}
            onSubmitEditing={() => login()}
          />

          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.subTitle}>Esqueceu sua senha?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.submitLogin}
            activeOpacity={0.8}
            onPress={login}>
            <Text style={styles.submitText}>ENTRAR</Text>
          </TouchableOpacity>
        </Animated.View>

        <View style={styles.containerBottom}>
          <TouchableOpacity
            style={styles.submitCreateAccount}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.submitText}>Criar conta grátis</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.subTitleContinueNoLogin}>
              Continuar sem login
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </DismissKeyboard>
  );
}
