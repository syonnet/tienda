import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../Screens/HomeScreen";
import CategoriasScreen from "../Screens/CategoriasScreen";
import CestaScreen from "../Screens/CestaScreen";
import MiCuentaScreen from "../Screens/MiCuentaScreen";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="HomeTab">
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarLabel: "Home",
          headerTitle: "Home",
          headerStyle:{backgroundColor:"#0000ff78"},
          headerTintColor:"white",

          tabBarIcon: () => <Ionicons name="home-outline" size={30} color="#000000" />,
        }}
      />
      <Tab.Screen
        name="CategoriasTab"
        component={CategoriasScreen}
        options={{
          tabBarLabel: "Categorias",
          headerTitle: "Categorias",
          headerStyle:{backgroundColor:"#0000ff78"},
          headerTintColor:"white",

          tabBarIcon: () => <Ionicons name="copy-outline" size={30} color="#000000" />,
        }}
      />
      <Tab.Screen
        name="CestasTab"
        component={CestaScreen}
        options={{
          tabBarLabel: "Cesta",
          headerTitle: "Cesta",
          headerStyle:{backgroundColor:"#0000ff78"},
          headerTintColor:"white",

          tabBarIcon: () => <Ionicons name="archive-outline" size={30} color="#000000" />,
        }}
      />
      <Tab.Screen
        name="MiCuentaTab"
        component={MiCuentaScreen}
        options={{
          tabBarLabel: "Mi cuenta",
          headerTitle: "Mi cuenta",
          headerStyle:{backgroundColor:"#0000ff78"},
          headerTintColor:"white",

          tabBarIcon: () => <Ionicons name="people-outline" size={30} color="#000000" />,
        }}
      />
      
    </Tab.Navigator>
  );
}

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
