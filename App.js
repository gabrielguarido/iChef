import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Animated,
  Keyboard,
} from 'react-native';

import styles from './styles';

export default function App() {

  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 30 }));
  const [opacity] = useState(new Animated.Value(1));

  useEffect(() => { 
    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

    Animated.spring(offset.y, {
      toValue: 0,
      speed: 4,
      bounciness: 20,
      useNativeDriver: true,
    }).start();
  }, []);

  function keyboardDidShow() {
    Animated.spring(opacity, {
      toValue: 0,
      useNativeDriver: true,
    }).start();
  }

  function keyboardDidHide() {
    Animated.spring(opacity, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  }

  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerTop}>
        <Text style={styles.mainTitle}>
          iChef
        </Text>

        <Text style={styles.subTitle}>
          Faça login ou crie sua conta grátis
        </Text>
      </View>

      <Animated.View style={[
        styles.container,
        {
          transform: [
            { translateY: offset.y }
          ]
        }
      ]}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail..."
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={() => {}}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite sua senha..."
          autoCorrect={false}
          autoCapitalize="none"
          onChangeText={() => {}}
        />

        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.subTitle}>
            Esqueceu sua senha?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.submitLogin}
          activeOpacity={0.8}
        >
          <Text style={styles.submitText}>
            ENTRAR
          </Text>
        </TouchableOpacity>
      </Animated.View>

      <Animated.View style={[
        styles.containerBottom,
        {
          opacity: opacity,
        }
      ]}>
        <TouchableOpacity
          style={styles.submitCreateAccount}
          activeOpacity={0.8}
        >
          <Text style={styles.submitText} >
            Criar conta grátis
          </Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.subTitleContinueNoLogin}>
            Continuar sem login
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView> 
  );
};
