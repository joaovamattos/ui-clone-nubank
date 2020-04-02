import { StyleSheet, Animated } from 'react-native';
import styled from 'styled-components/native';


export const Container = styled(Animated.ScrollView).attrs({
  showsVerticalScrollIndicator: false,
})`
  margin: 0 30px;
`;

export const Code = styled.View`
  overflow: hidden;
  background: #fff;
  padding: 8px;
  align-self: center;
`;

export const Nav = styled.View`
  margin-top: 30px;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: rgba(255, 255, 255, 0.8); 
  align-self: stretch;
`;

export const NavBox = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const NavItem = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(255, 255, 255, 0.8); 
`;


export const NavText = styled.Text`
  font-size: 15px;
  color: #fff;
  margin-left: 12px; 
`;

export const SignOutButton = styled.TouchableOpacity`
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: rgba(255, 255, 255, 0.8); 
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  padding: 12px;
  margin-top: 12px;
`;

export const SignOutButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
`;

export const AccountContainer = styled.View`
  align-items: center;
  margin-top: 10px;
`;

export const AccountText = styled.Text`
  color: #fff;
  font-size: 12px;
  margin-top: 2px;
`;

export const AccountTextBold = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight: bold;
`;
