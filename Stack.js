
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import SobreScreen from "./screens/SobreScreen";
import ContatoScreen from "./screens/ContatoScreen";

const NavegadorEmPilhas = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <NavegadorEmPilhas.Navigator>
                <NavegadorEmPilhas.Screen name="Home" component={HomeScreen} />
                <NavegadorEmPilhas.Screen name="Sobre" component={SobreScreen} />
                <NavegadorEmPilhas.Screen name="Contato" component={ContatoScreen} />
            </NavegadorEmPilhas.Navigator>
        </NavigationContainer>
    )
}
export default App;