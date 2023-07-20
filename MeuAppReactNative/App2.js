import {
  StatusBar, Text, View, SafeAreaView,
  Image, TextInput, ScrollView
} from 'react-native';

import { Avatar, Button, Card, Switch } from 'react-native-paper'

export default function App() {
  return (
    <View>
      <SafeAreaView>
        <ScrollView>
          <StatusBar translucent={false} backgroundColor="#000" />
          <Text
            style={{
              fontSize: 48
            }}
          >
            Olá Expo!
          </Text>

          <Image
            source={{
              uri: 'https://mundoconectado.com.br/uploads/2022/05/25/25658/cacto.jpg'
            }}
            style={{
              height: 400,
              width: 500,
              marginBottom: 20,
            }}
          />
          <TextInput placeholder='Informe seu nome'
            style={{
              fontSize: 32,
              borderWidth: 1,
              borderColor: 'black',
              padding: 8,
              margin: 8,
              borderRadius: 8,
            }} />
          <Button mode='contained'
            onPress={() => alert('Botão pressionado')}>
            Clique aqui
          </Button>
          <Switch value={true} />
          <Avatar.Icon size={100} icon="camera" />
          <Card mode='elevated' />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}