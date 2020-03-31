import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux'

import PropTypes from 'prop-types'


import { ButtonHeaderRight, Circle, ButtonText } from './styles';

function HeaderRight({ cartSize }) {
  const navigation = useNavigation()
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
  cartSize: PropTypes.number.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

const mapStateToProps = state => ({
  cartSize: state.cart.length
});

export default connect(mapStateToProps)(HeaderRight)
