import React, { useState, useEffect } from 'react';
import { addToCartRequest } from '../../store/mudules/cart/actions'
import { useDispatch, useSelector } from 'react-redux'

import ProductItem from './components/ProductItem'
import api from '../../services/api'

import { Container, ProductList } from './styles';
import { format } from '../../utils/formatted'

export default function Home() {

  const dispatch = useDispatch()
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function loadingProducts() {
      const response = await api.get(`/products`)

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: format(product.price),
      }))

      setProducts(data)
    }

    loadingProducts()
  }, [])

  const amount = useSelector((state =>
    state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {})))


  function handleAddToCart(id ) {
    dispatch(addToCartRequest(id))
  }
  return (
    <Container>
      <ProductList
        horizontal
        data={products}
        keyExtractor={product => String(product.id)}
        renderItem={({ item }) =>
        <ProductItem handleAddToCart={handleAddToCart} data={item} amount={amount}  />
      }
      />
    </Container>
  );
}
