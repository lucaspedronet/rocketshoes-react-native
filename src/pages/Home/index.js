import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as CartActions from '../../store/mudules/cart/actions'

import ProductItem from './components/ProductItem'
import api from '../../services/api'

import { Container, ProductList } from './styles';
import { format } from '../../utils/formatted'

class Home extends Component {

  state = {
    products: []
  }

  componentDidMount() {
    this.loadingProducts()
  }

  loadingProducts = async () =>{
    const response = await api.get(`/products`)

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: format(product.price),
    }))

    this.setState({ products: data })
  }

  handleAddToCart = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id)
  }

  render() {
    const { products } = this.state;
    const { amount } = this.props;

    return (
      <Container>
        <ProductList
          horizontal
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) =>
          <ProductItem handleAddToCart={this.handleAddToCart} data={item} amount={amount}  />
        }
        />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);
export default connect(mapStateToProps,mapDispatchToProps)(Home);
