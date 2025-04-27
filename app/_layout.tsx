import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { Text as DefaultText } from "react-native";

export default function RootLayout() {

  const [fontsLoaded] = useFonts({
    'Onest-Regular': require("../assets/fonts/Onest-Regular.ttf"),
  });

  return (
    <>
      <Stack>
        <Stack.Screen
          name="index"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="info"
          options={{ headerShown: false }}
        />
      </Stack>
      <StatusBar style='auto' />
    </>
  )
}
