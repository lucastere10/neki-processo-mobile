import { StatusBar } from 'expo-status-bar';
import { TabRoutes } from './src/routes/BottomTabNavigator/BottonTabNavigator';
import { AuthStackScreen } from './src/routes/StackNavigator/StackNavigator';
import { useEffect, useState, useCallback  } from 'react';
import { checkAuth } from './src/service/auth/auth';
import { useFonts } from 'expo-font';

export default function App() {

  const [auth, setAuth] = useState(false);

  const [fontsLoaded, fontError] = useFonts({
    'Poppins-Regular': require('./src/assets/fonts/Poppins-Regular.otf'),
    'Poppins-SemiBold': require('./src/assets/fonts/Poppins-SemiBold.otf'),
    'Poppins-Bold': require('./src/assets/fonts/Poppins-Bold.otf'),
    'BebasNeue-Regular': require('./src/assets/fonts/BebasNeue-Regular.ttf')
  })

  useEffect(() => {
    checkAuth(setAuth);
  }, []); 

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded || fontError) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <StatusBar style="inverted" />
      {auth ? <TabRoutes setAuth={setAuth} /> : <AuthStackScreen setAuth={setAuth} />}
    </>
  );
};
