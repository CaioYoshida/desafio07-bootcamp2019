import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, Flatlist } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { formatPrice } from '../../util/format';

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
  EmptyCart,
} from './styles';

class Cart extends Component {
  componentDidMount() {}

  render() {
    const { cart } = this.props;
    console.log(cart);

    return (
      <Container>
        {cart.length ? (
          <>
            <CartContainer>
              {cart.map(item => (
                <CartItem>
                  <ItemContainer>
                    <ItemImage source={{ uri: item.image }} />
                    <ItemDescriptions>
                      <ItemTitle>{item.title}</ItemTitle>
                      <ItemPrice>{item.formattedPrice}</ItemPrice>
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
                        <Icon
                          name="add-circle-outline"
                          color="#7159c1"
                          size={24}
                        />
                      </IconButton>
                    </AmountContainer>
                    <Subtotal>{item.formattedPrice}</Subtotal>
                  </ItemAmount>
                </CartItem>
              ))}
              <Total>
                <TotalText>TOTAL</TotalText>
                <TotalPrice>{1000}</TotalPrice>
              </Total>
              <EndCartButton>
                <Text style={{ fontWeight: 'bold', color: '#FFF' }}>
                  FINALIZAR PEDIDO
                </Text>
              </EndCartButton>
            </CartContainer>
          </>
        ) : (
          <>
            <EmptyCart />
          </>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart.map(item => ({
    ...item,
    formattedPrice: formatPrice(item.price),
  })),
});

export default connect(mapStateToProps)(Cart);
