import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Form = styled.View`
  flex: 1;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
  placeHolderTextColor: '#999',
})`
  flex: 1;
  height: 40px;
  background: #eee;
  border-radius: 4px;
  padding: 0 15px;
  border: 1px solid #eee;
`;

export const Submit = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #7159c1;
  border-radius: 4px;
  margin-left: 10px;
  padding: 24px 12px;
`;

export const SubmitText = styled.Text`
  color: white;
  font-weight: bold;
  text-transform: uppercase;
`;
