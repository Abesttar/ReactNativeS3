import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Image,
  Pressable,
  StatusBar,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";

type LabuanBajoScreenProp = StackNavigationProp<RootStackParamList, "LabuanBajo">;

const LabuanBajoScreen = () => {
  const navigation = useNavigation<LabuanBajoScreenProp>();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
        <ImageBackground
          source={require("../assets/images/labuanbajo.jpg")}
          style={styles.imageBackground}
        >
          <LinearGradient
            colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.9)"]}
            style={styles.overlay}
          >
            <View style={styles.header}>
              <Pressable onPress={() => navigation.goBack()}>
                <Icon name="arrow-back" size={26} color="#fff" />
              </Pressable>
              <Text style={styles.headerTitle}>Labuan Bajo</Text>
              <View style={{ width: 26 }} />
            </View>

            <View style={styles.titleContainer}>
              <Text style={styles.title}>Discover Geopark</Text>
              <Text style={styles.location}>South Sukabumi, Indonesia</Text>
            </View>
          </LinearGradient>
        </ImageBackground>

        <View style={styles.content}>
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.description}>
            Geopark adalah surga alam yang memadukan pesona geologi, keanekaragaman hayati, dan budaya dalam satu lanskap menakjubkan. 
            Di sini, hamparan tebing batu purba berdiri megah, lembah hijau terhampar luas, air terjun jatuh lembut di antara bebatuan, 
            dan jejak waktu terukir di setiap lapisan bumi.
          </Text>

          <Text style={styles.sectionTitle}>Gallery</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[
              require("../assets/images/cimarinjung.jpg"),
              require("../assets/images/cikanteh.jpg"),
              require("../assets/images/awang.jpg"),
            ].map((img, index) => (
              <Image key={index} source={img} style={styles.galleryImage} />
            ))}
          </ScrollView>

          <Text style={styles.sectionTitle}>Highlights</Text>
          {[
            "Explore Curug Cimarinjung",
            "Trekking to Puncak Darma",
            "Sunset at Palangpang Beach",
            "Discover Ciletuh Amphitheater",
          ].map((item, index) => (
            <View key={index} style={styles.highlightItem}>
              <Icon name="checkmark-circle" size={22} color="#00C896" />
              <Text style={styles.highlightText}>{item}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* ✅ Tombol yang sudah di-update */}
      <Pressable
        style={({ pressed }) => [
          styles.bookNowButton,
          { backgroundColor: pressed ? "#D95A2B" : "#FF7043" },
        ]}
        onPress={() => navigation.navigate("MainTabs", { screen: "Ticket" })}
      >
        <Text style={styles.bookNowText}>Pesan Sekarang</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0C1B1E" },
  imageBackground: { width: "100%", height: 350 },
  overlay: { flex: 1, justifyContent: "space-between", padding: 20 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
  },
  headerTitle: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  titleContainer: { marginBottom: 30 },
  title: { color: "#fff", fontSize: 32, fontWeight: "bold" },
  location: { color: "#E0E0E0", fontSize: 16, marginTop: 4 },
  content: { paddingHorizontal: 20, marginTop: 20 },
  sectionTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 20,
  },
  description: {
    color: "#BDBDBD",
    fontSize: 15,
    lineHeight: 22,
    textAlign: "justify",
  },
  galleryImage: {
    width: 180,
    height: 120, 
    borderRadius: 14,
    marginRight: 12,
  },
  highlightItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  highlightText: { color: "#E0E0E0", marginLeft: 10, fontSize: 15 },
  bookNowButton: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#FF7043",
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: "center",
  },
  bookNowText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default LabuanBajoScreen;
