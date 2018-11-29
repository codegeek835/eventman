import React, { Component } from "react";
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Col,
  View
} from "native-base";
export default class Login extends Component {
  render() {
    return (
      <Container>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            marginTop: -30
          }}
        >
          <Content padder>
            <Form>
              <Item floatingLabel>
                <Label>Username</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Label>Password</Label>
                <Input />
              </Item>
              <Button full rounded primary style={{ marginTop: 20 }}>
                <Text>Login</Text>
              </Button>
            </Form>
          </Content>
        </View>
      </Container>
    );
  }
}
