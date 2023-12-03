import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import stackNavigator from "./stacknavigator";
import profile from "../screens 1/profile";
import logout from "../screens 1/logoutscreen";
import customsidebarmenu from "../screens 1/customsidebarmenu";

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      light_theme: true
    };
  }

  componentDidMount() {
    this.setState({ light_theme: theme === "light" ? true : false });
  }

  render() {
    let props = this.props;
    return (
      <Drawer.Navigator
        drawerContent={props => <CustomSidebarMenu {...props} />}
        screenOptions={{
          headerShown: false, 
          drawerActiveTintColor: "#e91e63",
          drawerInactiveTintColor: "grey",
          itemStyle: { marginVertical: 5 }
        }}
      >
        <Drawer.Screen
          name="MyHome"
          component={stackNavigator}
          options={{ unmountOnBlur: true }}
        />
        <Drawer.Screen
          name="Profile"
          component={profile}
          options={{ unmountOnBlur: true }}
        />
        <Drawer.Screen
          name="Logout"
          component={logout}
          options={{ unmountOnBlur: true }}
        />
      </Drawer.Navigator>
    );
  }
}
