import { ExpensesContextProvider } from './src/store/expensesContext';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import RecentsScreen from './src/screens/RecentsScreen';
import { colors } from './src/constants/colors';
import AllExpensesScreen from './src/screens/AllExpensesScreen';
import AddExpenseScreen from './src/screens/AddExpenseScreen';
import RemoveExpenseScreen from './src/screens/RemoveExpenseScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const SCREEN_OPTIONS = {
  headerStyle: { backgroundColor: colors.primary },
  headerTintColor: colors.text,
  contentStyle: { backgroundColor: colors.background },
  sceneContainerStyle: { backgroundColor: colors.enphasis },
};

const tabIconConfig = ({ color, size, name }) => {
  return <Ionicons name={name} size={size} color={color} />;
};

export default function App() {
  return (
    <NavigationContainer>
      <ExpensesContextProvider>
        <StackScreens />
      </ExpensesContextProvider>
    </NavigationContainer>
  );
}

function StackScreens() {
  return (
    <Stack.Navigator screenOptions={SCREEN_OPTIONS}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Root"
        component={TabsScreens}
      />
      <Stack.Screen
        name="AddExpense"
        component={AddExpenseScreen}
        options={{
          presentation: 'modal',
        }}
      />
      <Stack.Screen
        name="RemoveExpense"
        component={RemoveExpenseScreen}
        options={{
          presentation: 'modal',
        }}
      />
    </Stack.Navigator>
  );
}

function TabsScreens({ navigation }) {
  const navigateTo = (screenName) => {
    navigation.navigate(screenName);
  };
  const tabsOptions = () => ({
    tabBarStyle: {
      backgroundColor: colors.primary,
    },
    tabBarActiveTintColor: colors.active,
    headerTintColor: colors.text,
    headerStyle: { backgroundColor: colors.primary },
    headerRight: () => (
      <Ionicons name="add" size={30} color={colors.text} onPress={() => navigateTo('AddExpense')} />
    ),
  });

  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={tabsOptions}>
      <Tab.Screen
        name="Home"
        component={RecentsScreen}
        options={{
          title: 'Recents',
          tabBarIcon: ({ focused, color, size }) =>
            tabIconConfig({ name: 'home', focused, color, size }),
        }}
      />
      <Tab.Screen
        name="AllExpenses"
        component={AllExpensesScreen}
        options={{
          title: 'Recents',
          tabBarIcon: ({ color, size }) => tabIconConfig({ name: 'calendar', color, size }),
        }}
      />
    </Tab.Navigator>
  );
}
