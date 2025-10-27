import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";

type HomeScreenProp = StackNavigationProp<RootStackParamList, "MainTabs">;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenProp>();

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Hi,</Text>
          <Text style={styles.name}>D BEST AR</Text>
          <TouchableOpacity style={styles.profileButton}>
            <Icon name="heart-outline" size={22} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Banner */}
        <View style={styles.banner}>
          <View>
            <Text style={styles.bannerTitle}>Plan Your</Text>
            <Text style={[styles.bannerTitle, { color: "#fff" }]}>
              Summer!
            </Text>
          </View>
          <TouchableOpacity style={styles.bannerButton}>
            <Icon name="arrow-forward" size={22} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Icon name="search" size={20} color="#555" />
            <TextInput
              placeholder="Search destination..."
              placeholderTextColor="#888"
              style={styles.searchInput}
            />
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Icon name="options-outline" size={22} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* Section Header */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Destination</Text>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>

        {/* Destination Cards */}
        <View style={styles.cardContainer}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate("LabuanBajo")}
          >
            <Image
              source={require("../assets/images/labuanbajo.jpg")}
              style={styles.cardImage}
            />
            <View style={styles.cardOverlay}>
              <Text style={styles.countryText}>🇮🇩 Indonesia</Text>
              <View style={styles.cardBottom}>
                <Text style={styles.cardTitle}>Geo Park, Ciletuh</Text>
                <Text style={styles.cardPrice}>Rp 1.000.000/pax</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => {}}>
            <Image
              source={require("../assets/images/venice.jpg")}
              style={styles.cardImage}
            />
            <View style={styles.cardOverlay}>
              <Text style={styles.countryText}>🇮🇩 Indonesia</Text>
              <View style={styles.cardBottom}>
                <Text style={styles.cardTitle}>Sawarna, Banten</Text>
                <Text style={styles.cardPrice}>Rp 500.000/pax</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Icon name="home" size={26} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="people" size={26} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="person" size={26} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9F8F4" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  greeting: { fontSize: 16, color: "#555" },
  name: { fontSize: 22, fontWeight: "bold", color: "#000" },
  profileButton: {
    backgroundColor: "#FFECEC",
    padding: 8,
    borderRadius: 10,
  },
  banner: {
    backgroundColor: "#FF7043",
    margin: 20,
    borderRadius: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  bannerTitle: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
  bannerButton: {
    backgroundColor: "#000",
    borderRadius: 20,
    padding: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  searchBar: {
    flex: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 14,
    paddingHorizontal: 12,
    height: 45,
    elevation: 2,
  },
  searchInput: {
    marginLeft: 10,
    flex: 1,
    color: "#000",
  },
  filterButton: {
    backgroundColor: "#1E1E1E",
    marginLeft: 10,
    borderRadius: 12,
    padding: 12,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 20,
  },
  sectionTitle: { fontSize: 18, fontWeight: "bold", color: "#000" },
  viewAll: { color: "#555", fontWeight: "500" },
  cardContainer: { padding: 20, gap: 20 },
  card: { borderRadius: 16, overflow: "hidden", position: "relative" },
  cardImage: { width: "100%", height: 200, borderRadius: 16 },
  cardOverlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 12,
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  countryText: { color: "#fff", fontSize: 14 },
  cardBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardTitle: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  cardPrice: { color: "#fff", fontSize: 14 },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#1E1E1E",
    height: 70,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default HomeScreen;
