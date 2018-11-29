import React from "react";
import { createDrawerNavigator } from "react-navigation";

// User Module
import Login from "../screens/login";
import SignUp from "../screens/signUp";
import ForgetPass from "../screens/forgetPass";
import ForgetUser from "../screens/forgetUser";
import Profile from "../screens/profile";

import SideBar from "./sidebar";
import Dashboard from "../screens/dashboard";
import Listing from "../screens/listing";
import DetailPage from "../screens/detailPage";

import Privacy from "../screens/privacy";
import TermAndConditions from "../screens/terms";
import Faq from "../screens/faq";

const AppNavigator = createDrawerNavigator(
  {
    // User Module
    Login: { screen: Login },
    SignUp: { screen: SignUp },
    ForgetPass: { screen: ForgetPass },
    ForgetUser: { screen: ForgetUser },
    Profile: { screen: Profile },

    // Main App
    Dashboard: { screen: Dashboard },
    Listing: { screen: Listing },
    DetailPage: { screen: DetailPage },

    // T&C Related
    Privacy: { screen: Privacy },
    TermAndConditions: { screen: TermAndConditions },
    Faq: { screen: Faq }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default AppNavigator;
