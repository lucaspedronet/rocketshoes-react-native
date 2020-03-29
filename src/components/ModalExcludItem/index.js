import React from 'react';
import { View, Modal, TouchableHighlight, Text } from 'react-native';

import { Container } from './styles';

export default function ModalExcludItem({ modalVisible, toggleModal, removeProduct, item }) {
  return (
    <Container>
      <Modal
      animationType={"slide"}
      transparent={false}
      visible={modalVisible}
      onRequestClose={toggleModal}
      >
        <View>
          <Text>Modal is open!</Text>
          <TouchableHighlight onPress={toggleModal(false)}
          >
            <Text>Cancelar</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={() => removeProduct(item.id)}>
            <Text>Remover</Text>
          </TouchableHighlight>
        </View>
      </Modal>
    </Container>
 )
}
