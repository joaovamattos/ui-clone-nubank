import { Animated } from 'react-native';
import styled from 'styled-components/native';
import Constants from 'expo-constants';

export const Container = styled.View`
  flex: 1;
  background: #81269d;
  padding-top: ${Constants.statusBarHeight}px;
  justify-content: center;  
`;

export const Content = styled.View`
  flex: 1;
  max-height: 400px;
  z-index: 5;
`;

export const Card = styled(Animated.View)`
  flex: 1;
  background: #fff;
  border-radius: 4px;
  margin: 0 20px;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
 `;

export const CardHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 30px 30px 0;
`;

export const CardContent = styled.View`
  flex: 1;
  padding: 0 30px;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #777;
`;

export const Description = styled.Text`
  font-size: 32px;
  margin-top: 3px;
  color: #333;
`;

export const CardFooter = styled.View`
  padding: 30px;
  background: #eee;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Annotation = styled.Text`
  font-size: 13px;
  margin-left: 8px;
  color: #333;
  max-width: 80%;
`;

export const AnnotationContent = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DescriptionNotVisible = styled.View`
  background: #eee;
  width: 200px;
  height: 36px;
  margin-top: 10px;
`;
