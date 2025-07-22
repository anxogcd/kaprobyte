import { secondaryColor } from '@/styles/colors';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function TabsLayout() {
  return (
    <SafeAreaProvider>
      <Tabs screenOptions={{ tabBarActiveTintColor: secondaryColor }}>
        <Tabs.Screen name="plan" options={{ title: "Planificar", headerShown: false, tabBarIcon: ({ color, size }) => <MaterialIcons name='calendar-month' size={size} color={color} /> }} />
        <Tabs.Screen name="daily" options={{ title: "Diario", headerShown: false, tabBarIcon: ({ color, size }) => <MaterialIcons name='calendar-view-day' size={size} color={color} /> }} />
        <Tabs.Screen name="saved" options={{ title: "Gardados", headerShown: false, tabBarIcon: ({ color, size }) => <MaterialIcons name='save' size={size} color={color} /> }} />
        <Tabs.Screen name="equals" options={{ title: "Equivalencias", headerShown: false, tabBarIcon: ({ color, size }) => <MaterialIcons name='agriculture' size={size} color={color} /> }} />
      </Tabs>
    </SafeAreaProvider>
  );
}