import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { Button, } from "react-native-paper";

const HomeScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#242424', gap: 30 }}>
            <Button mode="contained" onPress={() => {
                navigation.navigate('Sobre');
            }}>Ir para Sobre</Button>
            <Button mode="contained" onPress={() => {
                navigation.navigate('Contato');
            }}>Ir para Contato</Button>
        </View>
    )
}
export default HomeScreen;