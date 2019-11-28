import React, { Component } from 'react';
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

export default class Main extends Component {
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

  render() {
    const { navigation } = this.props;
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
              <AddProductButton
                onPress={() => navigation.navigate('Cart', { item })}
              >
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
