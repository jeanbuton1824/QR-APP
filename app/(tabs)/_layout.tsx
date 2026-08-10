import Ionicons from '@expo/vector-icons/Ionicons';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: '#1F2429',
        },

        headerShadowVisible: false,

        headerTintColor: '#FFFFFF',

        headerTitleStyle: {
          fontWeight: '700',
        },

        tabBarActiveTintColor: '#FFD21F',

        tabBarInactiveTintColor: '#9CA3AF',

        tabBarStyle: {
          backgroundColor: '#1F2429',
          height: 75,
          paddingTop: 8,
          paddingBottom: 8,
        },

        tabBarLabelStyle: {
          fontSize: 13,
          fontWeight: '600',
        },
      }}
    >

      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',

          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={
                focused
                  ? 'home'
                  : 'home-outline'
              }
              color={color}
              size={28}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="scan"
        options={{
          title: 'Scan',

          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={
                focused
                  ? 'qr-code'
                  : 'qr-code-outline'
              }
              color={color}
              size={28}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="history"
        options={{
          title: 'History',

          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={
                focused
                  ? 'time'
                  : 'time-outline'
              }
              color={color}
              size={28}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',

          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={
                focused
                  ? 'person'
                  : 'person-outline'
              }
              color={color}
              size={28}
            />
          ),
        }}
      />

    </Tabs>
  );
}