import React, { Component } from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  CartContainer,
  CartItem,
  ItemContainer,
  ItemImage,
  ItemDescriptions,
  ItemTitle,
  ItemPrice,
  DeleteItemContainer,
  ItemAmount,
  AmountContainer,
  AmountInput,
  Subtotal,
  IconButton,
  Total,
  TotalText,
  TotalPrice,
  EndCartButton,
} from './styles';

export default class Cart extends Component {
  state = {
    cart: [],
  };

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam('item');

    return (
      <Container>
        <CartContainer>
          <CartItem>
            <ItemContainer>
              <ItemImage source={{ uri: item.image }} />
              <ItemDescriptions>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemPrice>{item.priceFormatted}</ItemPrice>
              </ItemDescriptions>
              <DeleteItemContainer>
                <Icon name="delete-forever" color="#7159c1" size={28} />
              </DeleteItemContainer>
            </ItemContainer>
            <ItemAmount>
              <AmountContainer>
                <IconButton>
                  <Icon
                    name="remove-circle-outline"
                    color="#7159c1"
                    size={24}
                  />
                </IconButton>
                <AmountInput>{1}</AmountInput>
                <IconButton>
                  <Icon name="add-circle-outline" color="#7159c1" size={24} />
                </IconButton>
              </AmountContainer>
              <Subtotal>{item.priceFormatted}</Subtotal>
            </ItemAmount>
          </CartItem>
          <Total>
            <TotalText>TOTAL</TotalText>
            <TotalPrice>{item.priceFormatted}</TotalPrice>
          </Total>
          <EndCartButton>
            <Text style={{ fontWeight: 'bold', color: '#FFF' }}>
              FINALIZAR PEDIDO
            </Text>
          </EndCartButton>
        </CartContainer>
      </Container>
    );
  }
}
