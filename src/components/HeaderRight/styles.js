import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'

export const ButtonHeaderRight = styled(RectButton)`
  display: flex;
  /* flex-direction: row; */
  justify-content: center;
  align-items: baseline;
  margin-right: 25px;
  background: transparent;
`;

export const Circle = styled.View`
  background: #7159c1;
  border-radius: 8px;
  min-width: 16px;
  min-height: 16px;
  padding: 0px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: -9px;
  margin-left: 18px;
`;

export const ButtonText = styled.Text`
  color: #FFF;
  font-size: 12px;
`;
