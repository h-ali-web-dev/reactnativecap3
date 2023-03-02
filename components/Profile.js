import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

const ProfileScreen = () => {
  const [email, setEmail] = React.useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#CBD2D9",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#333333",
    textAlign: "center",
    fontSize: 20,
  },
});

export default ProfileScreen;
