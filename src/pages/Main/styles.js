import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #191920;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ProductContainer = styled.View`
  background-color: #fff;
  padding: 15px;
  margin: 10px;
  border-radius: 4px;
  height: 400px;
  width: 270px;
`;

export const ProductImage = styled.Image`
  align-self: center;
  height: 200px;
  width: 200px;
`;

export const ProductText = styled.Text`
  font-weight: bold;
  margin-top: 10px;
`;

export const ProductPrice = styled.Text`
  font-size: 21px;
  font-weight: bold;
  margin-top: auto;
  margin-bottom: 5px;
`;

export const AddProductButton = styled.TouchableOpacity`
  border-radius: 4px;
  margin-top: auto;
  flex-direction: row;
  background-color: #7159c1;
  align-items: center;
`;

export const ButtonArea = styled.View`
  padding: 12px;
  border: 0;
  flex-direction: row;
  background: rgba(0, 0, 0, 0.1);
  align-items: center;
  overflow: hidden;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  text-align: center;
  font-weight: bold;
  color: #fff;
  font-size: 16px;
  margin-left: 40px;
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin: 0px 0px 0px 5px;
`;
