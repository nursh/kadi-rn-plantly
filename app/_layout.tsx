import { Tabs } from "expo-router";
import React from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Entypo from "@expo/vector-icons/Entypo";
import { theme } from "@/constants/theme";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colorGreen
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="canadian-maple-leaf" size={size} color={color} />
          ),
          tabBarShowLabel: false
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ size, color }) => <Entypo name="user" size={size} color={color} />,
          tabBarShowLabel: false
        }}
      />
    </Tabs>
  );
}
