import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import styles from './styles';

export default function App() {
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

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail..."
          autoCorrect={false}
          autoCapitalize={false}
          onChangeText={() => {}}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite sua senha..."
          autoCorrect={false}
          autoCapitalize={false}
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
      </View>

      <View style={styles.containerBottom}>
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
      </View>
    </KeyboardAvoidingView> 
  );
};
