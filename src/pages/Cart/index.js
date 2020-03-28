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

  incrementAmount(id, amount) {
    const { dispatch } = this.props;

    dispatch({
      type: '@cart/UPDATE_AMOUNT_SUCCESS',
      id,
      amount
    })
  }

  decrementAmount(id, amount) {
    const { dispatch } = this.props;

    dispatch({
      type: '@cart/UPDATE_AMOUNT_SUCCESS',
      id,
      amount
    })
  }

  removeProduct = (id) => {
    const { dispatch } = this.props

    dispatch({
      type: '@cart/REMOVE',
      id
    })
  }
  render() {
    const { products } = this.props;
    return (
      <Container>
        <CartList >
          {products.map(item => (
            <CartBox key={item.id}>
              <ProductItem>
                <ImageItem source={{ uri: item.image}} />
                <TextCenter>
                  <Title>
                    {item.title}
                  </Title>
                  <Price>{item.priceFormatted}</Price>
                  </TextCenter>
                  <ButtonTrash onPress={() => this.removeProduct(item.id)}>
                    <Icon name="trash" size={21} color="#7159c1" />
                  </ButtonTrash>
              </ProductItem>
              <Actions>
                <ActionLeft>
                  <ButtonActionMinus onPress={() => this.decrementAmount(item.id, item.amount -= 1)}>
                    <Minus name="minus" size={25} color="#7159c1" />
                  </ButtonActionMinus>
                  <AmountText
                    numberOfLines={1}
                  >{item.amount}</AmountText>
                  <ButtonActionPlus onPress={() => this.incrementAmount(item.id, item.amount += 1)}>
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
