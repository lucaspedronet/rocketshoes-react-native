import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 20px;
  background: #191920;
`;

export const CartList = styled.View.attrs({
})`
  padding: 10px;
  margin-bottom: 20px;
  background: #FFF;
  border-radius: 4px;
`;

export const CartBox = styled.View`
  display: flex;
  flex-direction: column;
  padding: 0px;
  margin-bottom: 20px;

`;

export const ProductItem = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ImageItem = styled.Image`
  width: 80px;
  height: 80px;
  margin-right: 10px;
  background: #EEE;
`;

export const TextCenter = styled.View`
  width: 163px;
  flex: 1;

`;

export const Title = styled.Text.attrs({
  numberOfLines: 3
})`
  color: #333333;
  font-size: 14px;
  font-weight: 900;
  line-height: 16px;
`;

export const Price = styled.Text`
  color: #333333;
  font-size: 16px;
  font-weight: bold;
  margin-top: auto;
`;

export const ButtonTrash = styled(RectButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50px;
`

export const Actions = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  background: #EEEEEE;
  border-radius: 4px;

`;

export const ActionLeft = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 80px;
  margin-left: 10px;
`

export const ButtonActionMinus = styled(RectButton)`

`

export const ButtonActionPlus = styled(RectButton)`

`

export const AmountText = styled.Text`
  margin-left: 10px;
  margin-right: 10px;
`;

export const Subtotal = styled.Text`
  margin-right: 10px;
  color: #333333;
  font-size: 16px;
  font-weight: bold;
`;

export const ButtonFinaliza = styled(RectButton)`
  display: flex;
  height: 42px;
  background: #7159c1;
  justify-content: center;
  align-items: center;
  color: #FFF;
  border-radius: 4px;
`;

export const PriceTotal = styled.Text`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  color: #000;
  margin-bottom: 30px;
`;

export const TotalText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #999999;
`;

export const ButtonFinalizaText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  color: #FFF;
`;
