import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'


export const Container = styled.View`
  display: flex;
  flex-direction: column;
  padding: 10px;
  display: flex;
  height: 358px;
  width: 220px;
  background: #FFF;
  border-radius: 4px;
  margin-right: 15px;
`;

export const Avatar = styled.Image`
  flex: 1;
  height: 200px;
  width: 200px;
  background: #eee;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 2,
})`
  text-align: left;
  font-size: 16px;
  color: #333;
  line-height: 18px;
  margin-top: 10px;
  margin-bottom: 5px;
`;

export const Price = styled.Text`
  font-size: 21px;
  font-weight: bold;
  color: #101010;
  margin-bottom: 5px;
`;

export const ButtonAdd = styled(RectButton)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 200px;
  height: 42px;
  color: #FFF;
  background: #7159C1;
  border-radius: 4px;
`;

export const IconBox = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 42px;
  background: rgba(0,0,0,0.1);
`;

export const IconText = styled.Text`
  color: #FFF;
  font-size: 14px;
  margin-left: 10px;
`;

export const ButtonText = styled.Text`
  flex: 1;
  color: #FFF;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;
