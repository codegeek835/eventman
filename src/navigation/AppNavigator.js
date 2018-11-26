import React from "react";
import { DrawerNavigator } from "react-navigation";
import Login from "../screens/login";
import Home from "../screens/home";
import Listing from "../screens/listing";
import SideBar from "./sidebar";
const AppNavigator = DrawerNavigator(
  {
    Home: { screen: Home },
    Login: { screen: Login },
    Listing: { screen: Listing }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default AppNavigator;
