import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LocationScreen from './screens/LocationScreen';
import CameraScreen from './screens/CameraScreen';
import WebviewScreen from './screens/WebviewScreen';
import BiometricScreen from './screens/BiometricScreen';
// import {LocationScreen,CameraScreen, WebviewScreen } from './screens/index'


const LOCATION='Location', CAMERA ='Camera', WEBVIEW='Webview', BIOMETRIC= 'Biometric';

function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Location"
                onPress={() => navigation.navigate(LOCATION)}
            />
            <Button
                title="Go to CAM"
                onPress={() => navigation.navigate(CAMERA)}
            />
            <Button
                title="Go to Webview"
                onPress={() => navigation.navigate(WEBVIEW)}
            />
            <Button
                title="Go to Biometric"
                onPress={() => navigation.navigate(BIOMETRIC)}
            />
        </View>
    );
}

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name={LOCATION} component={LocationScreen} />
                <Stack.Screen name={CAMERA} component={CameraScreen} />
                <Stack.Screen name={WEBVIEW} component={WebviewScreen} />
                <Stack.Screen name={BIOMETRIC} component={BiometricScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
