import { SafeAreaView, StyleSheet } from 'react-native';
import { ExpensesContextProvider } from './src/store/expensesContext';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import RecentsScreen from './src/screens/RecentsScreen';
import { colors } from './src/constants/colors';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ExpensesContextProvider>
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
      </ExpensesContextProvider>
    </SafeAreaView>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={RecentsScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
