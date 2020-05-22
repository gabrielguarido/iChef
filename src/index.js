/* eslint-disable no-shadow */
import React, {useEffect, useState} from 'react';
import {
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Animated,
} from 'react-native';

import LoginPageLogo from './components/login/logo/LoginPageLogo';
import LoginPageBottom from './components/login/bottom/LoginPageBottom';

import styles from './styles';

const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function App() {
  const [offset] = useState(new Animated.ValueXY({x: 0, y: 30}));

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    Animated.spring(offset.y, {
      toValue: 0,
      speed: 4,
      bounciness: 20,
      useNativeDriver: true,
    }).start();
  }, [offset.y]);

  function login() {
    console.log('Email');
  }

  return (
    <DismissKeyboard>
      <SafeAreaView style={styles.background}>
        <LoginPageLogo />

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
            autoCapitalize="none"
            onChangeText={(email) => setEmail(email)}
            defaultValue={email}
          />

          <TextInput
            style={styles.input}
            placeholder="Digite sua senha..."
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={(password) => setPassword(password)}
            defaultValue={password}
          />

          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.subTitle}>Esqueceu sua senha?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.submitLogin} activeOpacity={0.8}>
            <Text style={styles.submitText} onPress={login()}>
              ENTRAR
            </Text>
          </TouchableOpacity>
        </Animated.View>

        <LoginPageBottom />
      </SafeAreaView>
    </DismissKeyboard>
  );
}
