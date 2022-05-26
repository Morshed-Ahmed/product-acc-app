import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/home';
import ProductItem from './src/screens/productItem';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    'SFProText-Regular': require('./assets/fonts/FontsFree-Net-SFProText-Regular.ttf'),
    'SFProText-Semibold': require('./assets/fonts/FontsFree-Net-SFProText-Semibold-1.ttf'),
    'SFProText-Medium': require('./assets/fonts/FontsFree-Net-SFProText-Medium-1.ttf'),
  });
  
  if (!loaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown:false}}>
        <Stack.Screen name="Item" component={ProductItem} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
