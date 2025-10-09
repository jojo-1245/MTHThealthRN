import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';

import SplashScreen from '@/components/splash-screen';
import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 앱 초기화 로직이 있다면 여기에 추가
    // 예: 폰트 로딩, 초기 데이터 로딩 등
  }, []);

  const handleSplashFinish = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <SplashScreen onFinish={handleSplashFinish} />;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
        <Stack.Screen name="self-diagnosis-add" options={{ headerShown: false }} />
        <Stack.Screen name="askings-1" options={{ headerShown: false }} />
        <Stack.Screen name="askings-2" options={{ headerShown: false }} />
        <Stack.Screen name="askings-3" options={{ headerShown: false }} />
        <Stack.Screen name="askings-4" options={{ headerShown: false }} />
        <Stack.Screen name="askings-5" options={{ headerShown: false }} />
        <Stack.Screen name="askings-6" options={{ headerShown: false }} />
        <Stack.Screen name="askings-7" options={{ headerShown: false }} />
        <Stack.Screen name="askings-8" options={{ headerShown: false }} />
        <Stack.Screen name="askings-9" options={{ headerShown: false }} />
        <Stack.Screen name="askings-10" options={{ headerShown: false }} />
        <Stack.Screen name="askings-11" options={{ headerShown: false }} />
        <Stack.Screen name="askings-12" options={{ headerShown: false }} />
        <Stack.Screen name="askings-13" options={{ headerShown: false }} />
        <Stack.Screen name="askings-14" options={{ headerShown: false }} />
        <Stack.Screen name="askings-15" options={{ headerShown: false }} />
        <Stack.Screen name="askings-16" options={{ headerShown: false }} />
        <Stack.Screen name="askings-17" options={{ headerShown: false }} />
        <Stack.Screen name="askings-18" options={{ headerShown: false }} />
        <Stack.Screen name="askings-19" options={{ headerShown: false }} />
        <Stack.Screen name="askings-20" options={{ headerShown: false }} />
        <Stack.Screen name="askings-21" options={{ headerShown: false }} />
        <Stack.Screen name="askings-22" options={{ headerShown: false }} />
        <Stack.Screen name="askings-23" options={{ headerShown: false }} />
        <Stack.Screen name="askings-24" options={{ headerShown: false }} />
        <Stack.Screen name="askings-25" options={{ headerShown: false }} />
        <Stack.Screen name="askings-26" options={{ headerShown: false }} />
        <Stack.Screen name="askings-27" options={{ headerShown: false }} />
        <Stack.Screen name="askings-28" options={{ headerShown: false }} />
        <Stack.Screen name="askings-29" options={{ headerShown: false }} />
        <Stack.Screen name="askings-30" options={{ headerShown: false }} />
        <Stack.Screen name="askings-31" options={{ headerShown: false }} />
        <Stack.Screen name="askings-32" options={{ headerShown: false }} />
        <Stack.Screen name="askings-33" options={{ headerShown: false }} />
        <Stack.Screen name="askings-34" options={{ headerShown: false }} />
        <Stack.Screen name="askings-35" options={{ headerShown: false }} />
        <Stack.Screen name="survey-result" options={{ headerShown: false }} />
        <Stack.Screen name="self-diagnosis-complete" options={{ headerShown: false }} />
        <Stack.Screen name="self-diagnosis-detail" options={{ headerShown: false }} />
        <Stack.Screen name="profile-edit" options={{ headerShown: false }} />
        <Stack.Screen name="medication-record" options={{ headerShown: false }} />
        <Stack.Screen name="medication-add" options={{ headerShown: false }} />
        <Stack.Screen name="medication-search" options={{ headerShown: false }} />
        <Stack.Screen name="medication-detail" options={{ headerShown: false }} />
        <Stack.Screen name="nutrition-search" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
