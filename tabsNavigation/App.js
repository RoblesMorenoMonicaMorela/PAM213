import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

//se importan las pantallas en las que se va a navegar
import Home from './screens/home';
import Profile from './screens/profile';
import Settings from './screens/settings';
import Detalle from './screens/detalle';


//se crean los navegadores
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

//React Navigation NO DEJA dos navegadores dentro de un mismo NavigationContainer

//MainTabs NO puede estar al mismo nivel que el Stack, sino que debe estar dentro de un Stack
function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Profile') iconName = 'person';
          else if (route.name === 'Settings') iconName = 'settings';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007BFF',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          paddingBottom: 5,
          height: 60,
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}

//Está fuera de los Tabs, PARA QUE NO APAREZCA en la barra inferior
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen 
          name="MainTabs" 
          component={MainTabs}
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="Detalle" 
          component={Detalle}
          options={{ title: "Detalle" }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
