import React, { Component } from 'react';

import {
  Container,
  CartBox,
  CartList,
  ProductItem,
  ImageItem,
  TextCenter,
  Title,
  Price,
  ButtonTrash,
  Actions,
  ActionLeft,
  ButtonActionMinus,
  ButtonActionPlus,
  AmountText,
  Subtotal,
  PriceTotal,
  TotalText,
  ButtonFinaliza,
  ButtonFinalizaText
} from './styles';
import { View } from 'react-native';
import { connect } from 'react-redux'

import Icon from 'react-native-vector-icons/FontAwesome'
import Plus from 'react-native-vector-icons/AntDesign'
import Minus from 'react-native-vector-icons/AntDesign'

class Cart extends Component {
  render() {
    const { products } = this.props;
    console.tron.log(products)
    return (
      <Container>
        <CartList >
          {products.map(item => (
            <CartBox key={item.id}>
              <ProductItem>
                <ImageItem source={item.image} />
                <TextCenter>
                  <Title>
                    {item.title}
                  </Title>
                  <Price>R$ {item.price}</Price>
                  </TextCenter>
                  <ButtonTrash>
                    <Icon name="trash" size={21} color="#7159c1" />
                  </ButtonTrash>
              </ProductItem>
              <Actions>
                <ActionLeft>
                  <ButtonActionMinus>
                    <Minus name="minus" size={25} color="#7159c1" />
                  </ButtonActionMinus>
                  <AmountText
                    numberOfLines={1}
                  >5</AmountText>
                  <ButtonActionPlus>
                    <Plus name="plus" size={25} color="#7159c1" />
                  </ButtonActionPlus>
                </ActionLeft>
                <Subtotal>R$ 539,89</Subtotal>
              </Actions>
            </CartBox>
          ))}
          <View style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "stretch"}} >
            <TotalText>TOTAL</TotalText>
            <PriceTotal>R$ 1619,97</PriceTotal>
            <ButtonFinaliza>
              <ButtonFinalizaText> FINALIZAR PEDIDO </ButtonFinalizaText>
            </ButtonFinaliza>
          </View>
        </CartList>
      </Container>
    );
  }

}

const mapStateToProps = state => ({
  products: state.cart
});

export default connect(mapStateToProps, null)(Cart)
