import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

export default function LoginPageLogo() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>iChef</Text>

      <Text style={styles.subTitle}>Faça login ou crie sua conta grátis</Text>
    </View>
  );
}
