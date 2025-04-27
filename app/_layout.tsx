import { Stack } from "expo-router";
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

export default function RootLayout() {

  const [loaded] = useFonts({
    Onest: require("../assets/fonts/Onest-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }


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
