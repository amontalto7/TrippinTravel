import React, { Component } from "react";
import TripsScreen from "./TripsScreen.js";
import SideBar from "../SideBar/SideBar.js";
import { DrawerNavigator } from "react-navigation";
const TripsScreenRouter = DrawerNavigator(
  {
    Home: { screen: TripsScreen },
    Chat: { screen: MainScreenNavigator },
    Profile: { screen: Profile }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
export default TripsScreenRouter;
