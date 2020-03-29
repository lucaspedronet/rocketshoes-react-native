import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'

import {
  Container,
  Avatar,
  Title,
  Price,
  ButtonAdd,
  IconBox,
  ButtonText,
  IconText
} from './styles';

export default function ProductItem({ data, handleAddToCart }) {

  return (
    <Container>
      <Avatar
        source={{ uri: data.image }}
      />
      <Title>{data.title}</Title>
      <Price>{data.priceFormatted}</Price>
      <ButtonAdd>
        <IconBox>
          <Icon name="shopping-basket" size={15} color="#FFF" />
          <IconText>3</IconText>
        </IconBox>
        <ButtonText onPress={() => handleAddToCart(data.id)}>
          ADICIONAR
        </ButtonText>
      </ButtonAdd>
    </Container>
  );
}
