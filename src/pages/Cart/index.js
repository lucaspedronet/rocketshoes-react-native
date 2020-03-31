import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { updateAmountResquest, removeToCartSuccess, removeToCartRequest} from '../../store/mudules/cart/actions'

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

import ModalExcludItem from '../../components/ModalExcludItem'
import Icon from 'react-native-vector-icons/FontAwesome'
import Plus from 'react-native-vector-icons/AntDesign'
import Minus from 'react-native-vector-icons/AntDesign'
import { format } from '../../utils/formatted';

export default function Cart () {

  const dispatch = useDispatch()
  const [modalVisible, setModalVisible] = useState(false)
  const [removeId, setRemoveId] = useState(null)

  const total = useSelector((state) =>
    format(state.cart.reduce((total, product) => {
      return total + product.price * product.amount
    }, 0),
  ));

  const products = useSelector((state) =>
    state.cart.map(p => ({
      ...p,
      subTotal: format(p.price * p.amount)
      })
    ),
  );

  function toggleModal(visible) {
    setModalVisible(visible)
  }

  function toggleRemoveId(id) {
    setModalVisible(true)
    setRemoveId(id)
  }

  const incrementAmount = (product) => {

    dispatch(updateAmountResquest(product.id, product.amount + 1))
  }

  const decrementAmount = (product) => {

    dispatch(updateAmountResquest(product.id, product.amount - 1))
  }

  const removeProduct = (id) => {
    toggleModal(false)

    dispatch(removeToCartRequest(id))
  }

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
              <ButtonTrash onPress={() => toggleRemoveId(item.id)}>
                <Icon name="trash" size={21} color="#7159c1" />
              </ButtonTrash>
            </ProductItem>
            <Actions>
              <ActionLeft>
                <ButtonActionMinus onPress={() => decrementAmount(item)}>
                  <Minus name="minus" size={25} color="#7159c1" />
                </ButtonActionMinus>
                <AmountText
                  numberOfLines={1}
                >{item.amount}</AmountText>
                <ButtonActionPlus onPress={() => incrementAmount(item)}>
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
                    onRequestClose={() => toggleModal(false)}
                    onDismiss={() => toggleRemoveId(null)}
                  >
                    <InfoBox>
                    <TitleModal>Deseja remover o item do carrinho?</TitleModal>
                    <ButtonCancel
                      onPress={() => toggleModal(false)}
                    >
                      <ButtonTitleCancel>Cancelar</ButtonTitleCancel>
                    </ButtonCancel>
                    <ButtonRemove
                      onPress={() => removeProduct(removeId)}
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
