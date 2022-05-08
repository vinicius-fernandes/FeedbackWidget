import React from 'react';
import { View,Text, Linking } from 'react-native';

import { styles } from './styles';

export function Copyright() {
  return (
    <View >
        <Text style={styles.text}>                
            Código disponível no <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('https://github.com/vinicius-fernandes/FeedbackWidget')}>
  Github
</Text>  
        </Text>
    </View>
  );
}