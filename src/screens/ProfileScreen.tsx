import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require("../assets/images/profile-bg.jpg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.overlay}>
          <View style={styles.profileSection}>
            <Image
              source={require("../assets/images/profile-pic.jpg")} // opsional
              style={styles.avatar}
            />
            <Text style={styles.name}>D BEST AR</Text>
            <Text style={styles.role}>IT Specialist • Speaker</Text>
          </View>

          <View style={styles.infoBox}>
            <View style={styles.infoRow}>
              <Text style={styles.label}>Email</Text>
              <Text style={styles.value}>abesttar@gmail.com</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.label}>Location</Text>
              <Text style={styles.value}>Sukabumi, Indonesia</Text>
            </View>
            <View style={styles.infoRow}>
              <Text style={styles.label}>Member Since</Text>
              <Text style={styles.value}>January 2025</Text>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editText}>Edit Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.logoutButton}>
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    paddingHorizontal: 25,
    paddingTop: 100,
    justifyContent: "space-between",
    paddingBottom: 60,
  },
  profileSection: {
    alignItems: "center",
  },
  avatar: {
    width: 110,
    height: 110,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: "#00C896",
    marginBottom: 15,
  },
  name: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  role: {
    color: "#E0E0E0",
    fontSize: 14,
    marginTop: 5,
  },
  infoBox: {
    backgroundColor: "rgba(255,255,255,0.12)",
    borderRadius: 15,
    padding: 20,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  label: {
    color: "#BDBDBD",
    fontSize: 14,
  },
  value: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  editButton: {
    flex: 1,
    marginRight: 10,
    backgroundColor: "#00C896",
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
  },
  logoutButton: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: "#FF5C5C",
    paddingVertical: 14,
    borderRadius: 30,
    alignItems: "center",
  },
  editText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
