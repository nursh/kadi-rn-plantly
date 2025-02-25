import React, { useEffect } from 'react';
import { Stack } from "expo-router";
import * as QuickActions from 'expo-quick-actions';
import { Platform } from 'react-native';
import { useQuickActionRouting } from 'expo-quick-actions/router';


export default function RootLayout() {
  useQuickActionRouting();

  useEffect(() => {
    QuickActions.setItems([
      {
        title: "Add a plant",
        icon: Platform.OS === 'ios' ? 'symbol:leaf' : 'leaf',
        id: "0",
        params: { href: "/new" }
      }
    ])
  }, [])

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false, animation: 'fade' }} />
      <Stack.Screen name="onboarding" options={{
        presentation: 'modal',
        headerShown: false,
        animation: 'fade'
      }}/>
      <Stack.Screen
        name="new"
        options={{
          presentation: 'modal',
          title: "New plant"
        }}
      />
    </Stack>
  )
}
