import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import * as CartActions from '../../store/mudules/cart/actions'

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
  ButtonFinalizaText,
  ModalContainer,
  ModalBox,
  InfoBox,
  TitleModal,
  ButtonCancel,
  ButtonRemove,
  ButtonTitleCancel,
  ButtonTitleRemove
} from './styles';
import { View } from 'react-native';
import { connect } from 'react-redux'

import ModalExcludItem from '../../components/ModalExcludItem'
import Icon from 'react-native-vector-icons/FontAwesome'
import Plus from 'react-native-vector-icons/AntDesign'
import Minus from 'react-native-vector-icons/AntDesign'
import { format } from '../../utils/formatted';

class Cart extends Component {

  state = {
    modalVisible: false,
    removeId: null
  }

  toggleModal(visible) {
     this.setState({ modalVisible: visible });
  }

  toggleRemoveId(id) {
    this.setState((state) => {
      return ({
        removeId: state.removeId = id,
        modalVisible: state.modalVisible = true
      })
    })
  }

  incrementAmount = (product) => {
    const { updateAmountResquest } = this.props;

    updateAmountResquest(product.id, product.amount + 1)
  }

  decrementAmount = (product) => {
    const { updateAmountResquest } = this.props;

    updateAmountResquest(product.id, product.amount - 1)
  }

  removeProduct = (id) => {
    const { removeToCartSuccess } = this.props
    this.toggleModal(false)

    removeToCartSuccess(id)
  }
  render() {
    const { products, total } = this.props;
    const { modalVisible, removeId } = this.state
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
                <ButtonTrash onPress={() => this.toggleRemoveId(item.id)}>
                  <Icon name="trash" size={21} color="#7159c1" />
                </ButtonTrash>
              </ProductItem>
              <Actions>
                <ActionLeft>
                  <ButtonActionMinus onPress={() => this.decrementAmount(item)}>
                    <Minus name="minus" size={25} color="#7159c1" />
                  </ButtonActionMinus>
                  <AmountText
                    numberOfLines={1}
                  >{item.amount}</AmountText>
                  <ButtonActionPlus onPress={() => this.incrementAmount(item)}>
                    <Plus name="plus" size={25} color="#7159c1" />
                  </ButtonActionPlus>
                </ActionLeft>
                <Subtotal>{item.subTotal}</Subtotal>
              </Actions>
              {modalVisible
                && (
                  <ModalBox
                      animationType="none"
                      visible={modalVisible}
                      onRequestClose={() => this.toggleModal(false)}
                      onDismiss={() => this.toggleRemoveId(null)}
                    >
                      <InfoBox>
                      <TitleModal>Deseja remover o item do carrinho?</TitleModal>
                      <ButtonCancel
                        onPress={() => this.toggleModal(false)}
                      >
                        <ButtonTitleCancel>Cancelar</ButtonTitleCancel>
                      </ButtonCancel>
                      <ButtonRemove
                        onPress={() => this.removeProduct(removeId)}
                      >
                        <ButtonTitleRemove>Remover</ButtonTitleRemove>
                      </ButtonRemove>
                    </InfoBox>
                  </ModalBox>
                  )}
            </CartBox>
          ))}
          <View style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "stretch"}} >
            <TotalText>TOTAL</TotalText>
            <PriceTotal>{total || 0}</PriceTotal>
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
  products: state.cart.map(p => ({
    ...p,
    subTotal: format(p.price * p.amount)
  })),

  total: format(state.cart.reduce((total, product) => {
    return total + product.price * product.amount
  }, 0))
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
