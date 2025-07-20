import { Tabs } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function TabsLayout() {
  return (
    <SafeAreaProvider>
      <Tabs>
        <Tabs.Screen name="plan" options={{ title: "Planificar", headerShown: false }} />
        <Tabs.Screen name="daily" options={{ title: "Diario", headerShown: false }} />
      </Tabs>
    </SafeAreaProvider>
  );
}