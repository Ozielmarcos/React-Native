
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "./screens/HomeScreen";
import SobreScreen from "./screens/SobreScreen";
import ContatoScreen from "./screens/ContatoScreen";

const NavegadorEmGaveta = createDrawerNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <NavegadorEmGaveta.Navigator>
                <NavegadorEmGaveta.Screen name="Home" component={HomeScreen} />
                <NavegadorEmGaveta.Screen name="Sobre" component={SobreScreen} />
                <NavegadorEmGaveta.Screen name="Contato" component={ContatoScreen} />
            </NavegadorEmGaveta.Navigator>
        </NavigationContainer>
    )
}
export default App;