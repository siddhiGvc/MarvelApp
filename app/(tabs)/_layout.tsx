import { Tabs } from 'expo-router';
import React,{useState} from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { GestureDetector, Gesture ,PanGestureHandler} from 'react-native-gesture-handler';

export default function TabLayout() {
  const [isTabBarVisible, setIsTabBarVisible] = useState(true);
  const colorScheme = useColorScheme();

  const handleGestureEvent = (event:any) => {
    if (event.nativeEvent.translationY < -50) { // Swipe Up
      setIsTabBarVisible(true);
    } else if (event.nativeEvent.translationY > 50) { // Swipe Down
      setIsTabBarVisible(false);
    }
  };

  return (


  
    
    
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        // tabBarStyle: {overflow:'scroll'},
        // tabBarStyle: isTabBarVisible ? {} : { display: 'none' }, // Control tab visibility
        tabBarStyle: route.name === ''  ? { } : {display: 'none',overflow:'scroll'},
      })}
      >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
    
    </Tabs>
    
  
  );
}