import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

import { Animated } from "react-native";
import { PanGestureHandler, State } from "react-native-gesture-handler";

import Header from "../../components/Header";
import Menu from "../../components/Menu";
import Tabs from "../../components/Tabs";

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Description,
  Annotation,
  AnnotationContent,
  DescriptionNotVisible
} from "./styles";

export default function Main() {
  let offset = 0;
  const [visibility, setVisibility] = useState(true);

  function handleVisibityChange() {
    setVisibility(!visibility);
  }

  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY
        }
      }
    ],
    { useNativeDriver: true }
  );

  function onHandlerStateChange(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false;
      const { translationY } = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true
      }).start(() => {
        (offset = opened ? 380 : 0), translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <Container>
      <Header />

      <Content>
        <Menu translateY={translateY} />

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Card
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [-350, 0, 380],
                    outputRange: [-30, 0, 380],
                    extrapolate: "clamp"
                  })
                }
              ]
            }}
          >
            <CardHeader>
              <AnnotationContent>
                <Feather name="database" size={24} color="#777" />
                <Title style={{ marginLeft: 16 }}>Conta</Title>
              </AnnotationContent>
              {visibility ? (
                <Feather
                  name="eye-off"
                  size={24}
                  color="#777"
                  onPress={handleVisibityChange}
                />
              ) : (
                <Feather
                  name="eye"
                  size={24}
                  color="#777"
                  onPress={handleVisibityChange}
                />
              )}
            </CardHeader>
            <CardContent>
              <Title>Saldo disponível</Title>
              {visibility ? (
                <Description>R$ 7.999.68</Description>
              ) : (
                <DescriptionNotVisible />
              )}
            </CardContent>
            <CardFooter>
              <AnnotationContent>
                <MaterialIcons name="local-atm" size={28} color="#666" />
                <Annotation>Boleto de R$ 349,95 pago ontem</Annotation>
              </AnnotationContent>
              <MaterialIcons
                name="keyboard-arrow-right"
                size={20}
                color="#666"
              />
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>

      <Tabs translateY={translateY} />
    </Container>
  );
}
