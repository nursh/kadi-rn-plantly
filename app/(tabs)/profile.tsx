import { useUserStore } from '@/store/userStore';
import { theme } from '@/theme';
import React from 'react';
import { View, StyleSheet, Button } from "react-native";

export default function ProfileScreen() {
  const toggleHasOnboarded = useUserStore((store) => store.toggleHasOnboarded);

  return (
    <View style={styles.container}>
      <Button title="Back to onboarding" onPress={toggleHasOnboarded} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
  },
});
