import React, { Component } from 'react';

import { connect } from 'react-redux'

import ProductItem from './components/ProductItem'
import api from '../../services/api'

import { Container, ProductList } from './styles';

class Home extends Component {

  state = {
    products: [
    ]
  }

  componentDidMount() {
    this.loadingProducts()
  }

  loadingProducts = async () =>{
    const response = await api.get(`/products`)

    this.setState({ products: response.data })
  }

  handleAddToCart = product => {
    const { dispatch } = this.props;

    dispatch({
      type: 'ADD_TO_CART',
      product
    })
  }

  render() {
    const { products } = this.state;
    return (
      <Container>
        <ProductList
          horizontal
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => <ProductItem handleAddToCart={this.handleAddToCart} data={item} />}
        />
      </Container>
    );
  }
}

export default connect()(Home);
