import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux'

import PropTypes from 'prop-types'

import { ButtonHeaderRight, Circle, ButtonText } from './styles';

function HeaderRight() {
  const navigation = useNavigation()
  const cartSize = useSelector(state => state.cart.length)
  return (
    <ButtonHeaderRight onPress={() => navigation.navigate("Cart")}>
      <Circle>
        <ButtonText>{cartSize}</ButtonText>
      </Circle>
      <Icon
        name="shopping-basket"
        size={23}
        color="#FFF"
      />
    </ButtonHeaderRight>
  );
}

HeaderRight.propTypes = {
  cartSize: PropTypes.number,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

export default HeaderRight
