import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  ProductContainer,
  ProductImage,
  ProductText,
  ProductPrice,
  AddProductButton,
  ButtonArea,
  ButtonText,
  ProductAmountText,
} from './styles';

function Main({ amount, addToCartRequest }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleAddProduct(item) {
    addToCartRequest(item.id);
  }

  return (
    <Container>
      <FlatList
        horizontal
        data={products}
        renderItem={({ item }) => (
          <ProductContainer>
            <ProductImage source={{ uri: item.image }} />
            <ProductText>{item.title}</ProductText>
            <ProductPrice>{item.priceFormatted}</ProductPrice>
            <AddProductButton onPress={() => handleAddProduct(item)}>
              <ButtonArea>
                <Icon name="add-shopping-cart" color="#FFF" size={24} />
                <ProductAmountText>{amount[item.id] || 0}</ProductAmountText>
              </ButtonArea>
              <ButtonText>ADICIONAR</ButtonText>
            </AddProductButton>
          </ProductContainer>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </Container>
  );
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, item) => {
    amount[item.id] = item.amount;
    return amount;
  }, {}),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
