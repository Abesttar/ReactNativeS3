import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const TicketScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState("Round");
  const [selectedDate, setSelectedDate] = useState(23);

  const categories = ["Hotel", "Round", "Villa", "Attraction"];
  const dates = [
    { day: 22, date: "M" },
    { day: 23, date: "T" },
    { day: 24, date: "W" },
    { day: 25, date: "T" },
    { day: 26, date: "F" },
    { day: 27, date: "S" },
    { day: 28, date: "S" },
  ];

  const tickets = [
    {
      id: 1,
      from: "NL",
      to: "IDN",
      fromCity: "Rotterdam",
      toCity: "Geo Park",
      fromTime: "5:30pm",
      toTime: "3:30am",
      fromDate: "Mon, 23 Jun",
      toDate: "Tue, 24 Jun",
      price: "Rp 3.400.000",
      airline: "AIRLINES",
    },
    {
      id: 2,
      from: "NL",
      to: "IDN",
      fromCity: "Rotterdam",
      toCity: "Urban Bay",
      fromTime: "5:30pm",
      toTime: "3:30am",
      fromDate: "Mon, 23 Jun",
      toDate: "Tue, 24 Jun",
      price: "Rp 1.700",
      airline: "AIRLINES",
    },
  ];

  return (
    <ImageBackground
      source={require("../assets/images/ticket-bg.jpg")}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton}>
            <Icon name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Tickets</Text>
          <TouchableOpacity style={styles.menuButton}>
            <Icon name="ellipsis-vertical" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Country Selector */}
          <View style={styles.countrySection}>
            <Text style={styles.sectionLabel}>Current country</Text>
            <View style={styles.countrySelector}>
              <Text style={styles.countryText}>Netherlands</Text>
              <Icon name="chevron-down" size={20} color="#000" />
            </View>
          </View>

          {/* Category Tabs - Horizontal Scroll */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryScrollContainer}
            style={styles.categoryScroll}
          >
            {categories.map((category) => (
              <TouchableOpacity
                key={category}
                style={[
                  styles.categoryTab,
                  selectedCategory === category && styles.categoryTabActive,
                ]}
                onPress={() => setSelectedCategory(category)}
              >
                <Text
                  style={[
                    styles.categoryText,
                    selectedCategory === category && styles.categoryTextActive,
                  ]}
                >
                  {category}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Date Selector - Horizontal Scroll */}
          <View style={styles.dateSection}>
            <View style={styles.dateHeader}>
              <Text style={styles.dateMonth}>June, 2025</Text>
              <Icon name="chevron-down" size={20} color="#000" />
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.dateScrollContainer}
            >
              {dates.map((item) => (
                <TouchableOpacity
                  key={item.day}
                  style={[
                    styles.dateItem,
                    selectedDate === item.day && styles.dateItemActive,
                  ]}
                  onPress={() => setSelectedDate(item.day)}
                >
                  <Text
                    style={[
                      styles.dateDay,
                      selectedDate === item.day && styles.dateDayActive,
                    ]}
                  >
                    {item.date}
                  </Text>
                  <Text
                    style={[
                      styles.dateNumber,
                      selectedDate === item.day && styles.dateNumberActive,
                    ]}
                  >
                    {item.day}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* Tickets Count */}
          <Text style={styles.ticketsCount}>4 Tickets Found</Text>

          {/* Ticket Cards */}
          {tickets.map((ticket) => (
            <TouchableOpacity
              key={ticket.id}
              style={styles.ticketCard}
              activeOpacity={0.9}
            >
              <View style={styles.ticketLeft}>
                <Text style={styles.airlineVertical}>{ticket.airline}</Text>
                <TouchableOpacity style={styles.playButton}>
                  <MaterialCommunityIcons
                    name="play-circle"
                    size={32}
                    color="#fff"
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.ticketMain}>
                {/* Circles for ticket perforation effect */}
                <View style={styles.circleTop} />
                <View style={styles.circleBottom} />

                <View style={styles.ticketRight}>
                  <View style={styles.ticketRow}>
                    <View style={styles.ticketLocation}>
                      <Text style={styles.ticketCode}>{ticket.from}</Text>
                      <Text style={styles.ticketCity}>{ticket.fromCity}</Text>
                    </View>

                    <View style={styles.ticketPlane}>
                      <MaterialCommunityIcons
                        name="airplane"
                        size={24}
                        color="#000"
                      />
                      <View style={styles.planeClose}>
                        <Icon name="close" size={18} color="#000" />
                      </View>
                    </View>

                    <View style={styles.ticketLocationRight}>
                      <Text style={styles.ticketCode}>{ticket.to}</Text>
                      <Text style={styles.ticketCity}>{ticket.toCity}</Text>
                    </View>
                  </View>

                  <View style={styles.ticketTimeRow}>
                    <View>
                      <Text style={styles.ticketTime}>{ticket.fromTime}</Text>
                      <Text style={styles.ticketDate}>{ticket.fromDate}</Text>
                    </View>
                    <View style={styles.ticketTimeRight}>
                      <Text style={styles.ticketTime}>{ticket.toTime}</Text>
                      <Text style={styles.ticketDate}>{ticket.toDate}</Text>
                    </View>
                  </View>

                  <View style={styles.ticketFooter}>
                    <Text style={styles.ticketPrice}>{ticket.price}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 16,
    backgroundColor: "rgba(255, 255, 255, 0.98)",
  },
  backButton: {
    width: 40,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  menuButton: {
    width: 40,
    alignItems: "flex-end",
  },
  countrySection: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 12,
  },
  sectionLabel: {
    fontSize: 12,
    color: "#666",
    marginBottom: 8,
  },
  countrySelector: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  countryText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  categoryScroll: {
    marginBottom: 20,
  },
  categoryScrollContainer: {
    paddingHorizontal: 20,
    gap: 10,
  },
  categoryTab: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    marginRight: 10,
  },
  categoryTabActive: {
    backgroundColor: "#FF6B4A",
    borderColor: "#FF6B4A",
  },
  categoryText: {
    fontSize: 14,
    color: "#666",
    fontWeight: "500",
  },
  categoryTextActive: {
    color: "#fff",
  },
  dateSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  dateHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  dateMonth: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  dateScrollContainer: {
    gap: 8,
    paddingRight: 20,
  },
  dateItem: {
    width: 48,
    height: 60,
    borderRadius: 12,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  dateItemActive: {
    backgroundColor: "#FF6B4A",
    borderColor: "#FF6B4A",
  },
  dateDay: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },
  dateDayActive: {
    color: "#fff",
  },
  dateNumber: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
  },
  dateNumberActive: {
    color: "#fff",
  },
  ticketsCount: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  ticketCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginBottom: 16,
    borderRadius: 16,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  ticketLeft: {
    width: 60,
    backgroundColor: "#FF6B4A",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
  },
  airlineVertical: {
    color: "#fff",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 2,
    transform: [{ rotate: "-90deg" }],
    width: 80,
    textAlign: "center",
  },
  playButton: {
    marginTop: 20,
  },
  ticketMain: {
    flex: 1,
    position: "relative",
  },
  circleTop: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "rgba(248, 249, 250, 1)",
    position: "absolute",
    top: -10,
    left: -10,
    zIndex: 10,
  },
  circleBottom: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "rgba(248, 249, 250, 1)",
    position: "absolute",
    bottom: -10,
    left: -10,
    zIndex: 10,
  },
  ticketRight: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 16,
    paddingVertical: 16,
    borderLeftWidth: 2,
    borderLeftColor: "#E8E8E8",
    borderStyle: "dashed",
  },
  ticketRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  ticketLocation: {
    flex: 1,
  },
  ticketLocationRight: {
    flex: 1,
    alignItems: "flex-end",
  },
  ticketCode: {
    fontSize: 32,
    fontWeight: "700",
    color: "#000",
    marginBottom: 2,
  },
  ticketCity: {
    fontSize: 11,
    color: "#888",
  },
  ticketPlane: {
    alignItems: "center",
    position: "relative",
    marginHorizontal: 12,
  },
  planeClose: {
    position: "absolute",
    right: -10,
    top: -6,
  },
  ticketTimeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  ticketTimeRight: {
    alignItems: "flex-end",
  },
  ticketTime: {
    fontSize: 15,
    fontWeight: "600",
    color: "#000",
    marginBottom: 4,
  },
  ticketDate: {
    fontSize: 11,
    color: "#888",
  },
  ticketFooter: {
    flexDirection: "row",
    justifyContent: "flex-end",
    borderTopWidth: 1,
    borderTopColor: "#E8E8E8",
    paddingTop: 12,
  },
  ticketPrice: {
    fontSize: 17,
    fontWeight: "700",
    color: "#000",
  },
});

export default TicketScreen;