import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

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
          style={styles.submit}
          activeOpacity={0.8}
        >
          <Text style={styles.submitText}>
            ENTRAR
          </Text>
        </TouchableOpacity>
      </View>
        
      <View style={styles.containerBottom}>
        <TouchableOpacity
          style={styles.submit}
          activeOpacity={0.8}
        >
          <Text style={styles.submitText} >
            Criar conta grátis
          </Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.subTitle}>
            Continuar sem login
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView> 
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DE3232'
  },
  containerTop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontFamily: 'Segoe UI, Arial',
  },
  subTitle: {
    fontSize: 20,
    fontFamily: 'Segoe UI, Arial',
    color: '#FFFFFF',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
  input: {
    backgroundColor: '#FFFFFF',
    width: '90%',
    marginBottom: 15,
    color: '#5B5B5B',
    fontSize: 18,
    borderRadius: 30,
    padding: 10,
    paddingLeft: 20,
  },
  submit: {
    backgroundColor: '#A61A1A',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000000',
    shadowRadius: 1,
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 1,
    elevation: 10,
    marginBottom: 10,
  },
  submitText: {
    color: '#FFFFFF',
    fontSize: 24,
  },
  containerBottom: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
  },
});