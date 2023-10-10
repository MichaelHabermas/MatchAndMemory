import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { hideAsync, preventAutoHideAsync } from 'expo-splash-screen';
import * as React from 'react';
window.React = React;
import { useCallback } from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { assets } from './app/assets';
import { ProvideAppContext } from './app/contexts/appContext/AppContextProvider';
import { Navigator } from './app/navigation/Navigator';

// Keep the splash screen visible while we fetch resources
preventAutoHideAsync();

const App = (): JSX.Element => {
    const [fontsLoaded] = useFonts({
        AlfaSlabOne_400Regular: require('./app/assets/fonts/AlfaSlabOne-Regular.ttf'),
        BowlbyOneSC_400Regular: require('./app/assets/fonts/BowlbyOneSC-Regular.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await hideAsync();
        }
    }, [fontsLoaded]);

    onLayoutRootView();

    if (!fontsLoaded || !assets?.menuAssets?.screenBGOverlay) {
        // TODO: this is *bad* UX. Make a proper <AppLoading /> component
        return <View />;
    }

    return (
        <NavigationContainer>
            <ProvideAppContext>
                <SafeAreaProvider>
                    <Navigator />
                </SafeAreaProvider>
            </ProvideAppContext>
        </NavigationContainer>
    );
};

export default App;
