import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

// Import semua screens
import SplashScreen from "./src/screens/SplashScreen";
import HomeScreen from "./src/screens/HomeScreen";
import LabuanBajoScreen from "./src/screens/LabuanBajoScreen";
import TicketScreen from "./src/screens/TicketScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

// 🧩 Type untuk navigasi utama dan tab
export type RootStackParamList = {
  Splash: undefined;
  MainTabs: { screen?: keyof MainTabParamList } | undefined;
  LabuanBajo: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Ticket: undefined;
  Profile: undefined;
};

// Navigator instances
const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

// 🧭 Bottom Tab Navigator
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({
        route,
      }: {
        route: { name: keyof MainTabParamList };
      }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#1E1E1E",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          height: 70,
          position: "absolute",
        },
        tabBarIcon: ({
          focused,
          color,
          size,
        }: {
          focused: boolean;
          color: string;
          size: number;
        }) => {
          let iconName = "";

          if (route.name === "Home")
            iconName = focused ? "home" : "home-outline";
          else if (route.name === "Ticket")
            iconName = focused ? "ticket" : "ticket-outline";
          else if (route.name === "Profile")
            iconName = focused ? "person" : "person-outline";

          return (
            <Icon
              name={iconName}
              size={26}
              color={focused ? "#00C896" : "#fff"}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Ticket" component={TicketScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

// 🧭 Stack Navigator (Root)
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="LabuanBajo" component={LabuanBajoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
