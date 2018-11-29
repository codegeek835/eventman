import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title
} from "native-base";
export default class HeaderMultipleIconExample extends Component {
  render() {
    return (
      <Header>
        <Left>
          <Button
            transparent
            onPress={() => this.props.navigation.navigate("DrawerOpen")}
          >
            <Icon name="menu" />
          </Button>
        </Left>
        <Body>
          <Title>{this.props.title}</Title>
        </Body>
        <Right />
      </Header>
    );
  }
}
