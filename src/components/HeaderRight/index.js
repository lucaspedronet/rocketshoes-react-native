import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';

import { ButtonHeaderRight, Circle, ButtonText } from './styles';

export default function HeaderRight() {
  const navigation = useNavigation()
  return (
    <ButtonHeaderRight onPress={() => navigation.navigate("Cart")}>
      <Circle>
        <ButtonText>7</ButtonText>
      </Circle>
      <Icon
        name="shopping-basket"
        size={23}
        color="#FFF"
      />
    </ButtonHeaderRight>
  );
}
