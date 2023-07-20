
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import SobreScreen from "./screens/SobreScreen";
import ContatoScreen from "./screens/ContatoScreen";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const NavegadorEmAbas = createBottomTabNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <NavegadorEmAbas.Navigator>
                <NavegadorEmAbas.Screen options={{
                    tabBarIcon: ({ color, size }) => {
                        return <MaterialCommunityIcons name="home" color={color} size={size} />;
                    }
                }} name="Home" component={HomeScreen} />
                <NavegadorEmAbas.Screen options={{
                    tabBarIcon: ({ color, size }) => {
                        return <MaterialCommunityIcons name="information" color={color} size={size} />;
                    }
                }} name="Sobre" component={SobreScreen} />
                <NavegadorEmAbas.Screen options={{
                    tabBarIcon: ({ color, size }) => {
                        return <MaterialCommunityIcons name="email" color={color} size={size} />;
                    }
                }} name="Contato" component={ContatoScreen} />
            </NavegadorEmAbas.Navigator>
        </NavigationContainer>
    )
}
export default App;