import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

import styles from './styles';

export default function LoginPageBottom() {
  return (
    <View style={styles.containerBottom}>
      <TouchableOpacity style={styles.submitCreateAccount} activeOpacity={0.8}>
        <Text style={styles.submitText}>Criar conta grátis</Text>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.8}>
        <Text style={styles.subTitleContinueNoLogin}>Continuar sem login</Text>
      </TouchableOpacity>
    </View>
  );
}
