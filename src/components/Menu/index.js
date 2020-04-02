import React from 'react';
import QRCode from 'react-native-qrcode-svg';

import { MaterialIcons } from '@expo/vector-icons';

import { Container, Code, Nav, NavBox, NavItem, NavText, SignOutButton, SignOutButtonText, AccountContainer, AccountText, AccountTextBold } from './styles';

export default function Menu({ translateY }) {
  return (
    <Container style={{
      opacity: translateY.interpolate({
        inputRange: [0, 150],
        outputRange: [0, 1],
      })
    }}>
      <Code> 
        <QRCode
          value="https://github.com/joaovamattos"
          size={90}
          backgroundColor="#fff"
          color="#81269d"
        />
      </Code>

      <AccountContainer>
        <AccountText>Banco <AccountTextBold>xxx - Nu UI Clone</AccountTextBold></AccountText>
        <AccountText>Agência <AccountTextBold>xxxx</AccountTextBold></AccountText>
        <AccountText>Conta <AccountTextBold>xxxxxxxx-x</AccountTextBold></AccountText>
      </AccountContainer>

      <Nav>
        <NavItem>
          <NavBox>
            <MaterialIcons name="help-outline" size={20} color="#fff" />
            <NavText>Me ajuda</NavText>
          </NavBox>
          <MaterialIcons name="keyboard-arrow-right" size={20} color="#fff" />
        </NavItem>

        <NavItem>
          <NavBox>
            <MaterialIcons name="person-outline" size={20} color="#fff" />
            <NavText>Perfil</NavText>
          </NavBox>
          <MaterialIcons name="keyboard-arrow-right" size={20} color="#fff" />
        </NavItem>

        <NavItem>
          <NavBox>
            <MaterialIcons name="attach-money" size={20} color="#fff" />
            <NavText>Configurar conta</NavText>
          </NavBox>
          <MaterialIcons name="keyboard-arrow-right" size={20} color="#fff" />
        </NavItem>

        <NavItem>
          <NavBox>
            <MaterialIcons name="credit-card" size={20} color="#fff" />
            <NavText>Configurar cartão</NavText>
          </NavBox>
          <MaterialIcons name="keyboard-arrow-right" size={20} color="#fff" />
        </NavItem>

        <NavItem>
          <NavBox>
            <MaterialIcons name="store" size={20} color="#fff" />
            <NavText>Perdir conta PJ</NavText>
          </NavBox>
          <MaterialIcons name="keyboard-arrow-right" size={20} color="#fff" />
        </NavItem>
        
        <NavItem>
          <NavBox>
            <MaterialIcons name="smartphone" size={20} color="#fff" />
            <NavText>Configurações do app</NavText>
          </NavBox>
          <MaterialIcons name="keyboard-arrow-right" size={20} color="#fff" />
        </NavItem>
      </Nav>

      <SignOutButton onPress={() => {}}>
        <SignOutButtonText>SAIR DA CONTA</SignOutButtonText>
      </SignOutButton>
    </Container>
  )
}