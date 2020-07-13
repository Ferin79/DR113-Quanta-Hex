import React, { useContext } from "react";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import {
  Avatar,
  Title,
  Caption,
  Drawer as DrawerPaper,
  Text,
  TouchableRipple,
  Switch,
} from "react-native-paper";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import useTheme from "../hooks/useTheme.js";
import { GlobalContext } from "../state/RootReducer";
import HomeStack from "./HomeStack";
import SettingsStack from "./SettingsStack";

const DrawerScreen = createDrawerNavigator();

const Drawer = () => {
  return (
    <DrawerScreen.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <DrawerScreen.Screen name="HomeDrawer" component={HomeStack} />
      <DrawerScreen.Screen name="SettingsDrawer" component={SettingsStack} />
    </DrawerScreen.Navigator>
  );
};

const DrawerContent = (props) => {
  const { ThemeState, ThemeDispatch } = useContext(GlobalContext);
  const themeStyle = useTheme();

  return (
    <View style={{ flex: 1, backgroundColor: themeStyle.backgroundColor }}>
      <DrawerContentScrollView {...props}>
        <View style={{ flex: 1 }}>
          <View style={{ paddingLeft: 20 }}>
            <View style={{ flexDirection: "row", marginTop: 15 }}>
              <Avatar.Image
                source={{ uri: "https://placeimg.com/640/480/any" }}
                size={50}
              />
              <View style={{ marginLeft: 15, flexDirection: "column" }}>
                <Title style={{ color: themeStyle.textColor }}>
                  Patel Ferin
                </Title>
                <Caption style={{ color: themeStyle.textColor }}>
                  ferinpatel79@gmail.com
                </Caption>
              </View>
            </View>
          </View>

          <DrawerPaper.Section style={{ marginTop: 15 }}>
            <DrawerItem
              label="Home"
              icon={({ size }) => (
                <MaterialCommunityIcons
                  name="home-outline"
                  color={themeStyle.textColor}
                  size={size}
                  onPress={() => {
                    props.navigation.navigate("HomeDrawer");
                  }}
                />
              )}
              onPress={() => {
                props.navigation.navigate("HomeDrawer");
              }}
              labelStyle={{ color: themeStyle.textColor }}
            />
            <DrawerItem
              label="Profile"
              icon={({ size }) => (
                <MaterialCommunityIcons
                  name="account-outline"
                  color={themeStyle.textColor}
                  size={size}
                  onPress={() => {}}
                />
              )}
              labelStyle={{ color: themeStyle.textColor }}
            />
            <DrawerItem
              label="Settings"
              icon={({ size }) => (
                <MaterialCommunityIcons
                  name="settings-outline"
                  color={themeStyle.textColor}
                  size={size}
                  onPress={() => {
                    props.navigation.navigate("SettingsDrawer");
                  }}
                />
              )}
              onPress={() => {
                props.navigation.navigate("SettingsDrawer");
              }}
              labelStyle={{ color: themeStyle.textColor }}
            />
          </DrawerPaper.Section>

          <DrawerPaper.Section title="Preferences" shouldRasterizeIOS>
            <TouchableRipple
              onPress={() => ThemeDispatch({ type: "TOGGLE_THEME" })}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingVertical: 12,
                  paddingHorizontal: 16,
                }}
              >
                <Text style={{ color: themeStyle.textColor }}>Dark Theme</Text>
                <Switch
                  value={!ThemeState.lightTheme}
                  onValueChange={() => ThemeDispatch({ type: "TOGGLE_THEME" })}
                />
              </View>
            </TouchableRipple>
          </DrawerPaper.Section>
        </View>
      </DrawerContentScrollView>
      <DrawerPaper.Section
        style={{
          marginBottom: 15,
          borderTopColor: "#f4f4f4",
          borderTopWidth: 1,
        }}
      >
        <DrawerItem
          labelStyle={{ color: themeStyle.textColor }}
          label="Sign Out"
          icon={({ size }) => (
            <MaterialCommunityIcons
              name="exit-to-app"
              color={themeStyle.textColor}
              size={size}
              onPress={() => {}}
            />
          )}
        />
      </DrawerPaper.Section>
    </View>
  );
};
export default Drawer;