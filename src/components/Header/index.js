import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { Container, Top, Logo, Title } from './styles';

import logo from '../../assets/Nubank_Logo.png';

export default function Header({ opened }) {
  return (
  <Container>
    <Top>
      <Logo source={logo} />
      <Title>João</Title>
    </Top>
    <MaterialIcons name="keyboard-arrow-down" size={20} color="#fff" />
  </Container>
  );
}