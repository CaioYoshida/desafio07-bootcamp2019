import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #191920;
  padding: 20px;
  flex: 1;
  flex-direction: column;
`;

export const CartContainer = styled.View`
  background-color: #fff;
  border-radius: 4px;
  padding: 10px;
`;

export const CartItem = styled.View``;

export const ItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ItemImage = styled.Image`
  height: 100px;
  width: 100px;
  margin-right: 10px;
`;

export const ItemDescriptions = styled.View`
  width: 180px;
  justify-content: space-around;
`;

export const ItemTitle = styled.Text`
  font-size: 14px;
  margin-bottom: 5px;
`;

export const ItemPrice = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;

export const DeleteItemContainer = styled.TouchableOpacity`
  margin-left: 10px;
  justify-content: center;
`;

export const ItemAmount = styled.View`
  background-color: #eee;
  height: 50px;
  border-radius: 4px;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const AmountContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AmountInput = styled.TextInput`
  background-color: #fff;
  width: 50px;
  padding: 6px;
  border: 1px solid #ddd;
  margin: 0 5px;
  border-radius: 2px;
`;

export const Subtotal = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;

export const IconButton = styled.TouchableOpacity``;

export const Total = styled.View`
  padding: 20px;
  align-items: center;
`;

export const TotalText = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #aaa;
  margin-bottom: 5px;
`;

export const TotalPrice = styled.Text`
  font-weight: bold;
  font-size: 28px;
`;

export const EndCartButton = styled.TouchableOpacity`
  background-color: #7159c1;
  height: 50px;
  border-radius: 4px;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;
