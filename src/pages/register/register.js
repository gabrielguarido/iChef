/* eslint-disable no-shadow */
/* eslint-disable no-undef */
import React, {useState, useEffect} from 'react';
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

const DismissKeyboard = ({children}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function Register() {
  const [offset] = useState(new Animated.ValueXY({x: 0, y: 30}));

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  /**
   * Register inputs bounce animation
   */
  useEffect(() => {
    Animated.spring(offset.y, {
      toValue: 0,
      speed: 4,
      bounciness: 20,
      useNativeDriver: true,
    }).start();
  }, [offset.y]);

  return (
    <DismissKeyboard>
      <SafeAreaView style={styles.background}>
        <View style={styles.containerTop}>
          <Text style={styles.mainTitle}>iChef</Text>

          <Text style={styles.subTitle}>Crie sua conta grátis</Text>
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
            placeholder="Digite seu nome..."
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            onChangeText={(name) => setName(name)}
            defaultValue={name}
            onSubmitEditing={() => emailInput.focus()}
          />

          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail..."
            autoCorrect={false}
            keyboardType="email-address"
            autoCapitalize="none"
            returnKeyType="next"
            onChangeText={(email) => setEmail(email)}
            defaultValue={email}
            ref={(input) => (emailInput = input)}
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
            onSubmitEditing={() => ''}
          />

          <TouchableOpacity style={styles.submitLogin} activeOpacity={0.8}>
            <Text style={styles.submitText}>CRIAR CONTA</Text>
          </TouchableOpacity>
        </Animated.View>
      </SafeAreaView>
    </DismissKeyboard>
  );
}
