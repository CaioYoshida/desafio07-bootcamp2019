import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../services/api';

import { formatPrice } from '../../util/format';

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

class Main extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  handleAddProduct = item => {
    const { dispatch } = this.props;

    dispatch({
      type: 'ADD_TO_CART',
      item,
    });
  };

  render() {
    const { cart } = this.props;
    const { products } = this.state;

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
              <AddProductButton onPress={() => this.handleAddProduct(item)}>
                <ButtonArea>
                  <Icon name="add-shopping-cart" color="#FFF" size={24} />
                  <ProductAmountText>{0}</ProductAmountText>
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
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Main);
