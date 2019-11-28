import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, BasketContainer, ItemCount } from './styles';

function Header({ navigation }) {
  return (
    <Container>
      <Logo />
      <BasketContainer onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-basket" color="#FFF" size={24} />
        <ItemCount>{0}</ItemCount>
      </BasketContainer>
    </Container>
  );
}

export default Header;
