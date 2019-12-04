import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, Flatlist } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

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

  incrementAmount = item => {
    const { updateAmount } = this.props;

    updateAmount(item.id, item.amount + 1);
  }

  decrementAmount = item => {
    const { updateAmount } = this.props;

    updateAmount(item.id, item.amount - 1);
  }

  handleRemoveItem = item => {
    const { removeFromCart } = this.props;

    removeFromCart(item);
  };

  render() {
    const { cart, total } = this.props;

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
                    <DeleteItemContainer onPress={() => this.handleRemoveItem(item)}>
                      <Icon name="delete-forever" color="#7159c1" size={28} />
                    </DeleteItemContainer>
                  </ItemContainer>
                  <ItemAmount>
                    <AmountContainer>
                      <IconButton onPress={() => this.decrementAmount(item)}>
                        <Icon
                          name="remove-circle-outline"
                          color="#7159c1"
                          size={24}
                        />
                      </IconButton>
                      <AmountInput>{item.amount}</AmountInput>
                      <IconButton onPress={() => this.incrementAmount(item)}>
                        <Icon
                          name="add-circle-outline"
                          color="#7159c1"
                          size={24}
                        />
                      </IconButton>
                    </AmountContainer>
                    <Subtotal>{item.subtotal}</Subtotal>
                  </ItemAmount>
                </CartItem>
              ))}
              <Total>
                <TotalText>TOTAL</TotalText>
                <TotalPrice>{total}</TotalPrice>
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
    subtotal: formatPrice(item.amount * item.price),
  })),
  total: formatPrice(state.cart.reduce((total, item) => {
    return total + item.amount * item.price;
  }, 0))
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
