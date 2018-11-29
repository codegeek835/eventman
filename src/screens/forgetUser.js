import React from "react";
import { StatusBar } from "react-native";
import {
  Container,
  Button,
  Body,
  Content,
  Text,
  Card,
  CardItem
} from "native-base";
import Header from "../components/Header";
export default class ForgetUser extends React.Component {
  render() {
    return (
      <Container>
        <Header title={"Forget User Name"} />
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Chat App to talk some awesome people!</Text>
              </Body>
            </CardItem>
          </Card>
          <Button
            full
            rounded
            dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Chat")}
          >
            <Text>Chat With People</Text>
          </Button>
          <Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Profile")}
          >
            <Text>Goto Profiles</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
