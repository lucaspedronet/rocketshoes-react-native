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
import { connect } from 'react-redux';

function ProductItem({ data, handleAddToCart, amount }) {
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
          <IconText>{amount[data.id] || 0}</IconText>
        </IconBox>
        <ButtonText onPress={() => handleAddToCart(data.id)}>
          ADICIONAR
        </ButtonText>
      </ButtonAdd>
    </Container>
  );
}

export default connect()(ProductItem)
